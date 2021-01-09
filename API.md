**Register user**
----
  Returns auth token.

* **URL**

  auth/users/

* **Method:**

  `POST`

* **Header Params**

  None

* **URL Params**

  None

* **Data Params**

    ```
      {
          "email": <String>,
          "password": <String>,
          "re_password": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "auth_token": "eb5aecc34b2d8a5f46d3193d48e0b16b40029a12"
      }
    ```

* **Error Response:**

  * **Code:** 409 CONFLICT <br />
    **Content:**

    ```
      {
          "email": "User with given email already exists."
      }
    ```

  OR

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"email": <EMAIL>, "password": <PASSWORD>, "re_password": <PASSWORD>}' http://hostname/auth/users/
  ```

**Set user password**
----
  Returns info about successful changing the password.

* **URL**

  auth/users/set_password/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "current_password": <String>,
          "new_password": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "password": "Password has been changed."
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
          "User": "Anonymous users can not change user password."
      }
    ```

  OR

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"email": <EMAIL>, "password": <PASSWORD>, "re_password": <PASSWORD>}' http://hostname/auth/users/
  ```

**Login user**
----
  Returns auth token.

* **URL**

  auth/token/login/

* **Method:**

  `POST`

* **Header Params**

  None

* **URL Params**

  None

* **Data Params**

    ```
      {
          "email": <String>,
          "password": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "auth_token": "38c5cba2c678551ad3077dfbcef4015cec12ab47"
      }
    ```

* **Error Response:**

  * **Code:** 400 BAD REUQEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"email": <EMAIL>, "password": <PASSWORD>}' http://hostname/auth/token/login/
  ```

**Remove current user token**
----
  Returns status 204 NO CONTENT.

* **URL**

  auth/token/logout/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
          "detail": "Invalid token."
      }
    ```

  OR

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN>" http://hostname/auth/token/logout/
  ```

**Login user with Google**
----
  Returns auth token.

* **URL**

  auth/google/token/login/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

*  **URL Params**

  None

* **Data Params**

    ```
      {
          "id_token": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "auth_token": "38c5cba2c678551ad3077dfbcef4015cec12ab47"
      }
    ```    
* **Error Response:**

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"id_token": <ID_TOKEN>}' http://hostname/auth/google/token/login/
  ```

**Login user with Facebook**
----
  Returns auth token.

* **URL**

  auth/facebook/token/login/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

*  **URL Params**

  None

* **Data Params**

    ```
      {
          "access_token": <String>,
          "facebookId": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "auth_token": "38c5cba2c678551ad3077dfbcef4015cec12ab47"
      }
    ```    
* **Error Response:**

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"access_token": <ACCESS_TOKEN>, "facebookId": <FACEBOOKID>}' http://hostname/auth/facebook/token/login/
  ```

  **Get website info**
  ----
    Returns website info.

  * **URL**

    website/info/

  * **Method:**

    `POST`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  *  **URL Params**

    None

  * **Data Params**

      ```
        {
            "url": <String>
        }
      ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
      {
        "website_analysis": {
            "url": <String>,
            "title": <String>,
            "description": <String>,
            "url_title": <String>,
            "keywords": <String>,
            "h1": <String>,
            "h2": {
                "h2_count": <Int>
                "h2": [
                    <String>
                ]
            },
            "other_h": {
                "other_h_count": <Int>,
                "other_h": [
                    <String>
                ]
            },
            "external_links": {
                "external_links_count": <Int>,
                "external_links": [
                    <String>
                ]
            },
            "internal links": {
                "internal_links_count": <Int>,
                "internal_links": [
                    <String>
                ]
            },
            "images_count": <Int>
        }
      }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 BAD UNAUTHORIZED

  * **Sample Call:**

    ```
      curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"url": <URL>}' http://hostname/website/info/
    ```
