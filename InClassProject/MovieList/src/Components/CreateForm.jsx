import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
// import { json } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      synopsis,
      image,
    };

    console.log(data);

    fetch("http://localhost:3000/api/addMovie", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.result);
      });

      navigate('/card')
    
    setTitle("");
    setSynopsis("");
    setImage("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        minWidth: 350,
        backgroundColor: "white", // added because default background color is super dark
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name="title"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        name="synopsis"
        label="Synopsis"
        variant="outlined"
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        name="image"
        label="Image"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
