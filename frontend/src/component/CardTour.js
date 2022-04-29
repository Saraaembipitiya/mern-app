import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const CardTour = ({ imageFile, description, title, name, tags, _id }) => {
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  return (
    <MDBCardGroup>
      <MDBCard
        className="h-100 mt-2 d-sm-flex"
        style={{ maxWidth: "20rem", paddingTop: "100px" }}
      >
        <MDBCardImage
          src={imageFile}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div className="top-left">{name}</div>
        <span className="text-start tag-card">
          {tags.map((item) => `#${item}`)}
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardTitle className="text-start">
            {excerpt(description)}
            <Link to={`/tour/${_id}`}>Read More</Link>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardTour;
