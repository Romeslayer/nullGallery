# nullGallery

## Overview
null Gallery  is an application where you can create your own gallery from 10 different works picked out using the Chicago Insititue of Art's [API](https://api.artic.edu/docs/).

![nullGallery1](https://user-images.githubusercontent.com/20838033/165004272-9a7ec5c9-6b9f-4669-a3c2-966f74ca25ad.gif)

![nullGallery2](https://user-images.githubusercontent.com/20838033/165004282-84f3d87e-4b45-4ea6-b613-a2ca8c77df0a.gif)

The images are generated using a query of abstract to the API. Using the little button in the corner of each image you can heart and add which every images you'd like to the gallery. Then click the button in the bottom right corner to be taken to your gallery!

# Contributors
- [DéNaje Ferguson](https://github.com/Romeslayer)

# Learning Goals
- React
- Router v 6
- PropTypes
- Implementing a timer and redirect at end of timer
- Testing React components with end-to-end testing

# Technologies Used
- React
- React Router
- PropTypes
- Cypress
- CSS

# Getting Started
To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:Romeslayer/nullGallery.git
   ```
2. `cd` into that directory
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to see the local site
   ```sh
   npm start
   ```


# Challenges and Wins
- The biggest win with this project was creating a fetch call that would generate the link for a different fetch call because the Chicago Institute of Art delivers their images from a different API that needs to be generated from the first call. This made it difficult to test properly because the first response would dictate what the second request should look like.

# Future Additions
- User can change search query
- User can select different pages of results
- User can modify images by writing graffiti on them.
