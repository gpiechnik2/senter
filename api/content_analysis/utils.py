from re import finditer, escape

def text_analysis(text, keyword):

    #check if text exists
    if text is not None:
        text_exists = "Yes"
        message_exists = "Podano tekst na stronę."
    elif text is None:
        text_exists = "No"
        message_exists = "Podaj tekst do wstawienia na stronę."

    #check length of text
    if text is not None:
        if 300 <= len(text):
            proper_count = "Yes"
            message_proper_count = "Długość tekstu jest perfekcyjna."

        if 300 > len(text):
            characters_to_use = 300 - len(text)
            proper_count = "No"
            message_proper_count = "Długość tekstu jest zbyt krótka, użyj przynajmniej {} znaków.".format(characters_to_use)
    else:
        proper_count = "No"
        message_proper_count = "Długość tekstu jest zbyt krótka, użyj przynajmniej 300 znaków."

    #check if first paragraph of a text contains keyword
    if text is not None:
        if keyword is not None:
            if keyword in text.partition('.')[0] + '.':
                contains_keyword = "Yes"
                message_contains_keyword = "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
            elif keyword in text.partition('.')[0] + '?':
                contains_keyword = "Yes"
                message_contains_keyword = "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
            elif keyword in text.partition('.')[0] + '!':
                contains_keyword = "Yes"
                message_contains_keyword = "Pierwsze zdanie tekstu zawiera w sobie frazę kluczową."
            else:
                contains_keyword = "No"
                message_contains_keyword = "Pierwsze zdanie tekstu nie zawiera w sobie frazy kluczowej."
        else:
            contains_keyword = "No"
            message_contains_keyword = "Podaj słowo bądź frazę kluczową."
    else:
        contains_keyword = "No"
        message_contains_keyword = "Pierwsze zdanie tekstu nie zawiera w sobie frazy kluczowej."


    #check if keyword exists minimum of 3 times
    if text is not None:
        len_keys_in_text = len([m.start() for m in finditer(r'(?={})'.format(escape(keyword)), text)])
        if len_keys_in_text >= 3:
            keywords_proper_count = "Yes"
            message_keywords_proper_count = "Fraza kluczowa występuje często."
        else:
            minimum_keys_in_text = 3 - len_keys_in_text
            keywords_proper_count = "No"
            message_keywords_proper_count = "Fraza kluczowa występuje zbyt rzadko, użyj jej przynajmniej {} razy.".format(minimum_keys_in_text)
    else:
        keywords_proper_count = "No"
        message_keywords_proper_count = "Fraza kluczowa występuje zbyt rzadko, użyj jej przynajmniej 3 razy."

    context = {
        "exists": text_exists,
        "message_exists": message_exists,
        "proper_count": proper_count,
        "message_proper_count": message_proper_count,

        "contains_keyword": contains_keyword,
        "message_contains_keyword": message_contains_keyword,
        "keywords_proper_count": keywords_proper_count,
        "message_keywords_proper_count": message_keywords_proper_count,

        #reminding info
        "h1_exists": "Neutral",
        "message_h1_exists": "Pamiętaj aby dodać tag h1 przynajmniej raz.",
        "h2_exists": "Neutral",
        "message_h2_exists": "Pamiętaj aby dodać tag h2 przynajmniej trzy razy.",
        "links_exists": "Neutral",
        "message_links_exists": "Pamiętaj aby dodać przynajmniej jeden link wenętrzny oraz zewnętrzny.",
        "image_exists": "Neutral",
        "message_image_exists": "Pamiętaj aby dodać zdjęcie przynajmniej trzy razy."
    }

    return context

def keyword_analysis(keyword):

    #check if keyword exists
    if keyword is not None:
        if_exists = "Yes"
        if (' ' in keyword) == True:
            message_exists = "Podano frazę kluczową."
        elif (' ' not in keyword) == True:
            message_exists = "Podano słowo kluczowe."

        #check if keyword has proper len
        if len(keyword) < 60:
            proper_count = "Yes"
            message_proper_count = "Fraza kluczowa jest odpowiedniej długości."
        else:
            characters_to_remove = len(keyword) - 60
            proper_count = "No"
            message_proper_count = "Fraza kluczowa jest zbyt długa. Zmniejsz ją o przynajmniej {} znaki.".format(characters_to_remove)

    elif keyword is None:
        if_exists = "No"
        message_exists = "Podaj frazę lub słowo kluczowe."

        proper_count = "No"
        message_proper_count = "Fraza kluczowa jest zbyt krótka."

    results = {
        "exists": if_exists,
        "message_exists": message_exists,
        "proper_count": proper_count,
        "message_proper_count": message_proper_count,
    }

    return results

