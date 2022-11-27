import React from "react";

import { useFormik } from "formik";

import * as Yup from "yup";

export default function Add() {
  const formik = useFormik({
    initialValues: {
      name: "",

      poster: "",

      rating: "",

      summary: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()

        .max(30, "Must be 30 characters or less")

        .required("Required"),

      poster: Yup.string().required("Required"),

      rating: Yup.number().positive().required("Required").min(0).max(10),
      summary: Yup.string()

        .max(1000, "Must be 1000 characters or less")

        .required("Required"),
    }),

    onSubmit: async (values) => {
      alert("movie added successfully, goto movies");

      await fetch("https://632464475c1b435727a76571.mockapi.io/movies", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

  return (
    <form
      className="bg-slate-500 font-bold text-white addmovieform"
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="name">Movie Name</label>

      <input
        placeholder="Enter movie name"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      {formik.touched.name && formik.errors.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}

      <label htmlFor="poster">Poster</label>

      <input
        placeholder="Enter poster url"
        id="poster"
        name="poster"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
      />

      {formik.touched.poster && formik.errors.poster ? (
        <div className="error">{formik.errors.poster}</div>
      ) : null}

      <label htmlFor="rating">Rating</label>

      <input
        placeholder="Enter rating between 0 - 5"
        id="rating"
        name="rating"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.rating && formik.errors.rating ? (
        <div className="error">{formik.errors.rating}</div>
      ) : null}

      <label htmlFor="summary">Summary</label>

      <input
        placeholder="Enter Summary"
        id="summary"
        name="summary"
        type="summary"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
      />

      {formik.touched.summary && formik.errors.summary ? (
        <div className="error">{formik.errors.summary}</div>
      ) : null}

      <button type="submit" class="bg-sky-500 hover:bg-sky-700 ...">
        Save changes
      </button>
    </form>
  );
}
