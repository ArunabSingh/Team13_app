## My Web Application (URide)

##Team Members
* Arunab Singh.
* Dustin Lott.

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application will compare prices for different ride sharing companies and present the user with the best prices they can choose from. Additionally we have a profile page which diplays personal information of the user and their previous made searches. We added a Reviews feature for each company where the user can submit their review and reate the company out of 5 stars. Added Help page to help the user navigate through the app and read about the app and its uses and provide our contact information.
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Google Maps API
* Firebase
* JQuery
* Font Awesome 4.7

	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore                  # Git ignore file
├── index.html                  # landing HTML file, this is what users see when you come to url
├── 404.html                    # 404 HTML file, error page
├── aboutUs.html                # about us HTML file, description of BESTRIDE company including contact information
├── FAQs.html                   # FAQs HTML file, answers to frequently asked questions
├── help.html                   # help HTML file, has links to FAQs and about us pages
├── login.html                  # login HTML file, this is what users come to login
├── main.html                   # main HTML file, this is what users come to compare prices
├── profile.html                # profile HTML file, this is what users see their user profile with past search history
├── results.html                # results HTML file, this is where the user sees the results are displayed
└── README.md

It has the following subfolders and files:
├── .git                        # Folder for git repo
├── images                      # Folder for images
    /AboutUs.png                # image for about us page top banner
    /AboutUs2.png               # image for about us page top banner
    /Arunabpp.JPG               # Arunab's profile picture
    /dustinpp.jpg               # Dustin's profile picture
    /bgLandingPage.jpg          # background image for index.html
    /results-background.jpg     # background image for the results.html
    /company1.JPG               # company logos
    /company2.JPG               # company logos
    /company3.JPG               # company logos
    /company4.JPG               # company logos
    /contactUs.jpg              # button image for contact us
    /FAQ.jpg                    # button image for FAQs
    /results-top-banner.JPG     # image for results page top banner
├── scripts                     # Folder for scripts
    /auth.js                    # for checking the authorization level of a user
    /FAQs.js                    # for the FAQs page reading from firestore
    /firebase_api_BESTRIDE.js   # our Firebase API key
    /login.js                   # firebase login auth js
    /main.js                    # contains Google Maps API code and sends data via LocalStorage
    /navbar.js                  # allows for functionality of the toggle button on the right side of the navbar
    /profile.js                 # reads data from firestore and displays personal information
    /results.js                 # writes data to firestore, reads comapany information from firestore, displays and calculates prices
    ├── reviews                     # Subfolder for scripts specifically for reviews
        /evoReviews.js              # allows reading and writing of user reviews for evo to firestore
        /lyftReviews.js             # allows reading and writing of user reviews for lyft to firestore
        /modoReviews.js             # allows reading and writing of user reviews for modo to firestore
        /uberReviews.js             # allows reading and writing of user reviews for uber to firestore
├── styles                      # Folder for styles
    /aboutUs.css                # sets the style and layout for the aboutUs.html page
    /FAQs.css                   # sets the style and layout for the FAQs.html page
    /help.css                   # sets the style and layout for the help.html page
    /index.css                  # sets the style and layout for the index.html page
    /login.css                  # sets the style and layout for the login.html page
    /main.css                   # sets the style and layout for the main.html page
    /navbar.css                 # sets the style and layout for the navbar
    /profile.css                # sets the style and layout for the profile.html page
    /results.css                # sets the style and layout for the results.html page
    /reviews.css                # sets the style and layout for the reviews.html page

Firebase hosting files: 
├── .firebaserc                 # firebase file 
├── firbase.json                # firebase JSON file
├── firestore.indexes.json      # firebase indexes JSON file
├── firestore.rules             # firebase rules


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

