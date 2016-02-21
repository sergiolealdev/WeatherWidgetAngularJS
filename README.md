# Weather Widget with AngularJS
Weather Widget 1.0.0

Very easy-to-use widget to show weather forecast, based on AngularJS, using the openweathermap API.

###How to install

Include using Bower (all scripts are located within bower_components directory):

```sh
bower install weather-widget-angular
```

then add js files in your main html file.

```html
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular-translate/angular-translate.min.js"></script>
<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="bower_components/weather-widget-angular/weather-widget-angular.js"></script>
	
<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
```


###Instructions

Adding the widget to your html is ridiculously easy: you just have to add the following line:

`<weather-widget city="Dublin" forecast="3" language="en" size="xl"></weather-widget>`

As included in the directive, we can see the following attributes:

* city: This attribute will take the name of the city we want to show.
* forecast: Value from 0 to 3, indicating the number of forecast steps we want to show (if any), in blocks of 3 hours. For instance, value "0" will not show any forecast, and value "3" will show 3 more blocks to the right.
* language: The widget supports three languages: English (en) , French (fr) and Spanish (es)
* size: "xs" will show a minimal widget will basic info, and "xl" will show the widget with full information (max & min temperature, wind speed, humidity....). Note xs size doesn't allow forecast
 
Here you can see a full [DEMO](http://www.sergiolealdev.com/WeatherWidget/app.html) if you want to see it live.