def title_analysis(keyword, page_title):

    #check if keyword exists in page_title
    if page_title is not None:
        if keyword is not None:
            if page_title.count(keyword):
                exists = "Yes"
                message_exists = "Fraza kluczowa występuje w nazwie strony."
            else:
                exists = "No"
                message_exists = "Fraza kluczowa nie występuje w nazwie strony."
        elif keyword is None:
            exists = "No"
            exists = "Wprowadź frazę bądź słowo kluczowe."
    elif page_title is None:
        exists = "No"
        message_exists = "Wprowadź nazwę strony."

    #check if page title starts with keyword
    if page_title is not None:
        if keyword is not None:
            if page_title.startswith(keyword):
                proper_startswith = "Yes"
                message_startswith = "Fraza kluczowa występuje na początku zdania."
            else:
                proper_startswith = "No"
                message_startswith = "Fraza kluczowa nie występuje na początku zdania."
        elif keyword is None:
            proper_startswith = "No"
            message_startswith = "Wprowadź frazę bądź słowo kluczowe."
    elif page_title is None:
        proper_startswith = "No"
        message_startswith = "Wprowadź nazwę strony."

    #check the length of page_title
    if page_title is not None:
        if 30 <= len(page_title) <= 60:
            characters_to_use = 60 - len(page_title)
            proper_count = "Yes"
            message_proper_count = "Długość nazwy strony jest perfekcyjna, {} znaków dostępnych.".format(characters_to_use)

        elif len(page_title) < 30:
            characters_to_use = len(page_title) - 30
            proper_count = "No"
            message_proper_count = "Długość nazwy strony jest zbyt krótka, dodaj przynajmniej {} znaków".format(characters_to_use)

        elif len(page_title) > 60:
            characters_to_use = len(page_title) - 60
            proper_count = "No"
            message_proper_count = "Długość nazwy strony jest zbyt długa, skróć ją o przynajmniej {} znaków.".format(characters_to_use)

    elif page_title is None:
        proper_count = "No"
        message_proper_count = "Długość nazwy strony jest zbyt długa, skróć ją o przynajmniej 30 znaków."

    results = {
        "exists": exists,
        "message_exists": message_exists,
        "proper_count": proper_count,
        "message_proper_count": message_proper_count,
        "proper_startswith": proper_startswith,
        "message_proper_startswith": message_startswith
    }

    return results

def meta_description_analysis(keyword, meta_description):

    #check if keyword exists in meta description
    if meta_description is not None:
        if keyword is not None:
            if (' ' in keyword) == True:
                number_of_keywords = keyword.split()
                for keywords in number_of_keywords:
                    if keywords in meta_description:
                        exists = "Yes"
                        message_exists = "Fraza kluczowa występuje w meta description."
                    elif keywords not in meta_description:
                        exists = "No"
                        message_exists = "Fraza kluczowa nie występuje w meta description."
                        break
            elif (' ' not in keyword) == True:
                if keyword in meta_description:
                    exists = "Yes"
                    message_exists = "Słowo kluczowe występuje w meta description."
                elif keyword not in meta_description:
                    exists = "No"
                    message_exists = "Słowo kluczowe nie występuje w meta description."
        elif keyword is None:
            exists = "No"
            message_exists = "Wprowadź frazę bądź słowo kluczowe."
    elif meta_description is None:
        exists = "No"
        message_exists = "Wprowadź meta description."

    #check length of meta_description
    if meta_description is not None:
        if 155 <= len(meta_description) <= 160:
            characters_to_use = 160 - len(meta_description)
            proper_count = "Yes"
            message_proper_count = "Długość meta description jest perfekcyjna, {} znaków dostępnych.".format(characters_to_use)

        elif 100 <= len(meta_description) < 155:
            characters_to_use = 155 - len(meta_description)
            proper_count = "Neutral"
            message_proper_count = "Długość meta description jest dobra, dodaj przynajmniej {} znaków, aby była perfekcyjna.".format(characters_to_use)

        elif len(meta_description) < 100:
            characters_to_use = len(meta_description)- 30
            proper_count = "No"
            message_proper_count = "Długość meta description jest zbyt krótka, dodaj przynajmniej {} znaków".format(characters_to_use)

        elif len(meta_description) > 160:
            characters_to_use = len(meta_description) - 160
            proper_count = "No"
            message_proper_count = "Długość meta description jest zbyt długa, skróć ją o przynajmniej {} znaków.".format(characters_to_use)

    elif meta_description is None:
        proper_count = "No"
        message_proper_count = "Długość meta description jest zbyt krótka, dodaj przynajmniej 155 znaków."

    results = {
        "exists": exists,
        "message_exists": message_exists,
        "proper_count": proper_count,
        "message_proper_len": message_proper_count
    }

    return results
