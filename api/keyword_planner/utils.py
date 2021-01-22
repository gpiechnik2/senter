import requests
import json
from pytrends.request import TrendReq
from bs4 import BeautifulSoup

def google_keywords(keyword, header):
    url = "http://suggestqueries.google.com/complete/search?client=firefox&q={}".format(keyword)
    headers = {'User-agent' : header}
    response = requests.get(url, headers = headers)
    keywords = json.loads(response.content.decode('utf-8'))
    keywords.remove(keywords[-1])
    keywords.remove(keywords[-1])

    if keywords:
        google_keywords = keywords[1]
        return google_keywords
    else:
        return []

def pytrends_query(keyword, language):

    if language == "Polski":
        lang = "pl"
    elif language == "Angielski":
        lang = "en"
    else:
        lang = "Polski"

    pytrend = TrendReq(hl = lang)

    # Get Google Keyword Suggestions
    keywords = pytrend.suggestions(keyword = keyword)
    for elem in keywords:
        elem.pop('mid', None)

    return keywords

def serp_keywords(keyword, header):

    url = 'https://google.com/search?q={}&lr=pl'.format(keyword)
    headers = {'User-agent' : header}
    response = requests.get(url, headers = headers).text
    soup = BeautifulSoup(response, 'html.parser')
    keywords = []

    a_result = soup.find_all('a')

    for result in a_result:
        result_div = result.find('div', class_ = "BNeawe s3v9rd AP7Wnd lRVwie")
        if result_div is not None:
            keywords.append(result_div.text)

    return keywords

def google_suggestions_keywords(keyword, header):

    questions = ["co", "czemu", "dlaczego", "gdzie", "jak", "kiedy", "kto",
    "które", "którzy", "w jaki sposób"]

    prepositions = ["jak", "bez", "niedaleko", "w okolicy", "w pobliżu", "z",
    "do", "podobne", "blisko", "obok", "czy"]

    comparisons = ["dla", "podobny", "przeciw", "vs", "i", "lub"]

    alphabeticals = ["a", "ą", "b", "c", "ć", "d", "e", "f", "g", "h", "i", "j",
     "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w",
     "y", "z", "ź", "ż"]

    #{["co", [co powinien, co powiem, co mogę]], ["czemu", [czemu mogę, czemu chcę]]}
    questions_keywords = {}
    questions_keywords.setdefault("questions", [])
    for question in questions:
        temp_keywords = google_suggestion(question, keyword, header)
        reversed_temp_keywords = google_suggestion_reversed(question, keyword, header)

        questions_keywords["questions"].append({
            "question": question,
            "results": {
                "normal": temp_keywords,
                "reversed": reversed_temp_keywords
            }
        })

    prepositions_keywords = {}
    prepositions_keywords.setdefault("prepositions", [])
    for preposition in prepositions:
        temp_keywords = google_suggestion(preposition, keyword, header)
        reversed_temp_keywords = google_suggestion_reversed(preposition, keyword, header)

        prepositions_keywords["prepositions"].append({
            "preposition": preposition,
            "results": {
                "normal": temp_keywords,
                "reversed": reversed_temp_keywords
            }
        })

    comparison_keywords = {}
    comparison_keywords.setdefault("comparisons", [])
    for comparison in comparisons:
        temp_keywords = google_suggestion(comparison, keyword, header)
        reversed_temp_keywords = google_suggestion_reversed(comparison, keyword, header)

        comparison_keywords["comparisons"].append({
            "comparison": comparison,
            "results": {
                "normal": temp_keywords,
                "reversed": reversed_temp_keywords
            }
        })

    alphabeticals_keywords = {}
    alphabeticals_keywords.setdefault("letters", [])
    for letter in alphabeticals:
        temp_keywords = google_suggestion(letter, keyword, header)

        alphabeticals_keywords["letters"].append({
            "letter": letter,
            "results": temp_keywords
        })

    return questions_keywords, prepositions_keywords, comparison_keywords, alphabeticals_keywords

def google_suggestion(temp_word, keyword, header):
    results = []

    url = "http://suggestqueries.google.com/complete/search?client=firefox&q={}%20{}%20".format(keyword, temp_word)
    headers = {'User-agent' : header}
    response = requests.get(url, headers = headers)
    keywords = json.loads(response.content.decode('utf-8'))
    results.extend(keywords[1])

    return results

def google_suggestion_reversed(temp_word, keyword, header):
    results = []

    url = "http://suggestqueries.google.com/complete/search?client=firefox&q={}%20{}%20".format(temp_word, keyword)
    headers = {'User-agent' : header}
    response = requests.get(url, headers=headers)
    keywords = json.loads(response.content.decode('utf-8'))
    results.extend(keywords[1])

    return results
