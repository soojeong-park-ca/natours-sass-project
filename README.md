# Natours

This is a landing page website for a fictional tour company called "Natours"

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Demo Link](#demo-link)
- [About the Project](#about-the-project)
  - [Motivation](#motivation)
  - [Tech Framework Used](#tech-framework-used)
  - [Reflection](#reflection)
- [Author](#author)

## Overview

### Features

Some features from the website :

- Structuring SASS files using **7-1 Pattern**;
- Using **responsive images** in HTML and CSS for better performance;
- Using **reusable CSS Grid** with different number of columns to organize contents;
- Using **`<figure>`** HTML tag and **`shape-outside`**, **`clip-path`** CSS properties to have text content float around an image;
- **Rotating cards** for different tour products using **`transform: rotate()`** and `backface-visibility: hidden`;
- video element as a background image for a section;
- **Custom Radio Inputs** used in booking form;
- **Custom Checkbox Input** used to make navigation menu;
- Some JS functions for testimonial slider, navigation, and opening / closing modal popups using Vanilla Js

### Demo Link

**[💻 Live Site URL](https://spark-natour.netlify.app/)**

## About the Project

### Motivation

Natours is originally designed by Jonas Schmedtmann from his [Advanced CSS and SASS course](https://www.udemy.com/course/advanced-css-and-sass/). I changed and added extra features / functions to the website for my first ever personal SASS project.

### Tech Framework Used

- HTML
- SASS (SCSS)
- Responsive | Desktop first
- Vanilla JavaScript

### Reflection

This was a first SASS project I built. Since I've always been using CSS3, SASS syntax wasn't too difficult to learn. I enjoyed how structured it was to use SASS. I also enjoyed using mixins and functions which made the code more dry and organized.

The most challening part was to figure out the SASS build process, however, since I've used packages and the json script in the past. It was very intuitive to write the SASS build script and finally turn all the SASS files into a CSS single compact CSS file.

Some new things I learned while building this website/app are:

- Using the modern **`:focus-visible`** pseudo-element to style focus outlines while keeping accessibility in mind
- HTML elements: **`<figure>`** & using it with `float` | `<video>` & `<source>` |
- CSS properties: **`clip-path`** | **`background-clip`** | **`shape-outside`** | **`column-count`**
- CSS functions: **`circle(<shape-radius> at <position>)`** | **`transform: skew()`**

I look forward to using SASS more in the future with my projects!

## Author

Soojeong Park [@codingsooj](https://twitter.com/codingsooj)
