# This is my 260 Startup file
Testing how this works!

## Startup Specification
### Elevator Pitch
I want to create an application that asks quiz questions to determine which Knight Radiant a user would be. Knight Radiants are a group of warriors created by author Brandon Sanderson. They personify certain ideals such as honor or creativity and are granted certain abilities depending. Think of it like a peronality quiz, or hogwarts house sorting but for Brandon Sanderson fans.

**Key Features**
1. Users will create a login to save their answers and results.
2. A database will save each users score and show their result.
3. In real time, users can see current users Radiant order when discovered (when they finish the quiz)

**Technology**
1. HTML will be used to create the web page. This is the backbone of my website.
2. CSS will make a thematic visual. Not sure what this means yet, but I hope to make the buttons look nice, perhaps add visual featuers on each question such as a picture or graphic.
3. Javascript will be added so users can interact and click on options. Users should be able to access saved scores, an about page, as well as click options for the questions.
4. Web service will be used to collect and call upon saved scores/results. Be able to pull up old scores.
5. Authentication for users to login and save their results. It will be helpful to have a username to attach to results.
6. Database persistence to save all user results.
7. WebSocket for users to see in real time other users Radiant Order.
8. Web Framework for technical support.

### HTML Deliverabel
For this deliverable I built out the structure of my application using HTML.

HTML pages - Four HTML pages representing the ability to login, take a short quiz (I have one page as an example, there will most likely be 15-30 with the same format), view the result, and the about page.  
Links - The login page automatically links to the quiz, about, and results page. This is in a standard header so is the same on all pages.  
Text - Each option for the quiz is represented by a text description.  
Images - Each quiz page will have a unique picture, and I like the idea of a random one on the about page.  
Login - Input box and submit button for login.  
Database - The Knights Radiant Orders represent data pulled from the database.  
WebSocket - In realtime while taking the quiz user can see results from current participants.  

### CSS Deliverable
Basically just used bootstrap... wish I had more time to make it my own. Hopefully by the end of the semester I can get more into it.  
Header, footer, and main content body - Made these clear, separated by a thin line  
Navigation elements - The links are clear and in the blue everyone knows to click on  
Responsive to window resizing - Works big or small.  
Application elements - I like the size of the picture on the quiz, though admittedly the spacing of the answers does need work  
Application text content - Consistent and simple fonts all around  
Application images - Images are clear and where they're supposed to be.  

### Javascript Deliverable
For this deliverable, I implemented javascript for users to login, take the quiz, and see results.  
Login - after providing a username, users can press the login button and their username is saved in a database for future use. It then redirects user to the first quiz page.  
Database - Displayed the users username and saves their quiz inputs.
Websocket - There is space for fellow users names to pop up when we get to that (assuming I understand websocket correctly)  
Application Logic - Basically the quiz results are saved and result in a Radiant order. I have not completely decided on how I will decide that based on users inputs, but the questions will vary and are currently being saved.

### Service Deliverable
For this deliverable I added backend endpoints that receives and returns quiz answers.

Node.js/Express HTTP service - done!  
Static middleware for frontend - done!  
Calls to third party endpoints - copied and pasted baby  
Backend service endpoints - Endpoint for the quiz question answer.  
Frontend calls service endpoints - I did this using the fetch function.  

### DB Deliverable
For this deliverable I stored the quiz scores in the database  
MongoDB Atlas database created - done!  
Endpoints for data - My stubbed out endpoints now process the data and send it to Mongo.  
Stores data in MongoDB - done!  

### Login Deliverable
User registration - Creates a new account in the database.
existing user - Stores the quiz answer under the same user if the user already exists.
Use MongoDB to store credentials - Stores both user and their score.
Restricts functionality - You cannot quiz until you're logged in



**Rough Imaging**
![IMG-2809](https://github.com/reevet13/260startup/assets/144943664/b97be0d7-f09e-48b3-aa6c-a5827cee8c0c)
![IMG-2810](https://github.com/reevet13/260startup/assets/144943664/d2732774-380f-4fc5-a3fc-17bbcce64b21)
![IMG-2811](https://github.com/reevet13/260startup/assets/144943664/7f29b14e-7bbb-40a3-93e5-674c6fb51d10)







