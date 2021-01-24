from re import finditer, escape

def analize_content(keyword, text, page_title, meta_description):

    textAnalysis = text_analysis(text, keyword)
    keywordAnalysis = keyword_analysis(keyword)
    titleAnalysis = title_analysis(keyword, page_title)
    metaDescriptionAnalysis = meta_description_analysis(keyword, meta_description)

    results = {
        'keyword': {
            'keyword': keyword,
            'analysis': keywordAnalysis
        },
        'page_title': {
            'page_title': page_title,
            'analysis': titleAnalysis
        },
        'meta_description': {
            'meta_description': meta_description,
            'analysis': metaDescriptionAnalysis
        },
        'text': {
            'text': text,
            'analysis': textAnalysis
        }
    }

    return results

def text_analysis(text, keyword):

    results = []

    if keyword is "":
        keyword = None

    if text is "":
        text = None

    #check if text exists
    if text is not None:
        results.append({
            'status': "Valid",
            'message': "Podano tekst na stronę."
        })
    elif text is None:
        results.append({
            'status': "Invalid",
            'message': "Podaj tekst do wstawienia na stronę."
        })

    #check length of text
    if text is not None:
        if 300 <= len(text):
            results.append({
                'status': "Valid",
                'message': "Długość tekstu jest perfekcyjna."
            })

        if 300 > len(text):
            characters_to_use = 300 - len(text)
            results.append({
                'status': "Invalid",
                'message': "Długość tekstu jest zbyt krótka, użyj przynajmniej {} znaków.".format(characters_to_use)
            })

    else:
        results.append({
            'status': "Invalid",
            'message': "Długość tekstu jest zbyt krótka, użyj przynajmniej 300 znaków."
        })

    #check if first paragraph of a text contains keyword
    if text is not None:
        if keyword is not None:
            if keyword.lower() in text.lower().partition('.')[0] + '.':
                results.append({
                    'status': "Valid",
                    'message': "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
                })
            elif keyword.lower() in text.lower().partition('.')[0] + '?':
                results.append({
                    'status': "Valid",
                    'message': "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
                })
            elif keyword.lower() in text.lower().partition('.')[0] + '!':
                results.append({
                    'status': "Valid",
                    'message': "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
                })
            else:
                results.append({
                    'status': "Invalid",
                    'message': "Pierwsze zdanie tekstu nie zawiera w sobie frazy kluczowej."
                })
        else:
            results.append({
                'status': "Invalid",
                'message': "Podaj słowo bądź frazę kluczową."
            })
    else:
        results.append({
            'status': "Invalid",
            'message': "Pierwsze zdanie tekstu nie zawiera w sobie frazy kluczowej."
        })

    #check if keyword exists minimum of 3 times
    if text is not None:
        len_keys_in_text = len([m.start() for m in finditer(r'(?={})'.format(escape(keyword)), text)])
        if len_keys_in_text >= 3:
            results.append({
                'status': "Valid",
                'message': "Fraza kluczowa występuje często."
            })
        else:
            minimum_keys_in_text = 3 - len_keys_in_text
            results.append({
                'status': "Invalid",
                'message': "Fraza kluczowa występuje zbyt rzadko, użyj jej przynajmniej {} razy.".format(minimum_keys_in_text)
            })
    else:
        results.append({
            'status': "Invalid",
            'message': "Fraza kluczowa występuje zbyt rzadko, użyj jej przynajmniej 3 razy."
        })

    undefined_results = [{
        "status": "Undefined",
        "message_h1_exists": "Pamiętaj aby dodać tag h1 przynajmniej raz."
    },
    {
        "status": "Undefined",
        "message_h2_exists": "Pamiętaj aby dodać tag h2 przynajmniej trzy razy."
    },
    {
        "status": "Undefined",
        "message_links_exists": "Pamiętaj aby dodać przynajmniej jeden link wenętrzny oraz zewnętrzny."
    },
    {
        "status": "Undefined",
        "message_image_exists": "Pamiętaj aby dodać zdjęcie przynajmniej trzy razy."
    }]

    #append data independent of the content analyzer
    for result in undefined_results:
        results.append(result)

    return results

def keyword_analysis(keyword):

    results = []

    if keyword is "":
        keyword = None

    #check if keyword exists
    if keyword is not None:
        if (' ' in keyword) == True:
            results.append({
                'status': "Valid",
                'message': "Podano frazę kluczową."
            })
        elif (' ' not in keyword) == True:
            results.append({
                'status': "Vaild",
                'message': "Podano frazę kluczową."
            })

        #check if keyword has proper len
        if len(keyword) < 60:
            results.append({
                'status': "Valid",
                'message': "Fraza kluczowa jest odpowiedniej długości."
            })
        else:
            characters_to_remove = len(keyword) - 60
            results.append({
                'status': "Invalid",
                'message': "Fraza kluczowa jest zbyt długa. Zmniejsz ją o przynajmniej {} znaki.".format(characters_to_remove)
            })

    elif keyword is None:
        results.append({
            'status': "Invalid",
            'message': "Podaj frazę lub słowo kluczowe."
        })

        results.append({
            'status': "Invalid",
            'message': "Fraza kluczowa jest zbyt krótka."
        })

    return results

