
## About this project

This is my final project in the course "Webbapplikationer för mobila enheter" that i'm taking at [BTH](https://bth.se) as a part of the program "Webprogramering"

The main part of the project is to implement 2 open APIs into a mobile webbaplication.

### APIs

For the project i have choosen to implement to open APIs i focoused around space and rockets:

The first API i have chosen is the Public API for SpaceX where you can get information about past and upcomming missons they will do/have done

* [SpaceX](https://github.com/r-spacex/SpaceX-API)

The Second API i have choosen to implement is the public API for tracking the ISS(International Space Station), where you can get the current position of the sapce station. As well as getting a list of everyone who is living on the space station.

* [ISS Location](http://open-notify.org/Open-Notify-API/)

## Use of this app

This app is for the one who is inserested in space and rockets.

You can use it to get information about previous and upcomming spaceX launches.
As well as track the ISS and see who is living on it.

## Architecture

The app is built with cordova for ease of porting the app to mobile platfors such as Android and IOS without needing knowledge about their own programing languages.

The base of the app with all it's routes and views is built using the npm module [Mithril](https://mithril.js.org/).

The authentication part of the app to get access to information about the ISS is implemented using a simple auth API from our teacher Emil Folino.

The js part of the project is mostly structured in two main parts, the view and models folder.

* The view folder is where everything you see on the screen is located
* The models folder is responsible for all loading of data for the views.

It's implemented this way becouse of mithrils built in redraw system. If you would load data inside a view mithril drawing it could cause an infinate loop of redraws for the
app, that would eventuly cause the app to crash.

## How to build and run the project

To build the project you will need some dependencies:

* nodejs and npm installed to get all pakages needed to build
* Apache cordova to run the browser version and to build to other platforms

### Prerequisite
Before you can begin running and building the project you need to run the command `npm install` to get all packages intalled.

After that you need to add the desired platforms into cordova by running the command `cordova plattform add <desired platform>`.

### Misch
In the package.json i have provided scripts for building to browser and android.

**If you want to run it on android**, make shure you have android studio and android SDK 28 installed.

