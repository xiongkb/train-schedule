# Introduction
Deployed Version: https://xiongkb.github.io/train-schedule/

A train schedule for UCB bootcamp assignment. Goal of the assignment to understand how data is stored and called using google Firebase. This app was created 
from a administrator perspective, where the admin can add a train schedule by entering its name, schedule and frequency.

# How It Works
When an admin wants to add a train route to the existing ones, they can do so by entering the required information. Once they do, moment.js is used to give 
real life time information based on the admin's time. So say for example, admin's time is at 12:00, then the logic written will let the admin know when the 
next arrival of the train will be.

When the admin inputs the required information and click submit, the inputs are stored into google's firebase through their api. Where each submisson will have it's own name, time, and frequency. This stored data is then called back in the logic file to display the information needed.

# Technologies Used
- Firebase
- Moment.js
- JQuery
- HTML5
- CSS3
