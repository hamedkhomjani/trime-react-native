<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Trime
</h1>

**A <a href="https://www.hyperisland.com/" target="_blank">Hyper Island</a> Student Project**

**About:**

The prototype for this app is our first collaboration at Hyper Island between the UX designers and front-end developers.

We were assigned a client, in this case, the fitness app Trime, which aims to connect freelance personal trainers and their clients, and we collaborated to create a Figma prototype and react-native proof of concept.

Since the onboarding part of the app was one of the focuses of the UX team, we dived into the React Native framework and coded this slice.

**Screenshots:**

![Start Page](./assets/screenshots/1.png)
![Start Page](./assets/screenshots/2.png)
![Start Page](./assets/screenshots/3.png)
![Start Page](./assets/screenshots/4.png)

**How to run on your mobile device:**

Currently, the app is not installed and needs to be run through the Expo app.

1. `npm install expo-cli -g`
2. Clone this repo
3. `npm install`
4. `npm start`
5. Download the Expo Go app on your device and scan the QR code.

**Challenges:**

Learning React Native was more different than we thought. Turns out you can't use HTML elements (duh, it's not the DOM), rather View and Text and a whole bunch of other specific things.

It would be nice to experiment with Flutter....

Styling is a pain. We ended up using mostly a mix of styled components and inline styling. The default container style is flex, so we had to learn to work with that in a good way.

Not sure if we set up the navigation in the best way. Now, we have a tab navigator nested inside a stack navigator, and there are an awful lot of screens in our stack. Is there an easier way?

Need to explore asyncStorage for storing user prefs and to not load the onboarding screen every time the app is started.

**Things we learned:**

- React Native
- SCRUM and Agile methodology

**Tools and Tech stack:**

[React Native:](https://reactnative.dev/) “A framework for building native apps using React.”

[Expo:](https://expo.io) “Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.”

**Libraries and dependencies:**

[Styled components:](https://styled-components.com/) Component-based CSS.

[react-navigation:](https://reactnavigation.org/) Routing and navigation for your React Native apps.

**Contributors:**

- [Neha Hirve](https://github.com/nehahirve/)
- [Saeid Fattahi](https://github.com/saeidfattahi/)
- Dimitri Karlov
- Alice Jurell
