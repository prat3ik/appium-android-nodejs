# appium-android-nodejs

This project will test the simple android application using Appium, and here I am using Node.JS as a programming language.

### Libraries:
1) **mocha:** JavaScript testing framework
2) **chai:** Assertion library for Node.js 
3) **wd:**  Node.js client for WebDriver(Appium) 

All above dependencies are mentioned in **package.json**

### Directory Structure:
![](http://drive.google.com/uc?export=view&id=1Kh_gPLNZ0vQMulK5r6eReMd451s_d-NG)

### Installation
**Prerequisites:**
1) Make sure valid Android device is connected properly.
2) Change `platformVersion` & `deviceName` in [android_test.js](https://github.com/prat3ik/appium-android-nodejs/blob/master/test/android_test.js) accordingly.
3) Open terminal and type following commands:
	*  `$ git clone https://github.com/prat3ik/appium-android-nodejs.git`
	*  `$ cd appium-android-nodejs` 
	*  `$ cd test`
	*  `$ npm install`
	*  `$ mocha android_test.js`

>  ***NOTE***: *Please make sure that mocha has installed globally, OR you can use command `$ npm install -g mocha` to install mocha globally.*