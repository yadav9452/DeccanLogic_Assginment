import React from "react";
import { GiLovers } from "react-icons/gi";

const Section3 = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(65,122,255)",
        padding: "10px 20px 180px 20px",
        color: "rgb(255,255,255)",
      }}
    >
      <div style={{ width: "50%", margin: "auto" }}>
        <h1 style={{ fontSize: "2rem" }}>BootStrap is Responsive</h1>
        <p>
          Install Bootstrap’s source Sass and JavaScript files via npm,
          RubyGems, Composer, or Meteor.
        </p>
        <div style={{ display: "flex", gap: "100px", marginTop: "-25px" }}>
          <p>
            Bootstrap utilizes Sass for a modular and customizable architecture.
            Import only the components you need, enable global
          </p>
          <p>
            Bootstrap utilizes Sass for a modular and customizable architecture.
            Import only the components you need, enable global{" "}
          </p>
        </div>
        <GiLovers size={"6rem"} />
      </div>
    </div>
  );
};

export default Section3;
