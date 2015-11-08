# WeatherWidgetAngularJS
Weather Widget 1.0 for AngularJS

Very easy-to-use widget to show weather forecast, based on AngularJS, using the openweathermap API.

###How to install

Just clone this repository, and run `bower install` to create the directory with the dependencies of the project.

You may also want to run install http-server with `npm install -g http-server` to have a little HTTP Server to run the app. Once installed, you just have to run `http-server` in the directory of the app in order to run the content in the server.

Once we have all up and running, we can see the content of the widget addressing our browser to:

`http://localhost:8080/app.html`

###Instructions

I have created a little app.html introduction page to show-and-tell the main features of the widget.

Adding the widget to your html is ridiculously easy: you just have to add the following line:

`<weather-widget city="London" forecast="3" language="en" activatedemo="1" size="xl"></weather-widget>`

As included in the directive, we can see the following attributes:

* city: This attribute will take the name of the city we want to show.
* forecast: Value from 0 to 3, indicating the number of forecast steps we want to show (if any), in blocks of 3 hours. For instance, value "0" will not show any forecast, and value "3" will show 3 more blocks to the right.
* language: The widget supports three languages: English (en) , French (fr) and Spanish (es)
* activatedemo: if set to "1", we will see a list of options to "play" and customize our widget.
* size: 2 posible options: "xs" will show a little widget will basic info, and "xl" will show the widget with full information (max & min temperature, wind speed, humidity....)
 
Here you can see a full [DEMO](http://www.sergiolealdev.com/WeatherWidget/app.html) if you want to see it live.
