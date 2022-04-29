import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getTour } from "../redux/features/tourSlice";

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => state.tour);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [id]);
  return (
    <>
      <MDBContainer style={{ paddingTop: "100px" }}>
        <MDBCard className="mb-3 mt-2">
          <MDBCardImage
            position="top"
            style={{ width: "500px" }}
            src={tour.imageFile}
            alt={tour.title}
          />
          <MDBCardBody>
            <h3>{tour?.title}</h3>
            <span>
              <p className="text-start"> Created By: {tour.name}</p>
            </span>
            <div style={{ float: "left" }}>
              <span className="text-start">
                {tour && tour.tags && tour.tags.map((tag) => `#${tag}`)}
              </span>
            </div>
            <MDBCardText>
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calender-alt"
                size="lg"
              />
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
              {tour.description}
            </MDBCardText>
            <small className="text-muted">
              {moment(tour.createAt).fromNow()}
            </small>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default SingleTour;
