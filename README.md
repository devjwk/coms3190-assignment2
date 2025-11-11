# SkillFlix

## Project Overview

SkillFlix is a Netflix-style online course enrollment platform built with React and Tailwind CSS.
It allows users to browse courses by category, view detailed course information, fill out an enrollment form, and complete a mock payment confirmation.
The app demonstrates dynamic rendering, routing, and responsive UI design inspired by streaming platforms like Netflix.

## Purpose

The goal of this assignment is to design a single-page React application that simulates a lightweight course browsing and enrollment experience.
This project focuses on using React Hooks, Tailwind CSS, and JSON-based data management to build interactive and responsive user interfaces.


## Features

Home (Browse Courses) – Displays categorized course carousels loaded dynamically from JSON using useEffect.

Course Details – Shows detailed course info, video, instructor, and price with navigation via React Router.

Enrollment Form – Collects user data, validates inputs using React Hooks, and passes info to the next view.

Payment & Confirmation – Simulates a mock payment form and shows a confirmation message with submitted data.

## Setup Instructions

	1.	Clone the repository:
  git clone git@git.las.iastate.edu:se-coms-3190/fall-2025/assignment-2/NM_15.git
  cd NM_15

  2.	Install dependencies:
  npm install

  3.	Run the app:
  npm run dev


## Team Members & Roles

Member 1: Jongwoo Kim
Implemented the Home and Enrollment Form pages, handled data rendering, and set up layout styling.

Member 2: David Lawlor
Implemented the Course Details and Payment Confirmation pages, routing logic, and final video demo.

## Design Summary

The project uses Tailwind CSS for responsive design and consistent color theming.
React Hooks (useState, useEffect) manage dynamic data and form states.
The UI is clean, minimal, and optimized for both desktop and mobile screens.

## Demo

[Watch the demo video here](https://drive.google.com/file/d/12lGHOZPpAFIJWSiro9F3PhVjLxp8NLsh/view?usp=drive_link)

## Notes

	The application runs fully in the browser with no backend dependencies.
	All pages are connected seamlessly through React Router to maintain single-page app flow.