import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { loginValidation } from "../../utilities/schema/loginValidation";

let loginInitialValues = {
  email: "",
  password: "",
};

const Login = ({ show, setShow, handleClose }) => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  /*const [loginDetails, setloginDetails] = useState({});
  const [signupDetails, setsignupDetails] = useState({});
  validateYupSchema = loginValidation;
  const handleChange = (name, e) => {
    const { value } = e.target;
    state === "login"
      ? setloginDetails((prev) => {
          return { ...prev, [name]: value };
        })
      : setsignupDetails((prev) => {
          return { ...prev, [name]: value };
        });
  };

  useEffect(() => {
    console.log(loginDetails);
    console.log(signupDetails);
  }, [loginDetails, signupDetails]);

  const handleSubmit = () => {};*/

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.email}
              </p>
            }
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            {
              <p className="form-error" style={{ color: "red" }}>
                {errors.password}
              </p>
            }
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;

/*import React from "react";

export const modal = () => {
  const [loginDetails, setloginDetails] = usestate({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { email, value } = e.target;
    setloginDetails((prev) => {
      return { ...prev, [email]: value };
    });
  };

  const handleSubmit = () => {};

  return (
    <form>
      <h3>Name :</h3> <input type="text"></input>
    </form>
  );
};*/
