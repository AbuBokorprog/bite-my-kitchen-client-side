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
        <p>
          Q: Tell us the differences between uncontrolled and controlled
          components.
        </p>
        <p className="my-3">
          Ans: differences between uncontrolled and controlled components are:{" "}
          <br />
          State management: Uncontrolled components manage their own state,
          while controlled components have their state managed by an external
          entity.
          <br /> Complexity: Uncontrolled components are simpler to implement
          but can be more error-prone, while controlled components are more
          robust and maintainable, especially for complex forms and inputs.{" "}
          <br />
          Flexibility: Uncontrolled components offer more flexibility to the
          user, while controlled components offer more control to the developer.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
