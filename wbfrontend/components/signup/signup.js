import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { signupValidation } from "../../src/app/utilities/schema/signupValidation";
import "bootstrap/dist/css/bootstrap.min.css";

let signupInitialValues = {
  firstName: "",
  lastName: "",
  signupEmail: "",
  signupPassword: "",
  signupConfirmPassword: "",
};

const SignUp = ({ show, setShow, handleClose }) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder=""
              autoFocus
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.firstName}
              </p>
            }
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder=""
              autoFocus
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.lastName}
              </p>
            }
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="signupEmail"
              type="email"
              placeholder="name@example.com"
              autoFocus
              value={values.signupEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.signupEmail}
              </p>
            }
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="signupPassword"
              type="password"
              placeholder=""
              autoFocus
              value={values.signupPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.signupPassword}
              </p>
            }
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              name="signupConfirmPassword"
              type="password"
              placeholder=""
              autoFocus
              value={values.signupConfirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.signupConfirmPassword}
              </p>
            }
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          ></Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
