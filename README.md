# Pi-H20 front-end

## Description
WaterMyPlant is a Raspberry Pi enabled app that allows users to water their plants remotely. This repo holds the client, which has continuous integration and was deployed via AWS Cloud Formation. The front-end contains the code and interface for the user to interact with the Raspberry Pi.

***
### Git clone this repo

To run the application locally, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

* Builds the app for production to the `build` folder.

Now your app is ready to be deployed!
***

**Deployed App:**

https://pi-front-end-pifrontend1-1gmpoopvgv5q.s3-us-west-2.amazonaws.com/profile
***

**Back-end repo:**
https://github.com/pi-H20/pi-back-end

**Routes**
* `\login` -> log in page
* `\signup` -> sign up page
* `\aboutus` -> about us page, images and links for the developers
#### Once you are logged in:
* `\profile` -> inner landing page, has three buttons to control the Raspberry Pi
* `\data` -> shows a list of all the times the Pi was triggered to release
