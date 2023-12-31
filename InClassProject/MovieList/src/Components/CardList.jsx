import { useContext } from "react";
import { MovieDataContext } from "../MovieDataContext";
import { BasicCard } from "./Card";
import { Box } from "@mui/material"

export default function CardList() {
  const movies = useContext(MovieDataContext);

  return (
    <>
      {/* {movies.map((movie) => {
            return <BasicCard key= {movie.id} movie={movie} />
        })} */}

      <Box sx={{margin: 10}}>
        {movies.map((movie) => (
          <BasicCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </>
  );
}
