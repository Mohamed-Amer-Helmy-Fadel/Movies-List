import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PageComponent from "./PageComponent";
const MoviesList = ({ movies,getAllPages,pagesCount }) => {
  return (
    <Row className="mt-3">
      {
        movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h1 className="text-center">...لا يوجد افلام</h1>
      )
    }
    {movies.length >=1 ? (<PageComponent getAllPages={getAllPages} pagesCount={pagesCount}/>) : null

    }
    </Row>
  );
};

export default MoviesList;
