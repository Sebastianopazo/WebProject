# WebProject

**FECI-analyst | Sebastian Opazo-Marchetti | Tools used: Bootstrap, Jquery, Chart.js, ionicons, animate **

## Topic

_Psychological surveys and questionnaires are an essential part of clinical psychology work. They contribute to the task of keeping track of patient progress, making accurate predictions and diagnosis._

_The Integrative Clinical Assessment Form (FECI) was developed by the Chilean Institute for Integrative Psychotherapy as a tool to help clinicians in assessing Personality, Self-esteem, Self-image, perceived Self-efficacy, information processing styles, Self-control, Symptoms, and behavioral management. It comprises a set of internationally validated scales like Eysenck&#39;s EPQ, Rathus Assertiveness Schedule, The Gambrill &amp; Ritchie Assertion Inventory Sub-scale, and a series of scales developed at ICPSI._

## Problem

Currently, clinicians who have access to FECI do not have a consolidated system to store and manipulate the data about their patients. Constrained to the paper version of the measure, the process of scoring and interpreting can be time consuming and overwhelming.

This problem becomes especially relevant when training new clinicians. Trainees usually struggle trying to make sense of the data and understanding the implications of specific scores.

_&quot;FECI-analyst&quot; is a website designed for clinicians to collect, score, and interpret the data provided by FECI. FECI-analyst also seeks to provide meaningful feedback, as a way of scaffolding the learning process._

## Target Audience

_Broadly speaking, this project will target every clinical psychologist who has access to FECI. This group usually ranges between 23-60 y/o, with no training in technology-based systems._

_As a specific group if interest, this project will focus on clinical trainees, who aren&#39;t familiar with FECI, and usually have more access to technology._

### User Stories

- **User Story 1: Veronica | Age:55 | Occupation: Clinician and Supervisor**

**&quot;I don&#39;t have time to score all this data by hand, and I don&#39;t have a place where I can simply access all my patient&#39;s data&quot;.**

**Veronica has no time to dedicate to score and analyze FECI data, and has trouble consolidating and reviewing her trainees&#39; patients&#39; data.  **

**Technical profile: has no experience with web-based applications. Some knowledge of e-mailing apps. Familiar with text processors and spreadsheets.**

- **User Story 2:**  **Camila | Age:25 | Occupation: Clinical Psychology Trainee**

**&quot;I don&#39;t understand how to use FECI in the context of clinical work, I don&#39;t know what to make of all these numbers&quot;.**

**Camila has little experience working with FECI, and still has to understand what scores mean and how to use them in the clinical setting.**

**Technical profile: familiar with the basics of web browsing, spreadsheets and text processors, as well as data analysis tools.**

## Strategy

### Site Objectives:

_The main goal of this website is to improve the learning process of FECI throughout clinical training. This improvement will aim to focus on engagement and motivation, in one hand, and learning outcomes on the other.  _

### Success Metrics

_In accordance to the site objectives, the success of this project will be measured in two main ways:_

_1) By obtaining data about user engagement and motivation:_

_-Surveys will be conducted to analyze the importance that users see in the different features of the website, and their perception of the overall value of the project._

_-Data will be tracked from the website to measure the users permanence in the different elements, like tooltips, lists and plot charts._

_2) By obtaining data about learning outcomes:_

_Working with staff at the Chilean Institute for Integrative Psychotherapy, a set of tests will be administered, and will measure the improvements on learning outcomes about FECI that this site may provide. Retention and transfer of knowledge are two main areas to assess._

## User Research

Preliminary feedback was collected from 5 English speaking clinical trainees from the Chilean Institute for Integrative Psychotherapy. All five participants are potential users of the system, and were exposed to a one-hour webinar on the main functionalities of the web app.

After the webinar, a brief survey was conducted asking questions about clarity, usability, and overall value of the project. Results were positive in general, with all participants reporting they would feel the existence of this app would be a very positive thing. There were also several recommendations on the specifics of the design.

## Scope

Functional and Content Specifications

Purpose: the purpose of this web app is to allow users to create a personal profile, login, create and store patient data, add measurements, and score them. Also, represent this data in the form of tooltips and interactive charts.

Methods: in order to accomplish the purpose, the web app will implement a real time database that will store therapists and patient&#39;s data, as well as a front-end portal that will present the data to the users in an accessible way.

Content: this web app will store basic demographic info about users and patients, and store the collected data from the FECI subscales. This data will be coupled with specific tooltips that will appear depending on the scores.

## Structure

Users will be presented with the option of creating a profile, by filling up demographic data such as name, age, and years of experience. 
After this process, users will be able to create patients by filling up a form with demographic data as well, such as name, age, record number, etc.
For each patient’s profile, there will be an option to create a new measure, choosing from a premade pool of measures. This will take the user to a specific form for that measure, that will have specific fields to be filled. After completion, information will be available in the measure page, in the form of useful tips and plot cahrts.   

## Skeleton

Interface: interface will be structured around easy-to-read lists of information, and using simplified forms to fill out patient&#39;s data.

Navigation design: this website will use a &quot;global navigation&quot; structure, providing a unified navigation bar that will be available in every page and will orient the users.

Information design: information will be conveyed through small chunks of text at a time. Small but meaningful pieces of information will be prioritized, highlighting keywords.

 

## Reflection

To elaborate this project I had to learn a great deal about the whole process of creating a technology-based experience. I realized that so far, I&#39;ve been intuitively trying to organize the process in a way that makes sense to me, but without the proper structure.

This is where the reflections we&#39;ve made so far become relevant. Throughout the semester, we&#39;ve discussed the importance of creating projects as a succession of different interconnected levels that go from the basic conceptual framework to the code level.

I&#39;ve been able to learn how important and difficult it is to define your audience precisely, to narrow the overall scope of a project, and to understand the concrete functions you want to provide with your website.

I believe that I&#39;ve been moderately successful in giving my project a reasonable structure, but I&#39;ve done so by visiting and revisiting the different levels and elements several times before the execution.

This is something that I don&#39;t usually do. I tend to have a trial-and-error approach, which in the end makes me work more due to several missteps in the whole process.

As I continue to work on this project, I expect to keep revisiting the different levels, trying to foresee problems as much as I can, but also embracing unexpected outcomes and reacting appropriately.
