import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinSchema } from "../../../utils/helpers/validate";

const SigninForm = ({ currentEmail, signin }) => {
  return (
    <div className="card">
      <div className="p-4 card-body">
        <div className="p-3">
          <Formik
            initialValues={{
              email: currentEmail || "",
              password: "",
            }}
            validationSchema={signinSchema}
            onSubmit={(values, { setSubmitting }) => {
              signin(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="">Email</label>
                  <div className="mb-3 bg-soft-light input-group-lg rounded-lg input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text border-light text-muted">
                        <i className="ri-user-2-line"></i>
                      </span>
                    </div>
                    <Field
                      className="form-control bg-soft-light border-light form-control"
                      type="text"
                      name="email"
                      placeholder="Enter email"
                    />
                    <ErrorMessage
                      className="field-error"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="">Password</label>
                  <div className="mb-3 bg-soft-light input-group-lg rounded-lg input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text border-light text-muted">
                        <i className="ri-lock-2-line"></i>
                      </span>
                    </div>
                    <Field
                      className="form-control bg-soft-light border-light form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage
                      className="field-error"
                      name="password"
                      component="div"
                    />
                  </div>
                </div>
                <div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="form-button waves-effect waves-light btn btn-primary btn-block"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
