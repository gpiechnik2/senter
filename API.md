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

  auth/users/set-password/

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
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{ "current_password": <PASSWORD>, "new_password": <PASSWORD>}' http://hostname/auth/users/set-password/
  ```

**Set user email**
----
  Returns info about successful changing the email.

* **URL**

  auth/users/change-email/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "new_email": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "new_email": "Email has been changed."
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
    **Content:**

    ```
      {
          "new_email": "User with provided email already exists."
      }
    ```

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"new_email": <NEW_EMAIL>}' http://hostname/auth/users/change-email/
  ```

**Set user contact email**
----
  Returns info about successful changing the user contact email.

* **URL**

  auth/users/change-contact-email/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "new_contact_email": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "new_contact_email": "Contact email has been changed."
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
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"new_contact_email": <NEW_CONTACT_EMAIL>}' http://hostname/auth/users/change-contact-email/
  ```

**Set user agent**
----
  Returns info about successful changing the user agent.

* **URL**

  auth/users/change-contact-user-agent/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "user_agent": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "user_agent": "User agent has been changed."
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
          "User": "Anonymous users can not change user agent."
      }
    ```

  OR

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"user_agent": <NEW_USER_AGENT>}' http://hostname/auth/users/change-user-agent/
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

  None

* **URL Params**

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

