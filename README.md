# FORTUNE OLISEYENUM TECHMONSTRO INTERNSHIP CHALLENGE GUIDE

## This webpage contains one GeneralLayout and one RootLayout

## General Layout

1. The generalLayout holds all three main sections of this webpage(intro, gallery, contact)
2. the generalLayout also holds a function which is used to control the theme change of this web page
3. This function gets access to some basic styles across the entire app and chnages them when necessary to fit the theme of the current background
4. it also passed all the functions used to change those background to the LandingView section where they are attatched to a button

## RootLayout

1. the root layout was created mainly for the the purpose of navigation(react router)
2. it holds a the header section which is meant to be displayed across teh entire app regardless of the user is
3. it also hold the Outlet which represents every other content displaye on the webpage(GeneralLayout)
4. although this project contains only one page but most modern web applications undergo changes overtime and this component might become more usefull

## Main components

1. This web page inccludes 3 main section
2. The intro section contains the header, landing view, the about article and an intro component which holds all of them
3. The gallery section contains the galleryItems(plural) and the galleryItem(singular) and the Gallery component which hold both of them and also hold some functions which are needed by both children components
4. the contact section contains the contact and contact form components.
