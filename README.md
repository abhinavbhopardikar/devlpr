**devlpr** is an easy-to-use code-generating/automation tool for web development. It generates a full stack web application based on inputs in **JSON** format. The resultant application is in MVC format and it uses modules such as **expressjs**, **mongoDB**, **mongoose** as the object modeling tool for mongoDB, **ejs** as the view engine, **materialize.css** and core **node.js** modules.

##Documentation
The inputs are parsed using two JSON files
1. *parentHandler.json* : Contains data required for frontend development.
2. *appHandler.json* : Contains data for backend development.

The files of generated application are in the *workspace* directory.

###Build view handler
*parentHandler.json* builds a json file in *viewhandlers* directory of your project. This file sets the targeted view.

```JSON
{
    "filename":"view1",
    "bgColor": "",
    "title": "page title",
    "header": "page header",
    "class": "",
    "nav": {
      "class": "",
      "dropdown": {
        "name":"dropDownLabel",
        "contents": [
          {
            "name": "link name1",
            "link": "path1"
          },
          {
            "name": "link name2",
            "link": "path2"
          }
        ]
      },
      "form": {
        "elements": [
          {
            "name": "search",
            "type": "text",
            "placeholder": "",
            "value": ""
          }
        ],
        "action": "output",
        "method": "get"
      },
      "logo": "nav_logo",
      "bgColor": "#ffffff",
      "type": "",
      "contents": [
        {
          "name": "link1",
          "link": "path1"
        },
        {
          "name": "link2",
          "link": "path2"
        }
      ]
    },
    "main": {
      "bgColor": "#000000",
      "type": "",
      "posts": {
        "data": "collection"
      },
      "form": {
        "elements": [
          {
            "name": "name1",
            "type": "text",
            "placeholder": "form element2",
            "value": ""
          },
          {
            "name": "name2",
            "type": "number",
            "placeholder": "form element2",
            "value": ""
          }
        ],
        "action":"newPage",
        "method":"post",
      },
      "class": ""
    },
    "footer": {
      "bgColor": "#00002f",
      "class": "",
      "copyright": "copyright content",
      "contents": [
        {
          "title": "title1",
          "text": "content1"
        },
        {
          "title": "title2",
          "text": "content2"
        }
      ]
    }
  }
```
If the targeted view has to interact with the DB, then the value of *data* key in *posts* must be set to "collection".

###build controllers, connect application to the database...

```JSON
{
  "projectName": "test_proj",
  "viewSettings": {
    "createHandler": "view1",
    "appTitle": "",
    "appHeader": ""
  },
  "routerSettings": {
    "filename": "controller1",
    "view": "view1",
    "dbOperation": "list"
  },
  "dbSettings": {
    "dbName": "db",
    "collection": "collection"
  }
}
```
The *view* key in the *routerSettings* is the view rendered by the controller and the *dbOperation* is for performing specified db operation. You can give one of the five values to *dbOperation* like:
1. "list"
2. "search"
3. "delete"
4. "insert"
5. ""  

###Initializing the development process
devlpr listens on port 4000.

Go to *localhost:4000* and build the entire project or just another controller, viewhandler, form, searchbar.
The generated project listens on port 3000.

###Initializing the JSON files
*parentHandler* and *appHandler* can be initialized using forms.

###Final tweaks
Although devlpr generates a working application, few lines of code must be written by the user.

####Writing schema for a collection
Schema for every collection used throughout the project must be maintained in a file *schema.js* in the project directory.

**schema.js**
```javascript
var mongoose = require('mongoose');
var index = new mongoose.Schema({
	//enter schema of the collection used by the contoller 'index'
 //ex: 'key':String,
});

var new_route = new mongoose.Schema({
	//enter schema of the collection used by the contoller 'new_route'
 //ex: 'key':String,
});

module.exports.index = index;
module.exports.new_route = new_route;
```
