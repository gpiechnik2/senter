import requests
import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlsplit, urljoin, urlparse
import re
import json

def website_analysis(url, user_agent):

    #declare null globally to avoid json converting
    global null
    null = str(None)

    #declare headers
    headers = {
        "User-agent": user_agent
    }

    #create request
    soup = make_soup(url, headers)

    #get basic info
    titles = get_title_tag(soup)
    descriptions = get_meta_descriptions(soup)
    h1 = get_h1(soup)
    h2 = get_h2(soup)
    other_h = get_other_h(soup)
    url_title = get_url_title(url)

    #get keyword based on data above
    keyword = get_keyword(titles[0], descriptions[0], h1[0], url_title)

    #get main title based on keyword and len of title
    main_title = get_main_title(keyword, titles)

    #get main h1 based on keyword and len of h1
    main_h1 = get_main_h1(keyword, h1)

    #get main description based on keyword and len of descriptions
    main_description = get_main_description(keyword, descriptions)

    #internal and external links
    urls_info = get_internal_and_external_links(url, soup)
    external_links = urls_info['external_links']
    internal_links = urls_info['internal_links']

    #images and keyword extraction
    images = get_images(url, soup)
    images_links = get_links_images(url, soup, images)

    #analyze data
    titleAnalysis = title_list_analysis(keyword, titles)
    h1_analysis = h1_list_analysis(keyword, h1)
    h2_analysis = h2_list_analysis(h2)
    other_h_analysis = other_h_list_analysis(other_h)
    descriptions_analysis = descriptions_list_analysis(keyword, descriptions)
    urlTitleAnalysis = url_title_analysis(keyword, url_title)
    external_links_status = get_links_status(external_links)
    internal_links_status = get_links_status(internal_links)
    externalLinksAnalysis = external_links_analysis(external_links)
    internalLinksAnalysis = internal_links_analysis(internal_links)
    images_analysis = get_images_analysis(url, soup)

    #Append all stuff to competitions
    results = {
        'url' : url,
        'keyword': keyword,
        'title' : {
            'title_count': len(titles),
            'main_title': main_title,
            'titles': titles,
            'analysis': titleAnalysis
        },
        'description': {
            'descriptions_count': len(descriptions),
            'main_description': main_description,
            'descriptions': descriptions,
            'analysis': descriptions_analysis
        },
        'url_title': {
            'url_title': url_title,
            'analysis': urlTitleAnalysis
        },
        'h1': {
            'h1_count': len(h1),
            'main_h1': main_h1,
            'h1': h1,
            'analysis': h1_analysis
        },
        'h2': {
            'h2_count': len(h2),
            'h2': h2,
            'analysis': h2_analysis
        },
        'other_h': {
            'other_h_count': len(other_h),
            'other_h': other_h,
            'analysis': other_h_analysis
        },
        'external_links': {
            'external_links_count': len(external_links),
            'external_links': external_links,
            'status': external_links_status,
            'analysis': externalLinksAnalysis
        },
        'internal_links': {
            'internal_links_count': len(internal_links),
            'internal_links': internal_links,
            'status': internal_links_status,
            'analysis': internalLinksAnalysis
        },
        'images': {
            'images_counts': len(images),
            'images': images_links,
            'analysis': images_analysis
        }
    }

    return results

def make_soup(url, headers):
    r = requests.get(url, headers = headers).content
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
        data['val1'][0] = data['val1'][0].replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
    else:
        data.setdefault('val1', []).append("N/A")

    return data['val1']

def get_h2(soup):

    h2 = soup.find_all('h2')
    results = []

    if h2:
        temp_result = (h.text for h in h2)
        for h in temp_result:
            h = h.replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(h)
    else:
        results = null

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
        results = "N/A"

    return results

def get_title_tag(soup):

    results = []

    for title in soup.findAll("title"):
        if title:
            title_text = (title.text).replace('\r\n', '').replace('\n', '').replace('\r', '').replace('  ', '').replace('   ', '').replace('    ', '').replace('. ','.').replace('\xa0', ' ')
            results.append(str(title_text))
        else:
            results.append(null)

    if not results:
        results.append(null)

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
            results.append(null)

    if not results:
        results.append(null)

    return results

def get_images(url, soup):

    images = soup.find_all('img')

    return images

def get_links_images(url, soup, images):

    results = []
    base_url = get_base_url(url)

    for image in images:
        image_url = base_url + image.get('src')
        results.append(image_url)

    return results

