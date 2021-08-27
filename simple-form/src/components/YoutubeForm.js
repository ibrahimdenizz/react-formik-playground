import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log("Form values", formik.values);

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
