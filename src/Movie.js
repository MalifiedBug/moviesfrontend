import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useFormik } from "formik";

import * as Yup from "yup";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Movie({ movie, index }) {
  const [expanded, setExpanded] = React.useState(false);
  const [fav, setFav] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: movie.name,

      poster: movie.poster,

      rating: movie.rating,

      summary: movie.summary,
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
      alert("movie updated");

      await fetch(
        `https://632464475c1b435727a76571.mockapi.io/movies/${movie.id}`,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(handleClose())
        .then(navigate("/tictactoe"));
    },
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={12}>
      <Card id={index} sx={{ width: 250 }}>
        <CardMedia
        className="h-72"
          component="img"
          image={movie.poster}
          alt={movie.name}
        />
        <CardContent>
          <Typography
            className="movietitle"
            variant="body2"
            color="text.secondary"
          >
            <h3>{movie.name}</h3>
            <h3>⭐{movie.rating}</h3>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setFav(!fav)}
            aria-label="add to favorites"
          >
            <FavoriteIcon color={fav ? "error" : "disabled"} />
          </IconButton>

          <IconButton onClick={handleClickOpen} aria-label="delete">
            <EditIcon />
          </IconButton>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="self-center">Edit Movie</DialogTitle>
            <DialogContent className="">
              <form className="grid rounded-lg grid-cols-1 gap-5 justify-items-center" onSubmit={formik.handleSubmit}>
                <label className="" htmlFor="name">Movie Name</label>

                <input
                className="bg-gray-300 rounded-lg p-2"
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

                <label className="" htmlFor="poster">Poster</label>

                <input
                className="bg-gray-300 rounded-lg p-2"
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

                <label className="" htmlFor="rating">Rating</label>

                <input
                className="bg-gray-300 rounded-lg p-2"
                  id="rating"
                  name="rating"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rating}
                />

                {formik.touched.rating && formik.errors.rating ? (
                  <div className="error">{formik.errors.rating}</div>
                ) : null}

                <label className="" htmlFor="summary">Summary</label>

                <input
                className="bg-gray-300 rounded-lg p-2"
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

                <Button
                  variant="outlined"
                  style={{ margin: "2rem" }}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <IconButton
            onClick={() => {
              navigate(`/movies/${movie.id}`);
            }}
            color="error"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{textAlign:"left"}} paragraph>{movie.summary}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  );
}
