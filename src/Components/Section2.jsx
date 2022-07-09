import React from "react";
import { MdPhotoCamera } from "react-icons/md";
const Section2 = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(255,255,255)",
        padding: "10px 20px 50px 20px",
        width: "60%",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>What is BootStrap</h1>
      <p>
        Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems,
        Composer, or Meteor. Package managed installs don’t include
        documentation or our full build scripts. You can also use our npm
        template repo to quickly generate a Bootstrap project via npm. When you
        only need to include Bootstrap’s compiled CSS or JS, you can use
        jsDelivr. See it in action with our simple quick start, or browse the
        examples to jumpstart your next project. You can also choose to include
        Popper and our JS
      </p>
      <MdPhotoCamera size={"6rem"} />
      <p style={{ marginTop: "-15px", fontSize: "0.8rem" }}>Figure 1.21</p>
    </div>
  );
};

export default Section2;
