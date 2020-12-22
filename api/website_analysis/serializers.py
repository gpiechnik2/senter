from rest_framework import serializers


TAB_CHOICES = (
    ("mobile", "mobile"),
    ("desktop", "desktop"),
)

PGS_LANG_CHOICES = (
    ("ar", "Arabic"),
    ("bg", "Bulgarian"),
    ("ca", "Catalan"),
    ("zh-TW", "Traditional Chinese (Taiwan)"),
    ("zh-CN", "Simplified Chinese"),
    ("hr", "Croatian"),
    ("cs", "Czech"),
    ("da", "Danish"),
    ("nl", "Dutch"),
    ("en", "English"),
    ("en-GB", "English UK"),
    ("fil", "Filipino"),
    ("fi", "Finnish"),
    ("fr", "French"),
    ("de", "German"),
    ("el", "Greek"),
    ("iw", "Hebrew"),
    ("hi", "Hindi"),
    ("hu", "Hungarian"),
    ("id", "Indonesian"),
    ("it", "Italian"),
    ("ja", "Japanese"),
    ("ko", "Korean"),
    ("lv", "Latvian"),
    ("lt", "Lithuanian"),
    ("no", "Norwegian"),
    ("pl", "Polish"),
    ("pt-BR", "Portuguese(Brazilian)"),
    ("pt-PT", "Portuguese(Portugal)"),
    ("ro", "Romanian"),
    ("ru", "Russian"),
    ("sr", "Serbian"),
    ("sk", "Slovakian"),
    ("sl", "Slovenian"),
    ("es", "Spanish"),
    ("sb", "Swedish"),
    ("th", "Thai"),
    ("tr", "Turkish"),
    ("uk", "Ukrainian"),
    ("vi", "Vietnamese")
)

COUNTRY_CHOICES = [
    ('pol', 'Polska'),
    ('ind', 'Indie'),
    ('fra', 'Francja'),
    ('jpn', 'Japonia'),
    ('deu', 'Niemcy',),
    ('usa', 'Stany Zjednoczone')
]

class PageSpeedAnalizeSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
    tab = serializers.ChoiceField(choices = TAB_CHOICES)
    lang = serializers.ChoiceField(choices = PGS_LANG_CHOICES)

class SEOSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)

class SearchConsoleSerializer(serializers.Serializer):
    url = serializers.URLField(max_length = 200, min_length = None, allow_blank = False)
    country = serializers.ChoiceField(choices = COUNTRY_CHOICES)
    start_date = serializers.DateTimeField(format = '%Y-%m-%d %H:%m', input_formats = None, read_only = True)
    end_date = serializers.DateTimeField(format = '%Y-%m-%d %H:%m', input_formats = None, read_only = True)
