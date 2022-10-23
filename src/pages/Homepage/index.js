import React from "react";
import Main from "../../components/main";
import Ourservices from "../../components/ourservice";
import Whyus from "../../components/whyus";
import Testimonial from "../../components/testimonial";
import Sewamobil from "../../components/sewamobil";
import FAQ from "../../components/FAQ";

const Homepage = () => {
  return (
    <div>
      <Main />
      <Ourservices />
      <Whyus />
      <Testimonial />
      <Sewamobil />
      <FAQ />
    </div>
  );
};

export default Homepage;
