## User Authentication and Authorization with Bearer Token

# Story App : 
# Task Description:
-- Follow the MVC pattern for the folder structure.
-- Using Mongoose for the MongoDB connection
  # UserRegistration route
  -- In this, User model is created to collect the information from the user like username, email and password.
  -- After collecting the information from the user, UserRouter is responsible for handling the userRegistration. 
    -- In this it checks if the user's email id is not exist in the database.
    -- On entering the password, it was encrypt and then it was stored in the database.
    -- On successful registration, it shows the message "User Registered Successfully".
  # Login Routes
    -- It checks whether the email id is entered correctly
    -- It checks password entered by the user with the password decrypt that get from the database.
    -- After validation, the user can able to login.
    --On sucessfully login, it shows message user logged in successfully.

    --On failure,it shows message like unauthorized/ Invalid credentials.
  # Bearer token:

  In this JWT token is generated and it is send along with the login...This token is used for every response that we are using after the login.

  #   Auth Middleware:
   This middleware is act before we send any response. In this first we check whether it has token, then the token is valid or not using JWT.verify();
   Once the token is valid, the control is passed to the response.

  # User's Information:
  In this project, we create  myProfile route that is used to get all the information about the user who is logged in.

  # # # #  Postman Documentation Link:

  https://documenter.getpostman.com/view/585022/2sAYXFhGqP
  

            Thank you