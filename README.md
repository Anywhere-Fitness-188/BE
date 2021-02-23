Available Routes

1. Register
    route: https://fittness.herokuapp.com/api/auth/register
    method: post
    takes: {
            "username": [string] (unique),
            "password": [string],
            "type": [string] ('client' or 'instructor')
            }
    returns: {message: 'username, password and type     required'}
2. Login
    route: https://fittness.herokuapp.com/api/auth/register
    method: post
    takes: {
            "username": [string] 
            "password": [string],
            }
    returns: {
              message: `Welcome [username]!`,
              token: token
              }