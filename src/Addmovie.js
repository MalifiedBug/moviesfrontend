import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import * as Yup from "yup";
import { NavigationSharp } from "@mui/icons-material";

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

    onSubmit: async (values, {resetForm}) => {
      await fetch("https://632464475c1b435727a76571.mockapi.io/movies", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(resetForm());
      setTimeout(navigate("/movies"),5000)
    },
  });

  const navigate = useNavigate()

  return (
    <form
      className="bg-slate-400 rounded-lg font-bold text-white addmovieform"
      onSubmit={formik.handleSubmit}
    >
      <label className="text-indigo-700" htmlFor="name">Movie Name</label>

      <input
      className="text-black rounded-lg p-2 h-10"
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

      <label className="text-indigo-700" htmlFor="poster">Poster</label>

      <input
      className="text-black rounded-lg p-2 h-10"
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

      <label className="text-indigo-700" htmlFor="rating">Rating</label>

      <input
      className="text-black rounded-lg p-2 h-10"
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

      <label className="text-indigo-700" htmlFor="summary">Summary</label>

      <input
      className="text-black rounded-lg p-2 h-10"
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

      <button type="submit" class="bg-sky-500 rounded-lg text-black hover:bg-sky-700 ...">
        Save changes
      </button>
    </form>
  );
}
