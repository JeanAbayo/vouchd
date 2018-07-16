# Voucha

`Voucha` is a platform that leverages facebook technologies to empower connection between local vendors and their online/offline customers.

`Voucha` helps customers know which business has the best **vouchers**, **discounts**, **coupons**, and **promos** in their neighborhood.

`Voucha` helps local businesses advertize their new products and turn customers into friends .

## Mobile application 📱

Voucha has an android and ios mobile app. Below is how to set up and run the application:

### Prerequisites

Voucha is using `reac-native 0.56.0`. 

Setup for react native development, check more from [here](https://facebook.github.io/react-native/) for both ios and android.

**IOS**

For ios you need to have Xcode min version is `9.3`

- Download ios Facebook SDK and copy the contents in `~/Documents/FacebookSDK`

### Set up the application

- `git clone git@github.com:j33n/Voucha.git`
- `cd Voucha`
- Install the packages(yarn or npm): 
  - **NPM**: `npm install`
  - **Yarn**: `yarn`

### Run the application

#### ios

Open `Voucha/ios/Voucha.xcodeproj` in Xcode and run the application from Xcode

**or** run `react-native run-ios` 

#### android

Make sure that you have an emulator running (Genymotion or One installed from Android Studio):

You can check running android emulators by running : `adb devices`

Then, run `react-native run-android`



## Authors

- [Jean Abayo](https://twitter.com/JeanAbayo)
- [Emery Muhozi](https://twitter.com/EmeryMuhozi)

