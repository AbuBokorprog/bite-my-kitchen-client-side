import React from "react";

const Blogs = () => {
  return (
    <div className="container px-20">
      <div>
        <img
          className="rounded-xl"
          src="https://img.freepik.com/premium-photo/woman-hands-using-laptop-computer-from_35674-2838.jpg?w=1380"
          alt=""
        />
      </div>
      <div className="my-20">
        <p className="text-xl font-medium">
          Q: Tell us the differences between uncontrolled and controlled
          components.
        </p>
        <p className="my-3">
          Ans: differences between uncontrolled and controlled components is:
          <br />
          State management: Uncontrolled components manage their own state,
          while controlled components have their state managed by an external
          entity.
          <br /> Complexity: Uncontrolled components are simpler to implement
          but can be more error-prone, while controlled components are more
          robust and maintainable, especially for complex forms and inputs.
          <br />
          Flexibility: Uncontrolled components offer more flexibility to the
          user, while controlled components offer more control to the developer.
        </p>
        <p className="text-xl font-medium">
          Q: How to validate React props using PropTypes?
        </p>
        <p className="my-3">
          Ans: React provides a library called PropTypes that you can use to
          validate props passed to your components. <br />
          <br />
          How to use:
          <br />
          1. install the PropTypes package. <br />
          2. import PropTypes into your component file. <br />
          3. Define the propTypes for your component by creating a static
          propTypes object inside your component class. <br />
        </p>
        <p className="text-xl font-medium">
          Q: Tell us the difference between nodejs and express js.
        </p>
        <p className="my-3">
          Ans: Node.js is a server-side JavaScript runtime built on Chrome's V8
          JavaScript engine. It allows developers to write server-side code in
          JavaScript and execute it on the server-side, allowing for faster and
          more efficient server-side development.
          <br />
          Express.js is a web application framework built on top of Node.js that
          provides a set of features for building web applications and APIs. It
          simplifies the process of writing server-side code and provides a
          consistent interface for handling HTTP requests and responses.
        </p>
        <p className="text-xl font-medium">
          Q: What is a custom hook, and why will you create a custom hook?
        </p>
        <p className="my-3">
          Ans: A custom hook in React is a JavaScript function that allows you
          to reuse stateful logic between components. Custom hooks are a way to
          abstract away complex logic and make it reusable across multiple
          components, leading to more maintainable and reusable code.
          <br />
          <br />
          Reason of use Custom hook: <br />
          1. Abstract away complex stateful logic that is used by multiple
          components in your application. <br />
          2. Create a reusable API for components to consume. <br />
          3. Improve the readability and maintainability of your code by
          separating concerns and reducing duplication. <br />
          4. Encapsulate complex logic or side effects, such as fetching data or
          manipulating the DOM, so that it can be reused across multiple
          components without duplicating the code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
