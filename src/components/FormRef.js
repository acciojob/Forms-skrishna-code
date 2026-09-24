import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fullNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(passwordConfirmationRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
          ref={fullNameRef}
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />

        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          ref={passwordConfirmationRef}
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
