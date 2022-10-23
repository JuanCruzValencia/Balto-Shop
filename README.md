# Balto's Shop - E-commerce React App Project

Link to live version - [Balto's Shop]()

Balto's Shop is a e-commerce web application that allows users to search for products stored in Firestore, add them to shopping cart and then make payment. App has login system functionality. The guest user is able to browse and add product to cart only. Checkout and payment option is available for registerd users.

## UX
The purpose of the the project is to create a e-commerce app for react couse in CoderHouse. Layout is simple and clear. Project is accesible through both desktop and mobile devices. For build the front-end functionality React JS is used and for back-end, Firebase is used.

## User
- Users can find varius products in the home page - after click on selected product user is redirected to page with all details about chosen item.
- Users are able to add products to cart and select quantity if required (1 is default value).
- Users can update and delete items on cart page.
- After registration/login user is able to access checkout page.
- Users can add product to Wish list - then can add them directly to cart or delete them
- Userlog, Cart and WishList persist at localstorage

## Layout
The layout is simple and responsive, to achieve this React Bootstrap components library was used along with custom styles. 

## Project consist following pages:
### **Products(homepage)**
Page where are displayed all products in form of card with image, short info about specs and price of each product. The user can save to Wishlist o see more details also
### **Product Details**
Page include all details about selected product - image, description, price and add to cart button with counter field allowing select product quantity.
### **Cart page / empty cart**
Page allows to review what is in cart - Image thumbnail is displayed along with product name and description user can delete item completely. Page include total price for all product placed in cart. There are two buttons, allowing user to clean shopping cart or go to checkout. When we remove all items cart icon is displayed with short info that cart is empty and user can go back shopping by clicking Go to Shop button.
### **Checkout page**
This is summary before payment. Page displays product thumbnail, name, quantity, price and total price. Below that user has payment form to fill in with user details and card details. After payment user is redirected to homepage.
### **Login**
Page allows user to login (user get access to checkout page with the info stored previuosly).
### **Registration**
Page allows user to create an account (user get access to login functionality).

### **User Orders**
Page that shows user info a all the orders with detail.

## Features
The app can be accessible with or without user registration, but in that case some features will be available after registration only (UserOrders). Anyone is able to view all details about selected product, add product to cart, add products to wish list.

**Features Left to Implement**

- Search bar - allows user to search product by keyword. 
- Add some gallery image on product details page.
- Create pagination.
- Create contact page.
- Add confirmation email after purchase 
- Customers reviews.

## Technologies used

**GitHub** - provides hosting for software development version control using Git.

**Git** - version-control system for tracking changes in source code during software development.

**Google Fonts** - library of free licensed fonts.

**ReactJS** - Javascript library.

**JavaScript** - programming language.

**CSS3** - used to define styles for Web pages, including the design, layout and variations in display for different devices and screen sizes.

 **React Bootstrap** - free and open-source CSS framework directed at responsive development.

**Firebase** - provides detailed documentation and cross-platform SDKs to help you build and ship apps.

- Firebase/Firestore 

- Firebase/Auth 


