# Products List App
## Description

The goal of this task was to create SPA application to display paginated list of products. 

Products are fetched from API endpoint [https://reqres.in/api/products](https://reqres.in/api/products). Application includes text input, which allows the user to `filter results` by `id`. Input accept only numbers. Below input there is a paginated table displaying the properties: `id, name and year`. The color of each row is taken from the `color` property. 

Pagination and filtering are implemented in address URL, so users can copy and paste URL to other browser window and it shows the filtered results.

**Live preview:** [https://visionary-valkyrie-3586b0.netlify.app](https://visionary-valkyrie-3586b0.netlify.app/)

**Tech stack**:
 - React
 - Redux Toolkit
 - react-router
 - Bootstrap
 - axios