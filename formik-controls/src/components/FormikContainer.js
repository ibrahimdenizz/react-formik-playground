import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit"></button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