def get_images_analysis(url, soup):

    results = []

    base_url = get_base_url(url)
    images = soup.find_all('img')
    reqs = (requests.get(base_url + pic.get('src')) for pic in images)

    #open every image in new window and check attributes and size
    for r in reqs:
        path, file_ = os.path.split('{}'.format(soup.find('img').get('src')))
        image_size = round(len(r.content)/(1024))
        image_alt = soup.find('img').get('alt')

        if image_size < 200:
            results.append({
                "url": r.url,
                "file_url": file_,
                "status": "Valid",
                "message": "Rozmiar zdjęcia jest zbyt poprawny i wynosi {}.".format(image_size)
            })

        if image_size >= 200:
            results.append({
                "url": r.url,
                "file_url": file_,
                "status": "Invalid",
                "message": "Rozmiar zdjęcia jest zbyt duży. Obecny: {}. Sugerowany: 200MB.".format(image_size)
            })

        if not image_alt:
            results.append({
                "url": r.url,
                "file_url": file_,
                "status": "Invalid",
                "message": "Zdjęcie nie posiada atrybutu alt."
            })

        if image_alt is null:
            results.append({
                "url": r.url,
                "file_url": file_,
                "status": "Invalid",
                "message": "Zdjęcie posiada pusty atrybut alt."
            })

        if image_alt:
            results.append({
                "url": r.url,
                "file_url": file_,
                "status": "Valid",
                "message": "Zdjęcie posiada poprawny atrybut alt."
            })

    return results

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
        if href == "" or href is null:
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

    context = {
        'external_links' : external_links,
        'internal_links' : internal_links,
    }

    return context

def get_url_title(url):

    title = url.rsplit('/', 1)[-1]
    title = title.replace('-', ' ').replace('_', ' ').replace('.html', '').replace('\xa0', ' ')

    if not title:
        title = url.rsplit('/', 1)[-2]
        title = title.rsplit('/', 1)[-1]
        title = title.replace('-', ' ').replace('_', ' ').replace('.html', '').replace('\xa0', ' ')

    return title

def get_keyword(title, meta_desc, h1, url_title):

    if title is not null:
        title = title.lower()
    else:
        title = null
    if meta_desc is not null:
        meta_desc = meta_desc.lower()
    else:
        meta_desc = null
    if h1 is not null:
        h1 = h1.lower()
    else:
        h1 = null
    if url_title is not null:
        url_title = url_title.lower()
    else:
        url_title = null

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

    return null

def check_status(url):

    r = requests.get(url)
    status = r.status_code

    return status

def get_links_status(urls):

    results = []

    for url in urls:
        status = check_status(url)

        if status == 200:
            results.append({
                "url": url,
                "url_status": status,
                "status": "Valid",
                "message": "Poprawny status."
            })
        else:
            results.append({
                "url": url,
                "url_status": status,
                "status": "Invalid",
                "message": "Status strony jest niepoprawny."
            })

    return results

def get_main_h1(keyword, h1):

    if len(h1) == 1:
        return h1[0]
    elif len(h1) == null:
        return null
    else:
        #clean h1 to get h1 with keyword inside only
        h1_with_keyword = []
        for tag in h1:
            if keyword.lower() in tag.lower():
                h1_with_keyword.append(tag)
            else:
                continue

        #return the shortest h1, null or the only h1
        if len(h1_with_keyword) > 1:

            #we assume, that if there are two the same titles, min_desc is None
            min_desc = min(h1_with_keyword, key = len)

            if min_desc:
                return min_desc
            else:
                return h1_with_keyword[0]

        elif len(h1_with_keyword) <= 0:
            return null
        else:
            return h1_with_keyword[0]

    return null

def get_main_title(keyword, title):

    if len(title) == 1:
        return title[0]
    elif len(title) == null:
        return null
    else:
        #clean h1 to get title with keyword inside only
        title_with_keyword = []
        for tag in title:
            if keyword.lower() in tag.lower():
                title_with_keyword.append(tag)
            else:
                continue

        #return the shortest title, null or the only title
        if len(title_with_keyword) > 1:

            #we assume, that if there are two the same titles, min_desc is None
            min_desc = min(title_with_keyword, key = len)

            if min_desc:
                return min_desc
            else:
                return title_with_keyword[0]


        elif len(title_with_keyword) <= 0:
            return null
        else:
            return str(title_with_keyword[0])

    return null

def get_main_description(keyword, descriptions):

    if len(descriptions) == 1:
        return descriptions[0]
    elif len(descriptions) == null:
        return null
    else:
        #clean descriptions to get descriptions with keyword inside only
        descriptions_with_keyword = []
        for tag in descriptions:
            if keyword.lower() in tag.lower():
                descriptions_with_keyword.append(tag)
            else:
                continue

        #return the shortest descriptions, null or the only descriptions
        if len(descriptions_with_keyword) > 1:

            #we assume, that if there are two the same descriptions, min_desc is None
            min_desc = min(descriptions_with_keyword, key = len)

            if min_desc:
                return min_desc
            else:
                return descriptions_with_keyword[0]

        elif len(descriptions_with_keyword) <= 0:
            return null
        else:
            return descriptions_with_keyword[0]

    return null

