# Multi Step Form


This project is a multi-step form application built using React.js, Tailwind CSS for styling, Material-UI for UI components, and Framer Motion for animations. It features form validation, local storage to prevent data loss, navigation buttons for ease of use, and reusable components for modularity.

## *Technologies Used*
- React.js: Frontend JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Material-UI: React components library implementing Google's Material Design.
- Framer Motion: Animation library for React applications.
- Jest : testing react component.
  
## *Features*
- Multi-step Form: Allows users to fill out information across multiple steps.
- Form Validation: Validates input fields to ensure data integrity before submission.
- Local Storage: Stores form data in the browser's localStorage to prevent loss on page refresh.
- Responsive Design: Utilizes Tailwind CSS for responsive and mobile-friendly layouts.
- Reusable Components: Components are designed for reusability and maintainability.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ayush-singh05/multi-step-form.git
    cd mylti-step-form
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

    The application should now be running on [http://localhost:5173](http://localhost:5173).

## Project Structure

```bash
my-react-app/
├── public/
│  
├── src/
│   ├── components/
│   │   ├── Form.js
│   │   ├── PersonalInfo.js
│   │   ├── AddressInfo.js
│   │   └── Confirmation.js
|   ├── functions/
|   |   ├── addToLocal.js
|   |   ├── getAllValues.js
|   |   ├── GetCurrentStep.js
|   |   ├── removeStepFromLocal.js
|   |   ├── validateForm.js
|   |    
│   ├── App.jsx
│   ├── main.jsx
│   |── App.css
│   |── index.css
├── __tests__/
│   ├── component/
|   |   ├── personalInfo.test.js
│   |── function/
|   |   ├── formValidation.test.js
├── README.md
└── package.json
