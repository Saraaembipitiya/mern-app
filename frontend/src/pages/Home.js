import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTours } from "../redux/features/tourSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import CardTour from "../component/CardTour";
import Spinner from "../component/Spinner";

const Home = () => {
  const { loading, tours } = useSelector((state) => ({ ...state.tour }));
  console.log(`Length: ${tours.length}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTours());
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        allignContent: "center",
      }}
    >
      <MDBRow>
        {tours.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours &&
                tours.map((item, index) => <CardTour key={index} {...item} />)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