def descriptions_list_analysis(keyword, descriptions):

    if len(descriptions) is null:

        return [{
            "status": "Invalid",
            "message": "Brak znacznika description na stronie."
        }]

    elif len(descriptions) == 1:

        results = [{
            "status": "Valid",
            "message": "Znaleziony znacznik description na stronie."
        }]

        analysis = description_analysis(keyword, descriptions[0])
        results.extend(analysis)

        return results

    elif len(descriptions) > 1:

        results = [{
            "status": "Invalid",
            "message": "Ilość znacznika description na stronie jest za duża."
        }]

        for tag in descriptions:
            analysis = description_analysis(keyword, tag)
            results.extend(analysis)

        return results

def description_analysis(keyword, description):

    results = []

    #check if keyword exists in description tag
    if keyword.lower() in description.lower():
        results.append({
            "status": "Valid",
            "message": "Znacznik description({}) zawiera w sobie słowo bądź frazę kluczową.".format(description)
        })
    else:
        results.append({
            "status": "Invalid",
            "message": "Znacznik description({}) nie zawiera w sobie słowa bądź frazy kluczowej.".format(description)
        })

    #check length of description
    if len(description) >= 50 <= 160:
        results.append({
            "status": "Valid",
            "message": "Znacznik description({}) jest poprawnej długości.".format(description)
        })
    elif len(description) < 50:
        free_characters = 50 - len(description)
        results.append({
            "status": "Invalid",
            "message": "Znacznik description({}) jest zbyt krótki. Dodaj do niego {} znaków.".format(description, free_characters)
        })
    else:
        free_characters = len(description) - 160
        results.append({
            "status": "Invalid",
            "message": "Znacznik description({}) jest zbyt długi. Skróć go o {} znaków.".format(description, free_characters)
        })

    return results

def title_list_analysis(keyword, titles):

    if len(titles) is null:

        return [{
            "status": "Invalid",
            "message": "Brak znacznika title na stronie."
        }]

    elif len(titles) == 1:

        results = [{
            "status": "Valid",
            "message": "Znaleziony znacznik title na stronie."
        }]

        analysis = title_analysis(keyword, titles[0])
        results.extend(analysis)

        return results

    elif len(titles) > 1:

        results = [{
            "status": "Invalid",
            "message": "Ilość znacznika title na stronie jest za duża."
        }]

        for tag in titles:
            analysis = title_analysis(keyword, tag)
            results.extend(analysis)

        return results

def title_analysis(keyword, title):

    results = []

    #check if keyword exists in title tag
    if keyword.lower() in title.lower():
        results.append({
            "status": "Valid",
            "message": "Znacznik title({}) zawiera w sobie słowo bądź frazę kluczową.".format(title)
        })
    else:
        results.append({
            "status": "Invalid",
            "message": "Znacznik title({}) nie zawiera w sobie słowa bądź frazy kluczowej.".format(title)
        })

    #check length of title
    if len(title) >= 50 <= 60:
        results.append({
            "status": "Valid",
            "message": "Znacznik title({}) jest poprawnej długości.".format(title)
        })
    elif len(title) < 50:
        free_characters = 50 - len(title)
        results.append({
            "status": "Invalid",
            "message": "Znacznik title({}) jest zbyt krótki. Dodaj do niego {} znaków.".format(title, free_characters)
        })
    else:
        free_characters = len(title)- 60
        results.append({
            "status": "Invalid",
            "message": "Znacznik title({}) jest zbyt długi. Skróć go o {} znaków.".format(title, free_characters)
        })

    return results

def url_title_analysis(keyword, url_title):

    results = []

    #check if keyword exists in url_title
    if keyword.lower() in url_title.lower():
        results.append({
            "status": "Valid",
            "message": "Url title({}) zawiera w sobie słowo bądź frazę kluczową.".format(url_title)
        })
    else:
        results.append({
            "status": "Invalid",
            "message": "Url title({}) nie zawiera w sobie słowa bądź frazy kluczowej.".format(url_title)
        })

    return results

def h1_list_analysis(keyword, h1):

    if len(h1) is null:

        return [{
            "status": "Invalid",
            "message": "Brak znacznika h1 na stronie."
        }]

    elif len(h1) == 1:

        results = [{
            "status": "Valid",
            "message": "Znaleziony znacznik h1 na stronie."
        }]

        analysis = h1_analysis(keyword, h1[0])
        results.extend(analysis)

        return results

    elif len(h1) > 1:

        results = [{
            "status": "Invalid",
            "message": "Ilość znacznika h1 na stronie jest za duża."
        }]

        for tag in h1:
            analysis = h1_analysis(keyword, tag)
            results.extend(analysis)

        return results

