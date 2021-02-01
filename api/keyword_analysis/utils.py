import requests
from bs4 import BeautifulSoup
from urllib.parse import urlsplit, urljoin, urlparse
import re
import random
import string

def analyze(keyword, user_agent):

    headers = {
        "User-agent": user_agent
    }

    results = {
        "keyword": keyword,
        "results": []
    }

    #get links from bing
    bing_links = get_bing_links(keyword, headers)

    #and for all of them get website analysis
    for link in bing_links:

        #analyse all urls from bing results
        analysis = website_analysis(link, headers)
        results['results'].append(analysis)

    return results

def make_soup(url, headers):
    r = requests.get(url, headers = headers).content
    soup = BeautifulSoup(r, 'html.parser', from_encoding='utf-8')
    return soup

def website_analysis(url, headers):

    #create request
    soup = make_soup(url, headers)

    #basic info
    titles = get_title_tags(soup)
    descriptions = get_meta_descriptions(soup)
    h1s = get_h1(soup)
    h2 = get_h2(soup)
    other_h = get_other_h(soup)
    url_title = get_url_title(url)

    #get first title
    if len(titles) >= 1:
        title = titles[0]
    else:
        title = None

    #get first description
    if len(descriptions) >= 1:
        description = descriptions[0]
    else:
        description = None

    #get first h1
    if len(h1s) >= 1:
        h1 = h1s[0]
    else:
        h1 = None

    keywords = get_keyword(title, description, h1, url_title)

    #links
    urls_info = get_internal_and_external_links(url, soup)
    external_links = urls_info['external_links']
    external_links_count = len(urls_info['external_links'])
    internal_links = urls_info['internal_links']
    internal_links_count = len(urls_info['internal_links'])

    #images and keywords extraction
    images_count = get_images_count(url, soup)

    #Append all stuff to competitions
    result = {
        "url" : url,
        "titles" : titles,
        "descriptions": descriptions,
        "url_title": url_title,
        "keywords": keywords,
        "h1": h1s,
        "h2": {
            "h2_count": len(h2),
            "h2": h2
        },
        "other_h": {
            "other_h_count": len(other_h),
            "other_h": other_h
        },
        "external_links": {
            "external_links_count": external_links_count,
            "external_links": external_links
        },
        "internal_links": {
            "internal_links_count": internal_links_count,
            "internal_links": internal_links
        },
        "images_count": images_count
    }

    return result

def check_robots_txt(url, headers):

    base_url = get_base_url(url)

    #check robots.txt
    result = os.popen("curl " + base_url + "robots.txt").read()
    result_data_set = {"Disallowed":[], "Allowed":[]}

    for line in result.split("\n"):
        if line.startswith('Allow'):    # this is for allowed url
            result_data_set["Allowed"].append(base_url + line.split(': ')[1].split(' ')[0])
        elif line.startswith('Disallow'):    # this is for disallowed url
            result_data_set["Disallowed"].append(base_url + line.split(': ')[1].split(' ')[0])

    if result_data_set["Allowed"]:
        return result_data_set["Allowed"]
    else:
        return False

def is_valid(url):
    """
    Checks whether `url` is a valid URL.
    """
    parsed = urlparse(url)
    return bool(parsed.netloc) and bool(parsed.scheme)

def get_h1(soup):

    h1 = soup.find_all('h1')
    results = []

    if h1:
        temp_result = (h.text for h in h1)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(h)
    else:
        pass

    return results

def get_h2(soup):

    h2 = soup.find_all('h2')
    results = []

    if h2:
        temp_result = (h.text for h in h2)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(h)
    else:
        pass

    return results

def get_other_h(soup):

    h_others = soup.find_all(re.compile('^h[3-6]$'))
    results = []

    if h_others:
        temp_result = (h.text for h in h_others)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(h)
    else:
        pass

    return results

def get_title_tags(soup):

    results = []

    for title in soup.findAll("title"):
        if title:
            title_text = (title.text).replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(str(title_text))
        else:
            pass

    if not results:
        pass

    return results

