
# SE Lab - Registration Form

## Overview

This project is a **Registration Form Web Application** that allows users to submit their personal and academic details, which are then stored in an Excel file using a backend Node.js server. The purpose of this project is to practice web development and server-side programming while implementing basic CRUD operations, form handling, and working with external file formats such as Excel.

The project involves creating a simple, user-friendly HTML form where users input details like their name, contact information, education, and more. Upon submission, the form data is processed by a Node.js server that uses the `Express` framework. The server handles the data, which is then written into an Excel sheet using the `xlsx` package.

This project also integrates key features such as:
- **Form Validation**: Ensuring the user inputs valid data for fields like phone numbers, email addresses, and dates.
- **Backend Logic with Node.js**: Handling form submission, processing data, and writing it to an Excel file.
- **Data Persistence**: Every submission is stored in a single Excel file that logs all user registrations.
- **Responsive Design**: A clean, styled front-end form layout built with CSS to ensure the form looks good on various devices.

## Technologies Used

- **Front-end**: HTML5, CSS3, JavaScript
- **Back-end**: Node.js, Express.js
- **Data Storage**: Excel files using the `xlsx` Node.js library
- **Dependencies**:
  - `express` for server setup
  - `body-parser` for parsing incoming form data
  - `xlsx` for reading/writing Excel files

---
