# React SPA Task Manager

## 1. How to set up and run the project locally

To run the project locally, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/chrismarkoulis/task-manager-spa.git
```

2. **Navigate to the project directory:**
```bash
cd task-manager-spa
```

3. **Install dependencies:** 
Ensure that you have Node.js and npm installed. Then, run the following command to install all necessary dependencies:
```bash
npm install
```

4. **Start the development server:**
```bash
npm start
```

5. **Run tests:**
```bash
npm test
```
## 2. Libraries and tools used

- React: Used as the main library for building the user interface due to its component-based architecture, efficient rendering, and wide community support.

- Styled Components: Used for styling React components in a modular and reusable way.

- Jest: Chosen for testing due to its simplicity, ease of integration with React, and powerful mock functionality.

- React Testing Library: Chosen for testing React components in a way that mimics how users would interact with them, promoting better testing practices.

- React-Beautiful-DND: Used for drag-and-drop functionality, as it simplifies complex UI interactions and provides accessibility support.

- Axios: Used for making API requests due to its simplicity and promise-based interface for handling asynchronous code.

## 3. Architectural decisions and optimizations

- Component-based architecture: React's component-driven approach was utilized to create reusable, modular components. This helps in maintaining a clean and manageable codebase.

- Custom hooks: Hooks like useFetch, useLocalStorage, and useDragAndDrop were created for encapsulating logic that can be reused across multiple components, improving code readability and maintainability.

- State management via Context API: The React Context API was chosen for global state management, providing a simple and efficient way to pass data and actions through the component tree without prop drilling.

- Drag-and-Drop functionality: React-Beautiful-DND was chosen for drag-and-drop functionality due to its ease of use and built-in accessibility features, allowing for a smoother user experience.

- Error boundaries and loading states: Proper error handling and loading states were implemented in components and hooks to ensure a better user experience and more robust application behavior.

## 4. Limitations and future improvements

- Limited accessibility features: While basic accessibility features were implemented, additional work could be done to make the app more accessible, such as implementing proper ARIA roles and testing.

- Error handling: Although basic error handling is in place for API requests and local storage, more granular error messages and feedback could be added to improve the user experience.

- Optimizing performance: Performance optimizations could be made, especially with large datasets, by introducing lazy loading, pagination, or memoization in specific components or hooks.

- Testing coverage: While tests were written for core components and hooks, further test coverage for edge cases and interactions would make the application more robust.

- UI improvements: Future work could include enhancing the user interface, improving the mobile responsiveness, and adding more visual cues or animations to make the app more engaging.

