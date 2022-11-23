
 import React from 'react';

 import { useFormik } from 'formik';

 import * as Yup from 'yup';

export default function Add(){
    const formik = useFormik({

        initialValues: {
   
          name: '',
   
          poster: '',
   
          rating: '',

          summary: ''
   
        },
   
        validationSchema: Yup.object({
   
          name: Yup.string()
   
            .max(30, 'Must be 30 characters or less')
   
            .required('Required'),
   
          poster: Yup.string()   
            .required('Required'),
   
          rating: Yup.number().positive().required('Required').min(0).max(10),
          summary: Yup.string()
   
            .max(1000, 'Must be 1000 characters or less')
   
            .required('Required')
   
        }),
   
        onSubmit: async values => {
   
          alert("movie added successfully, goto movies");

          await fetch("https://632464475c1b435727a76571.mockapi.io/movies",
          {
            method:'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
              },
          })   
        },
   
      });
   
      return (
   
        <form className='addmovieform' onSubmit={formik.handleSubmit}>
   
          <label htmlFor="name">Movie Name</label>
   
          <input
   
            id="name"
   
            name="name"
   
            type="text"
   
            onChange={formik.handleChange}
   
            onBlur={formik.handleBlur}
   
            value={formik.values.name}
   
          />
   
          {formik.touched.name && formik.errors.name ? (
   
            <div className='error'>{formik.errors.name}</div>
   
          ) : null}
   
    
   
          <label htmlFor="poster">Poster</label>
   
          <input
   
            id="poster"
   
            name="poster"
   
            type="text"
   
            onChange={formik.handleChange}
   
            onBlur={formik.handleBlur}
   
            value={formik.values.poster}
   
          />
   
          {formik.touched.poster && formik.errors.poster ? (
   
            <div className='error'>{formik.errors.poster}</div>
   
          ) : null}
   
    
   
          <label htmlFor="rating">Rating</label>
   
          <input
   
            id="rating"
   
            name="rating"
   
            type="number"
   
            onChange={formik.handleChange}
   
            onBlur={formik.handleBlur}
   
            value={formik.values.email}
   
          />
   
          {formik.touched.rating && formik.errors.rating ? (
   
            <div className='error'>{formik.errors.rating}</div>
   
          ) : null}

<label htmlFor="summary">Summary</label>
   
   <input

     id="summary"

     name="summary"

     type="summary"

     onChange={formik.handleChange}

     onBlur={formik.handleBlur}

     value={formik.values.summary}

   />

   {formik.touched.summary && formik.errors.summary ? (

     <div className='error'>{formik.errors.summary}</div>

   ) : null}
   
    
   
          <button style={{margin:"2rem"}} type="submit">Submit</button>
   
        </form>
   
      );
}