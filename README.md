# Breef documentation

Single page application created with React where users can Register, Login, Create, Edit and Like/Dislike resources depending on the authorization they have.

Unregistered Visitors can access the pages: Home, Car Catalog, Details.

If the Visitor registers, he'll become User. The User can access the pages: Home, Car Catalog, Details, Create ad, My added cars, Edit, Delete (Edit and Delete only if the User is the creator of the car). If you are not the owner you may like and dislike the ad.

## Project architecture

- All components are grouped in the components folder. 
- Context folder 
  - AuthContext where all the information about the currently logged in user is stored and passed where needed.
  - Notification - used to call notifications
- Hoc - folder with higher order components used to implement route guarding for guests/users and non-owners of a selected resource.
- Hooks - persist data on page refresh
- Services related to the resources
- Validation folder - input data validations

### Build with:
- IDE:
  - Visual Studio Code
- Front-End Framework:
  - ReactJS library
- Database:
  - MongoDB
- Back-End:
  - Node.js
- Front-End:
  - ReactJS library
  - JavaScript
- Markup Languages:
  - HTML5
  - CSS3

