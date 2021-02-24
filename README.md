Available Routes:

*hello



1. Register
    []route: https://fittness.herokuapp.com/api/auth/register
    []method: post
    []takes: {
            "username": [string] (unique),
            "password": [string],
            "type": [string] ('client' or 'instructor')
            }
    []returns: {message: 'username, password and type     required'}
2. Login
    []route: https://fittness.herokuapp.com/api/auth/register
    []method: post
    []takes: {
            "username": [string], 
            "password": [string]
            }
    []returns: {
              message: `Welcome [username]!`,
              token: token
              }
3. View all Classes
    []route: https://fittness.herokuapp.com/api/classes
    []method: get
    []takes {
            "name": [string] (required),
            "start_time": [string] (required),
            "duration": [string],
            "intensity_level": [string],
            "location": [string],
            "attendees": [integer],"max_attendees": [integer]
           }
     []returns: an array with all classes.
     []Notes: Make sure to use an 'axios with auth function'. The token must be in the header under "authorization" for the call to be successful. No need to use the word "bearer".
4. Add New Class
    []route: https://fittness.herokuapp.com/api/classes
    []method: post
    []takes {
            "user_id": [integer] (required, this is the id for the instructor)
            "name": [string] (required),
            "start_time": [string] (required),
            "duration": [string],
            "intensity_level": [string],
            "location": [string],
            "attendees": [integer],"max_attendees": [integer]
           }
     -returns: {message: 'class added'}
     -Notes: Make sure to use an 'axios with auth function'. The token must be in the header under "authorization" for the call to be successful. No need to use the word "bearer". The person creating the class will automatically be added to the class. 
4. Delete a class
    -route: https://fittness.herokuapp.com/api/classes
    -method: delete
    -takes {
            "id": [integer] (required)
           }
     -returns: {message: 'class deleted'}
     -Notes: Make sure to use an 'axios with auth function'. The token must be in the header under "authorization" for the call to be successful. No need to use the word "bearer".
5. Add a User to an existing class.
    -route: https://fittness.herokuapp.com/api/classes/attendees
    -method: post
    -takes {
            "user_id": [integer] (required),
            "class_id": [integer] (required)
           }
     -returns: {message: 'Added to Class'}
     -Notes: Make sure to use an 'axios with auth function'. The token must be in the header under "authorization" for the call to be successful. No need to use the word "bearer".
6. View All Attendees of a Class
    -route: https://fittness.herokuapp.com/api/classes/attendees
    -method: get
    -takes {
            "class_id": [integer] (required)
           }
     -returns: an array of all attendees (username and user type)
     -Notes: Make sure to use an 'axios with auth function'. The token must be in the header under "authorization" for the call to be successful. No need to use the word "bearer".
    
