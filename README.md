# Weather Widget with AngularJS
Weather Widget 1.0.0

Very easy-to-use widget to show weather forecast, based on AngularJS, using the openweathermap API.

###How to install

Include using Bower (all scripts are located within bower_components directory):

```sh
bower install weather-widget-angular
```

###Instructions

Adding the widget to your html is ridiculously easy: you just have to add the following line:

`<weather-widget city="Dublin" forecast="3" language="en" size="xl"></weather-widget>`

As included in the directive, we can see the following attributes:

* city: This attribute will take the name of the city we want to show.
* forecast: Value from 0 to 3, indicating the number of forecast steps we want to show (if any), in blocks of 3 hours. For instance, value "0" will not show any forecast, and value "3" will show 3 more blocks to the right.
* language: The widget supports three languages: English (en) , French (fr) and Spanish (es)
* size: 2 posible options: "xs" will show a little widget will basic info, and "xl" will show the widget with full information (max & min temperature, wind speed, humidity....)
 
Here you can see a full [DEMO](http://www.sergiolealdev.com/WeatherWidget/app.html) if you want to see it live.
