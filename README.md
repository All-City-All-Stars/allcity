## Project Photo

## Project Description

AllCity is a working, interactive, mobile application that allows users to learn more about graffiti art, the artists, the location, and the creation date.

## Your tech stack (frontend, backend, database)

React Native, Expo,
AWS for Images, Express/MongoDB

## User Stories (MVP)

As a user of All-City, I want to be able to view the top pieces of graffiti art, as well as their locations, their artists, and comments about the pieces.
As a user of All-City, I want to be able to read comments about graffiti art, and to be able to create my own comments about graffiti art.

## Learning Experience

Developing a native mobile app is a completely different challenge than developing for the web. We utilized a number of new technologies and frameworks that were not covered during the cohort.

## Setting Up Project

We used React Native and Expo to create the core structure of our project. From there, we built reusable functional components using the same methodology as a React web application.

## Building the Core Structure

React Components The Component Hierarchy diagram, above, represents of how the components are structured in our app.

Our API contains 2 models
Post: image_url, author, location, post_time, caption_body
Comment: author, caption_body, post_time

## Navigation

In this case, all of the mobile navigation was done in the 'App.js' file and that data is passed between all of the different screens/views.

By creating our own API, All-City is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

## User Experience - Responsive design & Accessability

All-City uses React Native components paired with Flexbox in order to make it responsive across all mobile screens, and it also includes accessability tags in order to make it accessible to all users.

## Future Directions

User Stories (Stretch Goals)

As a user of All-City, I want a search feature that allows me to search for graffiti and get a result of different art pieces.
As a user of All-City, I want to be able to see my created post so that I know my post is saved.
As a user of All-City, I want to be able to update a post incase I make a mistake.
As a user of All-City, I want to be able to delete my post so that I can remove any unwanted post.

## Accomplishments

This application uses a React Native and Expo. This was our first project building a native mobile app as a team.

## Installation

yarn install

Dependencies
"@react-navigation/bottom-tabs": "^6.0.1",
"@react-navigation/native": "^6.0.1",
"@react-navigation/native-stack": "^6.0.1",
"@react-navigation/stack": "^6.0.3",
"expo": "~42.0.1",
"expo-cli": "^4.9.1",
"expo-image-picker": "~10.2.2",
"expo-sharing": "~9.2.1",
"expo-status-bar": "~1.0.4",
"formik": "^2.2.9",
"react": "16.13.1",
"react-dom": "16.13.1",
"react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
"react-native-gesture-handler": "^1.10.3",
"react-native-image-picker": "^4.0.6",
"react-native-reanimated": "^2.2.0",
"react-native-screens": "^3.5.0",
"react-native-web": "~0.13.12"

Support
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