def get_meta_descriptions(soup):

    results = []

    for meta in soup.findAll("meta"):
        if meta:
            metaname = meta.get('name', '').lower()
            metaprop = meta.get('property', '').lower()
            if 'description' == metaname or metaprop.find("description")>0:
                desc = meta['content'].strip()
                results.append(desc)
        else:
            pass

    if not results:
        pass

    return results

def get_images_count(url, soup):

    images = soup.find_all('img')

    return len(images)

def get_base_url(url):

    url_splited = urlsplit(url)
    base_url = url_splited.scheme + "://" + url_splited.netloc + "/"

    return base_url

def get_internal_and_external_links(url, soup):

    internal_links = []
    external_links = []

    base_url = get_base_url(url)

    for a_tag in soup.findAll("a"):
        href = a_tag.attrs.get("href")
        if href == "" or href is None:
            # href empty tag
            continue
        # join the URL if it's relative (not absolute link)
        href = urljoin(url, href)
        parsed_href = urlparse(href)
        # remove URL GET parameters, URL fragments, etc.
        href = parsed_href.scheme + "://" + parsed_href.netloc + parsed_href.path
        if not is_valid(href):
            # not a valid URL
            continue
        if href in internal_links:
            # already in the set
            continue
        if 'javascript://void(0)' in href:
            #remove all void hrefs
            continue
        if 'mailto://' in href:
            #and mail hrefs
            continue
        if 'call://' in href:
            #and call hrefs
            continue
        if 'tel:' in href:
            #and call hrefs
            continue
        if base_url not in href:
            # check if url is not in external link
            if href not in external_links:
                external_links.append(href)
            continue

        internal_links.append(href)

    context = {
        'external_links' : external_links,
        'internal_links' : internal_links,
    }

    return context

def get_url_title(url):

    title = urlparse(url).path

    if str(title) == "/":
        return None

    return title

def get_keyword(title, meta_desc, h1, url_title):

    #if one of parameters is None, match to it random hash
    if title is not None:
        title = title.lower()
    else:
        title = get_random_string(8)
    if meta_desc is not None:
        meta_desc = meta_desc.lower()
    else:
        meta_desc = get_random_string(8)
    if h1 is not None:
        h1 = h1.lower()
    else:
        h1 = get_random_string(8)
    if url_title is not None:
        url_title = url_title.lower()
    else:
        url_title = get_random_string(8)

    #hierarchy of elements:
    #   1 url_title
    #   2 title
    #   3 meta_desc
    #   4 h1_list

    #some of combinations of keyword extraction
    if url_title in title:
        if url_title in meta_desc:
            return url_title

    if url_title in title:
        if title in meta_desc:
            return title

    if url_title in title:
        if url_title in h1:
            return url_title

    if url_title in title:
        if h1 in url_title:
            return h1

    if url_title in meta_desc:
        if url_title in h1:
            return url_title

    if url_title in meta_desc:
        if h1 in url_title:
            return h1

    if title in meta_desc:
        if title in h1:
            return title

    if title in meta_desc:
        if h1 in title:
            return h1

    if h1 in url_title:
        if h1 in title:
            return h1

    if h1 in url_title:
        if h1 in meta_desc:
            return h1

    if h1 in title:
        if h1 in meta_desc:
            return h1

    if title:
        return title

    if meta_desc:
        return meta_desc

    if h1:
        return h1

    return None

def get_random_string(length):
    # put your letters in the following string
    sample_letters = 'abcdefghijklmnopqrstuvwxyz'
    result_str = ''.join((random.choice(sample_letters) for i in range(length)))

    return result_str

def get_bing_links(keyword, headers):

    results = []
    page = requests.get("https://www.bing.com/search?", headers = headers, params = {"q": keyword}).text
    soup = BeautifulSoup(page, 'html.parser')

    anchors = soup.find_all("a")
    #anchors = anchors[:len(anchors)-8]

    for anchor in anchors:
        if anchor is not None:
            try:
                if "http" in anchor["href"]:
                    results.append(anchor["href"])
            except KeyError:
                continue

    results = results[:len(results)-8]

    return results
