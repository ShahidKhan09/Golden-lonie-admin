// import logo from './logo.svg';
import '../../App.scss';
import React, { useState, useEffect } from "react";
import Banner from './main-banner/Banner.js';


function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Banner />
    </>
  );
}

export default Landing;