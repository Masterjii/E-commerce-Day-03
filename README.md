
## Data Validation in Ecommerce Day-03 

This project demonstrates the implementation of client-side and server-side validation mechanisms to ensure data integrity and reliability during product and review additions.

**Key Features:**

- **Client-side validation:** Utilizes the `required` attribute in HTML forms to enforce basic validation at the browser level.
- **Server-side validation:** Leverages the `joi` package for comprehensive data validation on the server, providing an additional layer of protection against erroneous or incomplete entries.
- **Middleware integration:** Custom middleware functions (`validProduct` and `validReview`) are integrated into relevant routes (`product.js` and `review.js`) to ensure validation occurs before data processing.
- **Error handling view:** An `error.ejs` file in the `views` directory displays user-friendly error messages in case of validation failures or other errors during data processing.

**Project Structure:**

```
├── client/
│   ├── ...   // Client-side code with form validations
├── server/
│   ├── schema.js // Joi validation schema definitions
│   ├── middleware.js // Custom middleware for server-side validation
│   ├── routes/
│       └── product.js // Product routes, including validProduct middleware
│       └── review.js // Review routes, including validReview middleware
│   ├── views/
│       └── error.ejs // Error template for displaying validation errors
└── ...   // Other project files
```

**Implementation Summary:**

1. **Client-side Validation:**
   - Added the `required` attribute to necessary form fields.
   - Disabled default browser validation using `novalidate` for custom handling.

2. **Server-side Validation with Joi:**
   - Installed `joi` (npm i joi).
   - Defined validation schemas in `schema.js`.
   - Created `validProduct` and `validReview` middleware to validate incoming data using Joi.

3. **Middleware Integration:**
   - Utilized `validProduct` in `product.js` for product data validation.
   - Employed `validReview` in `review.js` for review data validation.

4. **Error Handling View:**
   - Created an `error.ejs` template in the `views` directory.
   - Passed validation errors (or other error information) to this template in case of failures.
   - Rendered the `error.ejs` template to display user-friendly error messages.

**Benefits:**

- Enhanced data integrity: Both client-side and server-side validation significantly reduce the risk of invalid or incomplete data entries.
- Improved user experience: Client-side validation provides immediate feedback to users, preventing unnecessary submissions.
- Server-side protection: Even if client-side validation is bypassed, server-side validation guarantees data integrity.
- Flexibility: Joi schemas allow for customizable and maintainable validation rules.
- User-friendly error handling: Error messages provide specific feedback to users on how to correct data issues.

**Future Considerations:**

- Explore advanced validation techniques, such as regular expressions or more specific data format checks.
- Implement error handling to provide user-friendly messages in case of validation failures.
- Consider using a validation library specifically designed for Node.js environments (e.g., express-validator).

**Getting Started:**

1. Clone the repository: `git clone https://github.com/Masterjii/E-commerce-Day-03`.
2. Install dependencies: `npm install` (or `yarn install`).
3. Run the server: `npm start` (or `yarn start`).
4. Access the application in your browser (usually at `http://localhost:8080`).

Connect me on LinkedIn - https://www.linkedin.com/in/balram-kusharam/
