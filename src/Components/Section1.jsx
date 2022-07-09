import React from "react";
import { FiSettings } from "react-icons/fi";
import { MdPersonPin } from "react-icons/md";
import { MdTabletMac } from "react-icons/md";

const Section1 = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(65,122,255",
        padding: "1px 20px 50px 20px",
        color: "rgb(255,255,255)",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>Sectionalize</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "rgb(65,122,255)",
          gap: "30px",
          padding: "10px 20px 90px 20px",
        }}
      >
        <div style={{ width: "30%" }}>
          <h2>Robust</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dolore. Excepturi sed neque facilis, expedita dolorem molestiae
          </p>
          <FiSettings size={"4em"} />
        </div>

        <div style={{ width: "30%" }}>
          <h2>Simple</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dolore. Excepturi sed neque facilis, expedita dolorem molestiae
          </p>
          <MdPersonPin size={"4em"} />
        </div>
        <div style={{ width: "30%" }}>
          <h2>Clean</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            dolore. Excepturi sed neque facilis, expedita dolorem molestiae
          </p>
          <div></div>
          <MdTabletMac size={"4em"} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