def h1_analysis(keyword, h1):

    results = []

    #check if keyword exists in h1 tag
    if keyword.lower() in h1.lower():
        results.append({
            "status": "Valid",
            "message": "Znacznik h1({}) zawiera w sobie słowo bądź frazę kluczową.".format(h1)
        })
    else:
        results.append({
            "status": "Invalid",
            "message": "Znacznik h1({}) nie zawiera w sobie słowa bądź frazy kluczowej.".format(h1)
        })

    #check length of h1
    if len(h1) >= 20 <= 70:
        results.append({
            "status": "Valid",
            "message": "Znacznik h1({}) jest poprawnej długości.".format(h1)
        })
    elif len(h1) < 20:
        free_characters = 20 - len(h1)
        results.append({
            "status": "Invalid",
            "message": "Znacznik h1({}) jest zbyt krótki. Dodaj do niego {} znaków.".format(h1, free_characters)
        })
    else:
        free_characters = len(h1)- 70
        results.append({
            "status": "Invalid",
            "message": "Znacznik h1({}) jest zbyt długi. Skróć go o {} znaków.".format(h1, free_characters)
        })

    return results

def h2_list_analysis(h2):

    if len(h2) is null:

        return [{
            "status": "Invalid",
            "message": "Brak znaczników h2 na stronie."
        }]

    elif len(h2) < 2:

        free_h2_tags = 2 - len(h2)

        results = [{
            "status": "Invalid",
            "message": "Zbyt mała ilość znaczników h2 na stronie. Dodaj przynajmniej {} znaczniki.".format(free_h2_tags)
        }]

        analysis = h2_analysis(h2[0])
        results.extend(analysis)

        return results

    elif len(h2) >= 2:

        results = [{
            "status": "Valid",
            "message": "Poprawna ilość znaczników h2 na stronie."
        }]

        for tag in h2:
            analysis = h2_analysis(tag)
            results.extend(analysis)

        return results

def h2_analysis(h2):

    results = []

    #check length of h1
    if len(h2) >= 20 <= 70:
        results.append({
            "status": "Valid",
            "message": "Znacznik h2({}) jest poprawnej długości.".format(h2)
        })
    elif len(h2) < 20:
        free_characters = 20 - len(h2)
        results.append({
            "status": "Invalid",
            "message": "Znacznik h2({}) jest zbyt krótki. Dodaj do niego {} znaków.".format(h2, free_characters)
        })
    else:
        free_characters = len(h2)- 70
        results.append({
            "status": "Invalid",
            "message": "Znacznik h2({}) jest zbyt długi. Skróć go o {} znaków.".format(h2, free_characters)
        })

    return results

def other_h_list_analysis(other_h):

    if len(other_h) is null:

        return [{
            "status": "Invalid",
            "message": "Brak znaczników h3-h6 na stronie."
        }]

    elif len(other_h) < 4:

        free_other_h_tags = 4 - len(other_h)

        return [{
            "status": "Invalid",
            "message": "Zbyt mała ilość znaczników h3-h6 na stronie. Dodaj przynajmniej {} znaczniki.".format(free_other_h_tags)
        }]

    elif len(other_h) >= 4:

        return [{
            "status": "Valid",
            "message": "Poprawna ilość znaczników h3-h6 na stronie."
        }]

def external_links_analysis(external_links):

    if len(external_links) is null:

        return [{
            "status": "Invalid",
            "message": "Brak zewnętrznych linków na stronie."
        }]

    elif len(external_links) < 3:

        free_external_links = 3 - len(external_links)

        results = [{
            "status": "Invalid",
            "message": "Zbyt mała ilość zewnętrznych linków na stronie. Dodaj przynajmniej {} linki.".format(free_external_links)
        }]

        return results

    elif len(external_links) >= 3:

        results = [{
            "status": "Valid",
            "message": "Poprawna ilość zewnętrznych linków na stronie."
        }]

        return results

def internal_links_analysis(internal_links):

    if len(internal_links) is null:

        return [{
            "status": "Invalid",
            "message": "Brak wewnętrznych linków na stronie."
        }]

    elif len(internal_links) < 10:

        free_internal_links = 10 - len(internal_links)

        results = [{
            "status": "Invalid",
            "message": "Zbyt mała ilość wewnętrznych linków na stronie. Dodaj przynajmniej {} linki.".format(free_internal_links)
        }]

        return results

    elif len(internal_links) >= 10:

        results = [{
            "status": "Valid",
            "message": "Poprawna ilość wewnętrznych linków na stronie."
        }]

        return results
