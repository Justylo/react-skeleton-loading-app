import React from "react";
import Card from "../components/Card/Card";

import authorImg from "../images/authorImage.jpg";
import mainImg from "../images/0-5616x37442.jpg";

function CardPage(props) {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#e8eced",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <Card
        mainImg={mainImg}
        title="Lorem ipsum imet"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        date="January 31 2022"
        author="Justice Johnson"
        profilePic={authorImg}
      />
    </div>
  );
}

export default CardPage;
