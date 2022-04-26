import React, { useState } from "react";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const logout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand href="/" style={{ color: "#606080" }}>
          Touropedia
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
        />
        <MDBIcon icon="bars" fas />
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="md-2 md-lg-0" />
          {user?.result?._id && (
            <h5
              style={{
                marginRight: "40px",
                marginTop: "22px",
                color: "#606080",
              }}
            >
              logged in as : {user.result.name}
            </h5>
          )}
          <MDBNavbarItem>
            <MDBNavbarLink href="/">
              <p className="header-text">Home</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          {user?.result?._id && (
            <>
              <MDBNavbarItem>
                <MDBNavbarLink href="/addTour">
                  <p className="header-text">Add Tour</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/dashboard">
                  <p className="header-text">Dashboard</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </>
          )}

          {user?.result?._id ? (
            <>
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={logout}>
                    Logout
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </>
          ) : (
            <>
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
