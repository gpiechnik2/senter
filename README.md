# Senter

An application to streamline and automate the development of SEO for websites and articles. More about functionalities and modules in [this](https://github.com/gpiechnik2/senter#functionalities) section.

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
It allows the you to invetigate the web page code for SEO. You get an analysis and tips on how to improve the performance of the page and increase their position in search engine. The analysis is detailed and provides information of specific actions.

#### Keyword planner
With the keyword planner you can automate selection of keywords or keyphrase which will help with positioning of your website. There are several sources to do this - you can get up to six types of suggestions. It will save your time and help you to avoid manual researches. 

#### Audit
Audit analyzes the entire domain for SEO and provides you detailed analysis and improvement opportunities. This is an extended web analysis. 

#### Content analysis
It provides real time text analysis, meta description, page title, and keywords or keyphrase in terms of SEO. This helps you write more friendly text under search engine.

#### Keyword analysis
You get information about the competition pages. Keyword analysis helps you to scan all of the pages that interest you. You can do a quick research of first positions for a keywords or keyphrase. This gives us the opportunity to "look" what we could change on our website to get a similar result.

#### Website info
Thanks to it, you get basic information about page, such as its keywords/keyphrase, description, or external links. It's truly recommended for research in a specific competitor.

## Documentation
For detailed rest API documentation, please go [here](https://github.com/gpiechnik2/popita/blob/master/API.md).

## External resources
In project has been used resources from [Free UI Components](https://dribbble.com/shots/4981844-Free-Ui-Elements) and [vectorjuice](https://www.freepik.com/vectorjuice) vectors.

## License


