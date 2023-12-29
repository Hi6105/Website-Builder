import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { infoValidation } from "./infoValidation";
import "bootstrap/dist/css/bootstrap.min.css";

let infoInitialValues = {
  personName: "",
  siteName: "",
  password: "",
};

const Info = ({ show, setShow, handleClose }) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: infoInitialValues,
    validationSchema: infoValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Site Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Website name</Form.Label>
            <Form.Control
              name="siteName"
              type="text"
              value={values.siteName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.siteName}
              </p>
            }
            <Form.Label>Person Name</Form.Label>
            <Form.Control
              name="personName"
              type="text"
              value={values.personName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.personName}
              </p>
            }
            <Form.Label>Person Profile Picture</Form.Label>
            <Form.Control
              name="personName"
              type="file"
              value={values.personName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleSubmit;
            setShow(false);
          }}
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Info;
