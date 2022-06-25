import React from "react";

import images from "../../constants/images";
import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  {
    title: "Frontend development",
    description: "I am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Backend development",
    description: "I am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "Full Stack development",
    description: "I am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Web design",
    description: "I am a good web developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text app__about-heading">
        I know <span>good website</span> <br />
        means <span>good business.</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h3 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
