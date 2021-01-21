# Django & React application

An application to streamline and automate the development of SEO for websites and articles. More about functionalities in [functionalities](https://github.com/gpiechnik2/senter#functionalities)section.

## Setup

**Build a stack of applications to run a complete service**
```console
docker-compose build
```

**Migrate**
```console
docker-compose run django python3 manage.py migrate
```

**Make migrations**
```console
docker-compose run django python3 manage.py makemigrations
```

**Run entire app**
```console
docker-compose up
```

There should now be two servers running:
- [http://127.0.0.1:5000](http://127.0.0.1:5000) is the Django app
- [http://127.0.0.1:8081](http://127.0.0.1:8081) is the React app

## Using 'docker-compose run' to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the:
```console
docker-compose run <service_name> <cmd>
```

For example, to install a Javascript dependency and save that information to `package.json` we could run:
```console
docker-compose run --rm frontend npm install --save axios
```

If you want to be on a shell for one of the Docker services, you can do something like:
```console
docker-compose run --rm frontend bash
```

## Functionalities
### The project is divided into 5 main modules:
#### Website analysis
Allows the user to investigate the web page code for SEO. User get an analysis of the page and tips on how to improve the performance of the page and increase user position in search engine. The analysis is detailed and provides information of specific actions.

#### Keyword analysis
With the keyword planner, you can automate word and selection of keywords or keyphrases under which to position. There are several sources used to do this, and you get up to six types of suggestions. This makes it unnecessary to manually reset.

#### Audit
Audit analyzes the entire domain for SEO and provides to the user detailed analysis and improvement opportunities. This is an extended web analysis. 

#### Content analysis
Provides real time text analysis, meta description, page title, and keywords or keyphrases in terms of SEO. This helps you write more friendly text under search engine.

#### Keyword analysis
We get information about the competition pages that are at the first positions of your search for a keyword or keyphrase. This gives us the opportunity to "look", what we could change on our website to get a similar result.

#### Website info
User get basic information about a page, such as its keyword/keyphrases, description, or external links. Recommended for research in a specific competitor.

## Documentation
For detailed rest API documentation, please go [here](https://github.com/gpiechnik2/popita/blob/master/API.md).

## External resources
In project has been used resources from [Free UI Components](https://dribbble.com/shots/4981844-Free-Ui-Elements) and [Freepik vectors](https://www.freepik.com/vectorjuice).

## License


