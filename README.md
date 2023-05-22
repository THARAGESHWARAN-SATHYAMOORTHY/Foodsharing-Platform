IIT Bombay Internship Regarding 
# Food Sharing Platform

The Food Sharing Platform is a web application that aims to connect individuals and businesses with surplus food to those in need. The platform provides a convenient way for users to donate excess food items or request meals, facilitating the coordination, pickup, and delivery of the food. It also incorporates features like nutritional information and allergy alerts to ensure the safety and suitability of the donated food.

## Features

- **Donation:** Users can easily create listings for surplus food items they wish to donate. They can provide details such as the type of food, quantity, expiration date, and pickup location.
- **Request:** Users in need of meals can create requests specifying their dietary preferences, allergies, and location. 
- **Coordination:** The platform provides a messaging system to facilitate communication between donors and recipients. Users can arrange pickup details, clarify any questions, and coordinate the delivery of food.
- **Nutritional Information:** Donors can provide nutritional information for their food items, enabling recipients to make informed decisions based on their dietary requirements.
- **Allergy Alerts:** Users can specify their allergies or dietary restrictions, and the platform will notify them if a donation or request contains any potential allergens.
- **User Profiles:** Users can create and manage their profiles, providing information such as their location, dietary preferences, and allergies. This helps personalize the donation and request matching process.

## Technologies Used

- Backend: Django, Django REST Framework
- Frontend: React
- Database: MySQL
- Other Technologies: HTML, CSS, JavaScript, Axios (for API requests)

## Installation and Setup

1. Clone the repository: `git clone <repository-url>`
2. Install the necessary dependencies for the backend and frontend.
3. Set up the PostgreSQL database and configure the database settings.
4. Run the backend server: `python manage.py runserver`
5. Run the frontend development server: `npm start`
6. Access the application in your browser at `http://localhost:3000`

## Challenges faced

1. **React Configuration**: Configuring React and its dependencies correctly can be a challenge, especially when dealing with conflicting packages or outdated versions. It's important to ensure that the required dependencies are installed and properly configured.

2. **React Router**: Setting up routes and handling navigation within the React application can be tricky. Common issues include incorrect route configuration, rendering components outside of `<Routes>`, or using `<Route>` directly instead of wrapping it within `<Routes>`.

3. **React Components**: Errors related to rendering components, such as the `Route` component, can occur due to incorrect usage or improper nesting within the component tree. It's important to follow the correct structure and hierarchy while rendering components.

4. **Module Dependencies**: Errors related to missing or conflicting module dependencies can occur during both frontend (React) and backend (Django) development. These issues can be resolved by ensuring that the required packages are installed and configured correctly, and that there are no conflicting versions or dependencies.

5. **Backend Configuration**: Configuring the backend (in this case, Django) properly is crucial for the overall functionality of the food sharing platform. Common issues include database configuration errors, missing or incorrect module installations, and improper API endpoint setup.

6. **Server-Side Errors**: Server-side errors can occur when handling requests and processing data. These errors can be related to database connectivity, improper API endpoint setup, or missing libraries such as `mysqlclient` in the case of MySQL database integration.

7. **Network Requests**: Errors related to network requests, such as failed resource loading or 404 responses, can occur when interacting with APIs or fetching data from the server. These errors can be caused by incorrect URLs, missing or incorrect request parameters, or server-side issues.

When creating a food sharing platform, it's important to thoroughly test the application, handle errors gracefully, and troubleshoot any issues that arise. This may involve checking logs, debugging code, and ensuring proper configuration and dependencies on both the frontend and backend sides.

## Future Enhancements

- Integration with third-party delivery services for seamless pickup and delivery.
- Implementing a rating and review system to establish trust and reputation among users.
- Social media sharing features to raise awareness and encourage more donations.
- Gamification elements to incentivize and reward users for their contributions to reducing food waste.

## Contributor

email : s.tharageshwaran6343000@gmail.com

Feel free to customize and expand this project.
