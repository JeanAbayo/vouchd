# Voucha

**Voucha** is a platform that leverages facebook technologies to empower connection between local vendors and their online/offline customers.

**Voucha** helps customers know which business has the best **vouchers**, **discounts**, **coupons**, and **promos** in their neighborhood.

**Voucha** helps local businesses advertize their new products and turn customers into friends .

## Mobile application 📱

Voucha has an android and ios mobile app. Below is how to set up and run the application:

### Prerequisites

Voucha is using `reac-native 0.56.0`. 

Setup for react native development, check more from [here](https://facebook.github.io/react-native/) for both ios and android.

**IOS**

- For ios you need to have Xcode min version is `9.3`
- This app use [Cocoapods](https://guides.cocoapods.org/using/getting-started.html) dependency manager for Objective-C and Swift, make sure that you have it installed before running the application

### Set up the application

- Clone the app

  `git clone git@github.com:j33n/Voucha.git`

- Switch to project directory

  `cd Voucha`

- Install the packages Javascript dependencies using  [Yarn](https://yarnpkg.com/lang/en/docs/install) by running:

  `yarn`

#### iOS:

Install project dependencies 

- Switch to iOS directory 

  `cd ios`

- Install dependencies using Cocoapods (Make sure you do this after installing Javascript dependencies) 

  `pod install`

- Switch back to the project main directory 

  `cd ..`

### Run the application 🚀

#### iOS

To run the app on iOS run: `react-native run-ios --simulator="iPhone X"` You can specify emulator of your device - *iOS 9 Min*.

**Or** run the app via Xcode:

After installing dependencies using Cocoapods as described above, Open `/ios/Voucha.xcworkspace` will be generated. Open it in Xcode and run the application from Xcode



#### Android

Make sure that you have an emulator running (Genymotion or any other one that comes with Android Studio) - *SDK Version 26 Min*:

You can check running android emulators by running : `adb devices`

Then, run `react-native run-android`



## Authors

- [Jean Abayo](https://twitter.com/JeanAbayo)
- [Emery Muhozi](https://twitter.com/EmeryMuhozi)

