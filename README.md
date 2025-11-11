# SkillFlix

## Project Overview

Skillflix is a dynamic website capable of taking courses from a JSON file and then displaying them in a style simmilar to netflix. Sorted by categorys with a scrollable view. Each course as an information page with relavent details as well as a video related to the topic. Than a user can enroll for the course and input their information. This website also works with different devices like mobile.

SkillFlix simplifies the process of finding and enrolling in courses by presenting them in an intuitive, visually engaging format. Instead of navigating through cluttered lists, users can browse, preview, and enroll in courses with ease.
## Purpose

The goal of this assignment was to design and develop a single-page course enrollment platform using React and Tailwind CSS.
This project demonstrates:

  -Building modular and reusable components using React
  -Managing data flow with React Hooks (useState, useEffect)
  -Rendering dynamic JSON data
  -Implementing form handling and validation
  -Using React Router for seamless navigation between views
  -Applying Tailwind CSS for responsive and modern UI design
  -Collaborating effectively as a team using GitLab and SCRUM practices

## Features

Home (Browse Courses)

-Displays a horizontally scrollable, Netflix-style collection of courses.
-Courses are grouped by categories such as Software Development, AI & ML, and Theory of Computation.
-Each course card includes a thumbnail, title, instructor, and a View Details button.
-Data is dynamically loaded from a JSON file using React Hooks.

Course Details

-Shows complete course information including title, instructor, duration, description, price, and a short video trailer.
-Includes an Enroll Now button that takes the user to the enrollment form.
-Data is passed dynamically through React Router state.

Enrollment Form

-Collects user details such as name, email, start date, learning mode, and comments.
-Implements real-time validation using React Hooks.
-On successful submission, navigates to the Payment & Confirmation view.

Payment & Confirmation

-Simulates payment by collectingbilling information.
-Displays an order summary and generates a random transaction ID upon completion.
-Provides a Return to Home button to reset the flow.

## Setup Instructions

How to clone the app:
-"git clone https://git.las.iastate.edu/se-coms-3190/fall-2025/assignment-2/NM_15.git"
-open terminal of repo location
-npm install 
-npm run dev
-npm install @headlessui/react @heroicons/react


## Team Members & Roles

Member 1 – Jongwoo Kim

-Implemented Home (Browse Courses) and Enrollment Form views.
-Integrated dynamic JSON data, course listings, and form validation logic.
-Designed responsive UI layout using Tailwind CSS.

Member 2 – David Lawlor

-Implemented Course Details and Payment & Confirmation views.
-Handled routing, video embedding, and payment simulation logic.
-Styled layouts and design attributes.

Collaborative Tasks:
-Coordinated JSON structure, navigation flow, and shared state management.
-Collaborated on Tailwind styling, responsiveness, and GitLab documentation.
-Recorded and presented the demo video together.

## Design Summary

The SkillFlix interface was designed with modern streaming aesthetics in mind.
Key design decisions include:

-Netflix-style horizontal carousels for category browsing.
-Clean typography and subtle hover transitions.
-Used tailwind templates for multiple aspects of project like enrollment.
-Consistent color palette and spacing works across all platforms.

## Demo

[Watch Video Here](https://drive.google.com/file/d/12lGHOZPpAFIJWSiro9F3PhVjLxp8NLsh/view?usp=drive_link)

## Notes

-Install all dependencies