def title_analysis(keyword, page_title):

    results = []

    if keyword is "":
        keyword = None

    if page_title is "":
        page_title = None

    #check if keyword exists in page_title
    if page_title is not None:
        if keyword is not None:
            if page_title.count(keyword):
                results.append({
                    'status': "Valid",
                    'message': "Fraza kluczowa występuje w nazwie strony."
                })
            else:
                results.append({
                    'status': "Invalid",
                    'message': "Fraza kluczowa nie występuje w nazwie strony."
                })
        elif keyword is None:
            results.append({
                'status': "Invalid",
                'message': "Wprowadź frazę bądź słowo kluczowe."
            })
    elif page_title is None:
        results.append({
            'status': "Invalid",
            'message': "Wprowadź nazwę strony."
        })

    #check if page title starts with keyword
    if page_title is not None:
        if keyword is not None:
            if page_title.startswith(keyword):
                results.append({
                    'status': "Valid",
                    'message': "Fraza kluczowa występuje na początku zdania."
                })
            else:
                results.append({
                    'status': "Invalid",
                    'message': "Fraza kluczowa nie występuje na początku zdania."
                })
        elif keyword is None:
            results.append({
                'status': "Invalid",
                'message': "Wprowadź frazę bądź słowo kluczowe."
            })
    elif page_title is None:
        results.append({
            'status': "Invalid",
            'message': "Wprowadź nazwę strony."
        })

    #check the length of page_title
    if page_title is not None:
        if 30 <= len(page_title) <= 60:
            characters_to_use = 60 - len(page_title)
            results.append({
                'status': "Valid",
                'message': "Długość nazwy strony jest perfekcyjna, {} znaków dostępnych.".format(characters_to_use)
            })

        elif len(page_title) < 30:
            characters_to_use = len(page_title) - 30
            results.append({
                'status': "Invalid",
                'message': "Długość nazwy strony jest zbyt krótka, dodaj przynajmniej {} znaków".format(characters_to_use)
            })

        elif len(page_title) > 60:
            characters_to_use = len(page_title) - 60
            results.append({
                'status': "Invalid",
                'message': "Długość nazwy strony jest zbyt długa, skróć ją o przynajmniej {} znaków.".format(characters_to_use)
            })

    elif page_title is None:
        results.append({
            'status': "Invalid",
            'message': "Wprowadź nazwę strony."
        })

    return results

def meta_description_analysis(keyword, meta_description):

    results = []

    if keyword is "":
        keyword = None

    if meta_description is "":
        meta_description = None

    #check if keyword exists in meta description
    if meta_description is not None:
        if keyword is not None:
            if (' ' in keyword) == True:
                number_of_keywords = keyword.split()
                for keywords in number_of_keywords:
                    if keywords.lower() in meta_description.lower():
                        results.append({
                            'status': "Valid",
                            'message': "Fraza kluczowa występuje w meta description."
                        })
                    elif keywords.lower() not in meta_description.lower():
                        results.append({
                            'status': "Invalid",
                            'message': "Fraza kluczowa nie występuje w meta description."
                        })
                        break
            elif (' ' not in keyword) == True:
                if keyword.lower() in meta_description.lower():
                    results.append({
                        'status': "Valid",
                        'message': "Słowo kluczowe występuje w meta description."
                    })
                elif keyword.lower() not in meta_description.lower():
                    results.append({
                        'status': "Invalid",
                        'message': "Słowo kluczowe nie występuje w meta description."
                    })
        elif keyword is None:
            results.append({
                'status': "Invalid",
                'message': "Wprowadź frazę bądź słowo kluczowe."
            })
    elif meta_description is None:
        results.append({
            'status': "Invalid",
            'message': "Wprowadź meta description."
        })

    #check length of meta_description
    if meta_description is not None:
        if 155 <= len(meta_description) <= 160:
            characters_to_use = 160 - len(meta_description)
            results.append({
                'status': "Valid",
                'message': "Długość meta description jest perfekcyjna, {} znaków dostępnych.".format(characters_to_use)
            })

        elif 100 <= len(meta_description) < 155:
            characters_to_use = 155 - len(meta_description)
            results.append({
                'status': "Valid",
                'message': "Długość meta description jest dobra, dodaj przynajmniej {} znaków, aby była perfekcyjna.".format(characters_to_use)
            })

        elif len(meta_description) < 100:
            characters_to_use = 100 - len(meta_description)
            results.append({
                'status': "Invalid",
                'message': "Długość meta description jest zbyt krótka, dodaj przynajmniej {} znaków".format(characters_to_use)
            })

        elif len(meta_description) > 160:
            characters_to_use = len(meta_description) - 160
            results.append({
                'status': "Invalid",
                'message': "Długość meta description jest zbyt długa, skróć ją o przynajmniej {} znaków.".format(characters_to_use)
            })

    elif meta_description is None:
        results.append({
            'status': "Invalid",
            'message': "Wprowadź meta description."
        })

    return results
