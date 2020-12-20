import requests
from bs4 import BeautifulSoup
from urllib.parse import urlsplit, urljoin, urlparse
import re

def analyze(url, user_agent):

    headers = {
        "User-agent": user_agent
    }

    #analyse website with given url
    analysis = website_analysis(url, headers)

    return analysis

def make_soup(url, headers):
    r = requests.get(url, headers = headers).content
    soup = BeautifulSoup(r, 'html.parser', from_encoding='utf-8')
    return soup

def website_analysis(url, headers):

    #create request
    soup = make_soup(url, headers)

    #basic info
    title = get_title_tag(soup)
    description = get_meta_description(soup)
    h1 = get_h1(soup)
    h2 = get_h2(soup)
    other_h = get_other_h(soup)
    url_title = get_url_title(url)
    keywords = get_keywords(title, description, h1, url_title)

    #links
    urls_info = get_internal_and_external_links(url, soup)
    external_links = urls_info['external_links']
    external_links_count = urls_info['external_links_count']
    internal_links = urls_info['internal_links']
    internal_links_count = urls_info['internal_links_count']

    #images and keywords extraction
    images_count = get_images_count(soup)

    #Append all stuff to competitions
    result = {
        "url" : url,
        "title" : title,
        "description": description,
        "url_title": url_title,
        "keywords": keywords,
        "h1": h1,
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
        "internal links": {
            "internal_links_count": internal_links_count,
            "internal_links": internal_links
        },
        "images_count": images_count
    }

    return result

def make_soup(url, headers):
    r = requests.get(url, headers=headers).content
    soup = BeautifulSoup(r, 'html.parser', from_encoding='utf-8')
    return soup

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

    data = {}

    if soup.find_all('h1'):
        h1 = soup.find_all('h1')[0]
        data.setdefault('val1', []).append(h1.text if h1 else "N/A")
        data['val1'][0] = data['val1'][0].replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.')
    else:
        data.setdefault('val1', []).append("N/A")

    return data['val1'][0]

def get_h2(soup):

    h2 = soup.find_all('h2')
    results = []

    if h2:
        temp_result = (h.text for h in h2)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.')
            results.append(h)
    else:
        results = "N/A"

    return results

def get_other_h(soup):

    h_others = soup.find_all(re.compile('^h[3-6]$'))
    results = []

    if h_others:
        temp_result = (h.text for h in h_others)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.')
            results.append(h)
    else:
        results = "N/A"

    return results

def get_title_tag(soup):

    data = {}

    if soup.find_all('title'):
        title = soup.find_all('title')[0]
        data.setdefault('val1', []).append(title.text if title else "N/A")
        data['val1'][0] = data['val1'][0].replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.')
    else:
        data.setdefault('val1', []).append("N/A")

    return data['val1'][0]

def get_meta_description(soup):

    result = []

    for meta in soup.findAll("meta"):
        if meta:
            metaname = meta.get('name', '').lower()
            metaprop = meta.get('property', '').lower()
            if 'description' == metaname or metaprop.find("description")>0:
                desc = meta['content'].strip()
                result.append(desc)
        else:
            result.append("N/A")

    if not result:
        result.append("N/A")

    return result[0]

def get_images_count(soup):

    images = soup.find_all('img')

    if images:
        result = len(images)
    else:
        result = "N/A"

    return result

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
        if base_url not in href:
            # check if url is not in external link
            if href not in external_links:
                if "tel:" not in href:
                    external_links.append(href)
                else:
                    pass
            continue

        internal_links.append(href)

    eu_len = len(external_links)
    iu_len = len(internal_links)

    context = {
        'external_links_count' : eu_len,
        'internal_links_count' : iu_len,
        'external_links' : external_links,
        'internal_links' : internal_links,
    }

    return context

def get_url_title(url):

    title = url.rsplit('/', 1)[-1]
    title = title.replace('-', ' ').replace('_', ' ').replace('.html', '')

    if not title:
        title = url.rsplit('/', 1)[-2]
        title = title.rsplit('/', 1)[-1]
        title = title.replace('-', ' ').replace('_', ' ').replace('.html', '')

    return title

def get_keywords(title, meta_desc, h1, url_title):

    if title is not None:
        title = title.lower()
    else:
        title = "None"
    if meta_desc is not None:
        meta_desc = meta_desc.lower()
    else:
        meta_desc = "None"
    if h1 is not None:
        h1 = h1.lower()
    else:
        h1 = "None"
    if url_title is not None:
        url_title = url_title.lower()
    else:
        url_title = "None"

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

    return "N/A"
