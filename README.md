# Unit 17 Nosql Homework: Workout Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the `Develop` folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* The URL to the deployed application

* The URL to the Github repository


<!-- example below -->
# Eat-the-Burger-ORM-Example
### Practice with a scratch ORM to track burgers
* Deployed Application: (TODO: link)

This practice application allows a user to track burgers they'd like to and have eaten. Users can add burgers, and those they want to eat show up on the left, and those that theyve 'devored' appear on the right. 

# Design Notes

This app uses a home-brewed ORM to interface with the databse and store burgers in the database. Additionally, the front-end is rendered with the use of handlebars.

## Viewing and using the website
Follow the link to the deployed application above, or 

Download the repo:

Install the node dependencies:
`npm instal`
* express
* express-handlebars
* mysql

Initialize the database and seed if you'd like:
* /db/schema.sql
* /db/seeds.sql

 and then initalize the server through:
`server.js`

Here is an example of the front end:
![Mainpage Screenshot Demo](/public/assets/images/Duly_noted_ex.png)

<!-- ### HTML Routes
This is a single-page app
* `/` - `index.html`, or Home page

### API Routes

  * GET `/api/burgers` -  `db.json` returns saved burgers.

  * POST `/api/burgers` - new burger from the request body

  * DELETE `/api/burgers/:id` - Deletes burger with matching 'id'  -->

All website assets are contained within the repo (https://github.com/anzook/Duly-Noted)


## Acknowledgements and Credits

Website created as an assignment for the Johns Hopkins full-stack web development bootcamp (in partnership with Trilogy Education Services).
Guidance and assistance provided by:
* Stetson Lewis (Instructor)
* Donald Hesler (TA)
* Dan Thareja (Inspiration)