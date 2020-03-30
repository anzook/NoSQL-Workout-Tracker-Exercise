# Nosql Homework: Workout Tracker
### Using a non-relational database to track fitness progress
<!-- * Deployed Application: (TODO: link) -->

This practice application allows a user to view create and track daily workouts, and log multiple exercises in a workout on a given day. It also allows for traking of asic workout mtrics for both cardio and resistance training.

# Design Notes

The front-end code in `/Develop` was mostly provided and only minimally modified. The goal was to practice setting up the back-end environment to make it functional. App intended functionality was slightly unclear, but it seems to be working as intended (although not how I would design this app...)

## Viewing and using the website
<!-- Follow the link to the deployed application above, or  -->

- Clone and Download the repo

- Install the node dependencies:
`npm instal`
* express (routing)
* mongoose (databse interface)
* morgan (reporting)

- Initialize the mongodb database (seed optional):

- Initalize the server
`npm start`

- Add new exercises to an existing workout, or start a new workout. Click 'Dashboard' to view the stats page.


Here is an example of the front end application:
![Mainpage Screenshot Demo](/Assets/NoSQL_WOTracker_SS.png)
( I didn't work out that day... )

All website assets are contained within the repo (https://github.com/anzook/NoSQL-Workout-Tracker-Exercise)


## Acknowledgements and Credits

Website created as an assignment for the Johns Hopkins full-stack web development bootcamp (in partnership with Trilogy Education Services).
Guidance and assistance provided by:
* Stetson Lewis (Instructor)
* Donald Hesler (TA)
* Dan Thareja (Inspiration)