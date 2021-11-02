// API: Application Programming Interface

// - Contract provided by one piece of software to another
// - Structured request and response
// - We just worked with an API that takes a request and 
// responds with jokes

// REST APIS
// Representational State Transfer

// - Architecture style for designing networked applications
// - Relies on a stateless, client-server communication
// protocol, almost always HTTP 
// - Treats server objects as resources that can be created
// or destroyed
// - Can be used by virtually any programming language
// - All APIs have their own rules and structure

// ** // ** // ** // ** // ** // ** // ** // ** // ** // **
// DIFFERENT TYPES OF REQUESTS
// - GET: Retrieve data from a specified resource
// - POST: Submit data to be processed to a specified resource
// - PUT: Update a specified resource
// - DELETE: Delete a specified resource

// - HEAD: Same as get but does not return a body (returns header)
// - OPTIONS: Returns the supported HTTP methods
// - PATCH: Update partial resources
// ** // ** // ** // ** // ** // ** // ** // ** // ** // **

// When working with API's, you will have something called
// ENDPOINTS: URLs that you access to do certain things

// Examples of API requests

// GET     https://someurl.com/api/users    //GET all users
// GET     https://someurl.com/api/users/1  // GET single user
// POST    https://someurl.com/api/users    // Add user
// PUT     https://someurl.com/api/users/1  // Update user
// DELETE  https://someurl.com/api/users/1  // Delete user

// POST PUT AND DELETE send data with your request to know which post to update