**Get website info**
  ----
    Returns website info.

  * **URL**

    website-info/

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
                "h2_count": <Integer>
                "h2": [
                    <String>
                ]
            },
            "other_h": {
                "other_h_count": <Integer>,
                "other_h": [
                    <String>
                ]
            },
            "external_links": {
                "external_links_count": <Integer>,
                "external_links": [
                    <String>
                ]
            },
            "internal links": {
                "internal_links_count": <Integer>,
                "internal_links": [
                    <String>
                ]
            },
            "images_count": <Integer>
        }
      }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 BAD UNAUTHORIZED
      **Content:**

      ```
        {
          "detail": "Authentication credentials were not provided."
        }
      ```
      OR
      ```  
        {
          "detail": "Invalid token."
        }
      ```

  * **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"url": <URL>}' http://hostname/website-info/
  ```

**Create keyword planner**
----
  Returns keyword planner.

  * **URL**

    keyword-planner/

  * **Method:**

    `POST`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    None

  * **Data Params**

    ```
      {
          "keyword": <String>,
          "language": <String>
      }
    ```

  * **Success Response:**

    * **Code:** 201 <br />
      **Content:**

      ```
      {
          "id": <Integer>,
          "keyword": <String>,
          "language": <String>,
          "googleKeywords": [
              <String>
          ],
          "pytrendsKeywords": [
              {
                  "title": <String>,
                  "type": <String>
              }
          ],
          "serpKeywords": [
              <String>
          ],
          "googleSuggestionsQuestions": {
              "questions": [
                  {
                      "question": "co",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "czemu",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "dlaczego",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "gdzie",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "jak",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "kiedy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "kto",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "które",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "którzy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "w jaki sposób",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsPrepositions": {
              "prepositions": [
                  {
                      "preposition": "jak",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "bez",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "niedaleko",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "w okolicy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "w pobliżu",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "z",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "do",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "podobne",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "blisko",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "obok",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "czy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsComparisons": {
              "comparisons": [
                  {
                      "comparison": "dla",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "podobny",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "przeciw",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "vs",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "i",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "lub",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsAlphabeticals": {
              "letters": [
                  {
                      "letter": "a",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ą",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "b",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "c",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ć",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "d",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "e",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "f",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "g",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "h",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "i",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "j",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "k",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "l",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ł",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "m",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "n",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ń",
                      "results": []
                  },
                  {
                      "letter": "o",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ó",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "p",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "r",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "s",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ś",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "t",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "u",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "w",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "y",
                      "results": [
                         <String>
                      ]
                  },
                  {
                      "letter": "z",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ź",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ż",
                      "results": [
                          <String>
                      ]
                  }
              ]
          },
          "publish_date": <String>
      }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "language": <LANGUAGE>}' http://hostname/keyword-planner/
  ```

**Get keyword planners**
  ----
    Returns keyword planners list of the user.

  * **URL**

    keyword-planner/

  * **Method:**

    `GET`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
      [
          {
              "id": <Integer>,
              "keyword": <String>,
              "language": <String>,
              "googleKeywords": [
                  <String>
              ],
              "pytrendsKeywords": [
                  {
                      "title": <String>,
                      "type": <String>
                  }
              ],
              "serpKeywords": [
                  <String>
              ],
              "googleSuggestionsQuestions": {
                  "questions": [
                      {
                          "question": "co",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "czemu",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "dlaczego",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "gdzie",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "jak",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "kiedy",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "kto",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "które",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "którzy",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "question": "w jaki sposób",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      }
                  ]
              },
              "googleSuggestionsPrepositions": {
                  "prepositions": [
                      {
                          "preposition": "jak",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "bez",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "niedaleko",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "w okolicy",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "w pobliżu",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "z",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "do",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "podobne",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "blisko",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "obok",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "preposition": "czy",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      }
                  ]
              },
              "googleSuggestionsComparisons": {
                  "comparisons": [
                      {
                          "comparison": "dla",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "comparison": "podobny",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "comparison": "przeciw",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "comparison": "vs",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "comparison": "i",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      },
                      {
                          "comparison": "lub",
                          "results": {
                              "normal": [
                                  <String>
                              ],
                              "reversed": [
                                  <String>
                              ]
                          }
                      }
                  ]
              },
              "googleSuggestionsAlphabeticals": {
                  "letters": [
                      {
                          "letter": "a",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ą",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "b",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "c",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ć",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "d",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "e",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "f",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "g",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "h",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "i",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "j",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "k",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "l",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ł",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "m",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "n",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ń",
                          "results": []
                      },
                      {
                          "letter": "o",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ó",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "p",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "r",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "s",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ś",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "t",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "u",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "w",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "y",
                          "results": [
                             <String>
                          ]
                      },
                      {
                          "letter": "z",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ź",
                          "results": [
                              <String>
                          ]
                      },
                      {
                          "letter": "ż",
                          "results": [
                              <String>
                          ]
                      }
                  ]
              },
              "publish_date": <String>
          }
      ]
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/keyword-planner/
  ```

**Get keyword planner with specified id**
  ----
    Returns the keyword planner with specified id.

  * **URL**

    keyword-planner/:id

  * **Method:**

    `GET`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    `id = <Integer>`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
      {
          "id": <Integer>,
          "keyword": <String>,
          "language": <String>,
          "googleKeywords": [
              <String>
          ],
          "pytrendsKeywords": [
              {
                  "title": <String>,
                  "type": <String>
              }
          ],
          "serpKeywords": [
              <String>
          ],
          "googleSuggestionsQuestions": {
              "questions": [
                  {
                      "question": "co",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "czemu",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "dlaczego",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "gdzie",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "jak",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "kiedy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "kto",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "które",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "którzy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "question": "w jaki sposób",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsPrepositions": {
              "prepositions": [
                  {
                      "preposition": "jak",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "bez",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "niedaleko",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "w okolicy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "w pobliżu",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "z",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "do",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "podobne",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "blisko",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "obok",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "preposition": "czy",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsComparisons": {
              "comparisons": [
                  {
                      "comparison": "dla",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "podobny",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "przeciw",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "vs",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "i",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  },
                  {
                      "comparison": "lub",
                      "results": {
                          "normal": [
                              <String>
                          ],
                          "reversed": [
                              <String>
                          ]
                      }
                  }
              ]
          },
          "googleSuggestionsAlphabeticals": {
              "letters": [
                  {
                      "letter": "a",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ą",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "b",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "c",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ć",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "d",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "e",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "f",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "g",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "h",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "i",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "j",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "k",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "l",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ł",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "m",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "n",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ń",
                      "results": []
                  },
                  {
                      "letter": "o",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ó",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "p",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "r",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "s",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ś",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "t",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "u",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "w",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "y",
                      "results": [
                         <String>
                      ]
                  },
                  {
                      "letter": "z",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ź",
                      "results": [
                          <String>
                      ]
                  },
                  {
                      "letter": "ż",
                      "results": [
                          <String>
                      ]
                  }
              ]
          },
          "publish_date": <String>
      }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/keyword-planner/<ID>/
  ```

**Delete keyword planner**
  ----
    Deletes keyword planner with specified id.

  * **URL**

    keyword-planner/:id

  * **Method:**

    `DELETE`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    `id = <Integer>`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 204 NO CONTENT <br />

  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```

  * **Sample Call:**

  ```
    curl -X DELETE -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/keyword-planner/<ID>/
  ```

**Get content analysis**
----
  Returns content analysis.

* **URL**

  content-analysis/check/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "keyword": <String>,
          "page_title": <String>,
          "meta_description": <String>,
          "text_to_check: <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "analysis": {
              "keyword": {
                  "keyword": <String>,
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "page_title": {
                  "page_title": <String>,
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "meta_description": {
                  "meta_description": <String>,
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "text": {
                  "text": <String>,
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              }
          }
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "page_title": <PAGE_TITLE>, "meta_description": <META_DESCRIPTION>, "text_to_check": <TEXT_TO_CHECK>}' http://hostname/content-analysis/check/
  ```

**Create content**
----
  Returns content.

* **URL**

  content-analysis/analyse/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

    ```
      {
          "keyword": <String>,
          "page_title": <String>,
          "meta_description": <String>,
          "text_to_check: <String>
      }
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

    ```
      {
          "keyword": <String>,
          "page_title": <String>,
          "meta_description": <String>,
          "text_to_check: <String>
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "page_title": <PAGE_TITLE>, "meta_description": <META_DESCRIPTION>, "text_to_check": <TEXT_TO_CHECK>}' http://hostname/content-analysis/analyse/
  ```

**Get contents**
----
  Returns contents list of the user.

* **URL**

  content-analysis/analyse/

* **Method:**

  `GET`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      [
          {
              "keyword": <String>,
              "page_title": <String>,
              "meta_description": <String>,
              "text_to_check: <String>
          }
      ]
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "page_title": <PAGE_TITLE>, "meta_description": <META_DESCRIPTION>, "text_to_check": <TEXT_TO_CHECK>}' http://hostname/content-analysis/analyse/
  ```

**Get content with specified id**
----
  Returns content with specified id.

* **URL**

  content-analysis/analyse/:id

* **Method:**

  `GET`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  `id: <Integer>`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "id": <Integer>,
          "text_to_check": <String>,
          "keyword": <String>,
          "page_title": <String>,
          "meta_description": <String>
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "page_title": <PAGE_TITLE>, "meta_description": <META_DESCRIPTION>, "text_to_check": <TEXT_TO_CHECK>}' http://hostname/content-analysis/analyse/<ID>/
  ```

**Update content**
----
  Returns updated content.

* **URL**

  content-analysis/analyse/:id

* **Method:**

  `PUT`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  `id: <Integer>`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "id": <Integer>,
          "text_to_check": <String>,
          "keyword": <String>,
          "page_title": <String>,
          "meta_description": <String>
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X PUT -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"keyword": <KEYWORD>, "page_title": <PAGE_TITLE>, "meta_description": <META_DESCRIPTION>, "text_to_check": <TEXT_TO_CHECK>}' http://hostname/content-analysis/analyse/<ID>/
  ```

**Delete content**
----
  Returns status 204.

* **URL**

  content-analysis/analyse/:id

* **Method:**

  `DELETE`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  `id: <Integer>`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X DELETE -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/content-analysis/analyse/<ID>/
  ```

**Get website analysis(SEO)**
----
  Returns website analysis(SEO)

* **URL**

  website-analysis/seo/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

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
          "analysis": {
              "url": <String>,
              "url_status": <Integer>,
              "ssl": {
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "meta_robots": [
                  {
                      "status": <String>,
                      "message": <String>
                  }
              ],
              "response_time": {
                  "time": <Double>,
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "keyword": <String>,
              "title": {
                  "title_count": <Integer>,
                  "main_title": <String>,
                  "titles": [
                      <String>
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "description": {
                  "descriptions_count": <Integer>,
                  "main_description": <String>,
                  "descriptions": [
                      <String>
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "url_title": {
                  "url_title": <String>,
                  "analysis": <String>
              },
              "h1": {
                  "h1_count": <Integer>,
                  "main_h1": <String>,
                  "h1": [
                      <String>
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "h2": {
                  "h2_count": <Integer>,
                  "h2": [
                      <String>
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "other_h": {
                  "other_h_count": <Integer>,
                  "other_h": [
                      <String>
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "external_links": {
                  "external_links_count": <Integer>,
                  "external_links": [
                      <String>
                  ],
                  "status": [
                      {
                          "url": <String>,
                          "url_status": <Integer>,
                          "status": <String>,
                          "message": "<String>
                      }
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "internal_links": {
                  "internal_links_count": <Integer>,
                  "internal_links": [
                      <String>
                  ],
                  "status": [
                      {
                          "url": <String>,
                          "url_status": <Integer>,
                          "status": <String>,
                          "message": <String>
                      }
                  ],
                  "analysis": [
                      {
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              },
              "images": {
                  "images_counts": <Integer>,
                  "images": [
                     <String>
                  ],
                  "analysis": [
                      {
                          "url": <String>,
                          "file_name": <String>,
                          "status": <String>,
                          "message": <String>
                      }
                  ]
              }
          }
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"url": <URL>}' http://hostname/website-analysis/seo/
  ```

**Get keyword analysis**
----
  Returns keyword analysis

* **URL**

  keyword-analysis/

* **Method:**

  `POST`

* **Header Params**

  `Authorization: Token <AUTHORIZATION_TOKEN>`

* **URL Params**

  None

* **Data Params**

  ```
    {
        "keyword": <String>
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

     ```
       {
          "keyword_analysis": {
              "keyword":  <String>,
              "results": [
                  {
                      "url":  <String>,
                      "title":  <String>,
                      "description":  <String>,
                      "url_title":  <String>,
                      "keywords":  <String>,
                      "h1":  <String>,
                      "h2": {
                          "h2_count": <Integer>,
                          "h2": [
                               <String>
                          ]
                      },
                      "other_h": {
                          "other_h_count": <Integer>,
                          "other_h": [
                               <String>
                          ]
                      },
                      "external_links": {
                          "external_links_count": <Integer>,
                          "external_links": [
                               <String>
                          ]
                      },
                      "internal links": {
                          "internal_links_count": <Integer>,
                          "internal_links": [
                               <String>
                          ]
                      },
                      "images_count": <Integer>
                  },
              ]
          }
      }      
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"url": <URL>}' http://hostname/keyword-analysis/
  ```

**Get audit**
----
  Returns audit.

  * **URL**

    audit/check/

  * **Method:**

    `POST`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    None

  * **Data Params**

    ```
      {
          "url": <String>
      }
    ```

  * **Success Response:**

    * **Code:** 201 <br />
      **Content:**

      ```
        {
            "id": <Integer>,
            "url": <String>,
            "audit": [
                {
                    "url": <String>,
                    "url_status": <Integer>,
                    "ssl": {
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "meta_robots": [
                        {
                            "status": <String>,
                            "message": <String>
                        }
                    ],
                    "response_time": {
                        "time": <Double>,
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "keyword": <String>,
                    "title": {
                        "title_count": <Integer>,
                        "main_title": <String>,
                        "titles": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "description": {
                        "descriptions_count": <Integer>,
                        "main_description": <String>,
                        "descriptions": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "url_title": {
                        "url_title": <String>,
                        "analysis": <String>
                    },
                    "h1": {
                        "h1_count": <Integer>,
                        "main_h1": <String>,
                        "h1": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "h2": {
                        "h2_count": <Integer>,
                        "h2": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "other_h": {
                        "other_h_count": <Integer>,
                        "other_h": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "external_links": {
                        "external_links_count": <Integer>,
                        "external_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": "<String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "internal_links": {
                        "internal_links_count": <Integer>,
                        "internal_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": <String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "images": {
                        "images_counts": <Integer>,
                        "images": [
                           <String>
                        ],
                        "analysis": [
                            {
                                "url": <String>,
                                "file_name": <String>,
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    }
                }
            ],
            "publish_date": <String>
        }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"url": <URL>}' http://hostname/audit/check/
  ```

**Create audit**
----
  Returns audit.

  * **URL**

    audit/

  * **Method:**

    `POST`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    None

  * **Data Params**

    ```
      {
          "url": <String>,
          "audit": <String>
      }
    ```

  * **Success Response:**

    * **Code:** 201 <br />
      **Content:**

      ```
        {
            "id": <Integer>,
            "url": <String>,
            "audit": [
                {
                    "url": <String>,
                    "url_status": <Integer>,
                    "ssl": {
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "meta_robots": [
                        {
                            "status": <String>,
                            "message": <String>
                        }
                    ],
                    "response_time": {
                        "time": <Double>,
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "keyword": <String>,
                    "title": {
                        "title_count": <Integer>,
                        "main_title": <String>,
                        "titles": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "description": {
                        "descriptions_count": <Integer>,
                        "main_description": <String>,
                        "descriptions": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "url_title": {
                        "url_title": <String>,
                        "analysis": <String>
                    },
                    "h1": {
                        "h1_count": <Integer>,
                        "main_h1": <String>,
                        "h1": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "h2": {
                        "h2_count": <Integer>,
                        "h2": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "other_h": {
                        "other_h_count": <Integer>,
                        "other_h": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "external_links": {
                        "external_links_count": <Integer>,
                        "external_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": "<String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "internal_links": {
                        "internal_links_count": <Integer>,
                        "internal_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": <String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "images": {
                        "images_counts": <Integer>,
                        "images": [
                           <String>
                        ],
                        "analysis": [
                            {
                                "url": <String>,
                                "file_name": <String>,
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    }
                }
            ],
            "publish_date": <String>
        }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> -d '{"url": <URL>, "audit": <AUDIT>}' http://hostname/audit/
  ```

**Get audits**
  ----
    Returns audits list of the user.

  * **URL**

    audit/

  * **Method:**

    `GET`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
        [
            {
                "id": <Integer>,
                "url": <String>,
                "audit": [
                    {
                        "url": <String>,
                        "url_status": <Integer>,
                        "ssl": {
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "meta_robots": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ],
                        "response_time": {
                            "time": <Double>,
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "keyword": <String>,
                        "title": {
                            "title_count": <Integer>,
                            "main_title": <String>,
                            "titles": [
                                <String>
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "description": {
                            "descriptions_count": <Integer>,
                            "main_description": <String>,
                            "descriptions": [
                                <String>
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "url_title": {
                            "url_title": <String>,
                            "analysis": <String>
                        },
                        "h1": {
                            "h1_count": <Integer>,
                            "main_h1": <String>,
                            "h1": [
                                <String>
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "h2": {
                            "h2_count": <Integer>,
                            "h2": [
                                <String>
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "other_h": {
                            "other_h_count": <Integer>,
                            "other_h": [
                                <String>
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "external_links": {
                            "external_links_count": <Integer>,
                            "external_links": [
                                <String>
                            ],
                            "status": [
                                {
                                    "url": <String>,
                                    "url_status": <Integer>,
                                    "status": <String>,
                                    "message": "<String>
                                }
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "internal_links": {
                            "internal_links_count": <Integer>,
                            "internal_links": [
                                <String>
                            ],
                            "status": [
                                {
                                    "url": <String>,
                                    "url_status": <Integer>,
                                    "status": <String>,
                                    "message": <String>
                                }
                            ],
                            "analysis": [
                                {
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        },
                        "images": {
                            "images_counts": <Integer>,
                            "images": [
                               <String>
                            ],
                            "analysis": [
                                {
                                    "url": <String>,
                                    "file_name": <String>,
                                    "status": <String>,
                                    "message": <String>
                                }
                            ]
                        }
                    }
                ],
                "publish_date": <String>
            }
        ]
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/audit/
  ```

**Get audit with specified id**
  ----
    Returns the audit with specified id.

  * **URL**

    audit/:id

  * **Method:**

    `GET`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    `id = <Integer>`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
        {
            "id": <Integer>,
            "url": <String>,
            "audit": [
                {
                    "url": <String>,
                    "url_status": <Integer>,
                    "ssl": {
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "meta_robots": [
                        {
                            "status": <String>,
                            "message": <String>
                        }
                    ],
                    "response_time": {
                        "time": <Double>,
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "keyword": <String>,
                    "title": {
                        "title_count": <Integer>,
                        "main_title": <String>,
                        "titles": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "description": {
                        "descriptions_count": <Integer>,
                        "main_description": <String>,
                        "descriptions": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "url_title": {
                        "url_title": <String>,
                        "analysis": <String>
                    },
                    "h1": {
                        "h1_count": <Integer>,
                        "main_h1": <String>,
                        "h1": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "h2": {
                        "h2_count": <Integer>,
                        "h2": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "other_h": {
                        "other_h_count": <Integer>,
                        "other_h": [
                            <String>
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "external_links": {
                        "external_links_count": <Integer>,
                        "external_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": "<String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "internal_links": {
                        "internal_links_count": <Integer>,
                        "internal_links": [
                            <String>
                        ],
                        "status": [
                            {
                                "url": <String>,
                                "url_status": <Integer>,
                                "status": <String>,
                                "message": <String>
                            }
                        ],
                        "analysis": [
                            {
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    },
                    "images": {
                        "images_counts": <Integer>,
                        "images": [
                           <String>
                        ],
                        "analysis": [
                            {
                                "url": <String>,
                                "file_name": <String>,
                                "status": <String>,
                                "message": <String>
                            }
                        ]
                    }
                }
            ],
            "publish_date": <String>
        }
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```
  * **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/audit/<ID>/
  ```

**Delete audit**
  ----
    Deletes audit with specified id.

  * **URL**

    audit/:id

  * **Method:**

    `DELETE`

  * **Header Params**

    `Authorization: Token <AUTHORIZATION_TOKEN>`

  * **URL Params**

    `id = <Integer>`

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 204 NO CONTENT <br />

  * **Error Response:**

    * **Code:** 400 BAD REQUEST

    * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
        "detail": "Authentication credentials were not provided."
      }
    ```
    OR
    ```  
      {
        "detail": "Invalid token."
      }
    ```

  * **Sample Call:**

  ```
    curl -X DELETE -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Token <YOUR_TOKEN> http://hostname/audit/<ID>/
  ```

**Get updates**
  ----
    Returns updates list.

  * **URL**

    updates/

  * **Method:**

    `GET`

  * **Header Params**

    None

  * **URL Params**

    None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

      ```
        [
            {
                "id": <Integer>,
                "update": <String>,
                "publish_date": <String>
            }
        ]
      ```    
  * **Error Response:**

    * **Code:** 400 BAD REQUEST

  * **Sample Call:**

  ```
    curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" http://hostname/updates/
  ```

**Search value**
----
  Returns queries and endopints of specified value.

* **URL**

  search/

* **Method:**

  `POST`

* **Header Params**

  None

* **URL Params**

  None

* **Data Params**

    ```
      {
          "searchQuery": <String>
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```
      {
          "results": [
              {
                  "endpoint": <String>,
                  "result": <String>
              }
          ]
      }
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**

    ```
      {
          "detail": "Authentication credentials were not provided."
      }
    ```

  OR

  * **Code:** 400 BAD REQUEST

* **Sample Call:**

  ```
    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"searchQuery": <SEARCH_QUERY>' http://hostname/search/
  ```
