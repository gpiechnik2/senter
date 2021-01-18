# Django & React application

This is a lorem ipsum dolor mit set amit

## Setup

**Build a stack of applications to run a complete service**
```
docker-compose build
```

**Migrate**
```
docker-compose run django python3 manage.py migrate --run-syncdb
```

**Make migrations**
```
docker-compose run django python3 manage.py makemigrations
```

**Run entire app**
```
docker-compose up
```

There should now be two servers running:
- [http://127.0.0.1:5000](http://127.0.0.1:5000) is the Django app
- [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app

## Using `docker-compose run` to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the:
```
docker-compose run <service_name> <cmd>
```

For example, to install a Javascript dependency and save that information to `package.json` we could run:
```
docker-compose run --rm frontend npm install --save axios
```

If you want to be on a shell for one of the Docker services, you can do something like:
```
docker-compose run --rm frontend bash
```

## Features


## Dependencies


## Documentation

For detailed rest API documentation, please go [here](https://github.com/gpiechnik2/popita/blob/master/API.md).

## External resources


## License
