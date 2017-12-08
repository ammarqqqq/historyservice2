define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "creates user.",
    "version": "1.0.0",
    "name": "Authenticate",
    "group": "Authenticationservice",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "phonenr",
            "description": "<p>Users phonenr.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": \"true\",\n \"token\": \"JWT467684352423\",\n \"msg\": \"Authenticated\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"success\": \"false\",\n  \"msg\": \"Could not authenticate user.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.js",
    "groupTitle": "Authenticationservice"
  },
  {
    "type": "get",
    "url": "/authenticated",
    "title": "creates user.",
    "version": "1.0.0",
    "name": "Authenticated",
    "group": "Authenticationservice",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "phonenr",
            "description": "<p>Users phonenr.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>response  status response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": \"true\",\n \"msg\": \"Authenticated\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"success\": \"false\",\n  \"msg\": \"Not authenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.js",
    "groupTitle": "Authenticationservice"
  },
  {
    "type": "get",
    "url": "/info",
    "title": "Greeting from server",
    "version": "1.0.0",
    "name": "GetInfo",
    "group": "Authenticationservice",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Greeting",
            "description": "<p>from server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Welcome to the user service\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.js",
    "groupTitle": "Authenticationservice"
  }
] });
