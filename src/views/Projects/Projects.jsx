import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlayCircle, AiOutlineGithub } from "react-icons/ai";

import "./Projects.scss";

import { filter, portfolios } from "../../assets/data";

import AppWrapper from "../../components/AppWrapper/AppWrapper";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item.title);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item.title === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((project) => project.type.includes(item.title))
        );
      }
    }, 500);
  };

  useEffect(() => {
    setProjects(portfolios);
    setFilterProject(portfolios);
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span>
      </h2>

      <div className="projects__filter">
        {filter.map((item) => (
          <div
            key={item.id}
            onClick={() => handleWorkFilter(item)}
            className={`projects__filter-item  app__flex p-text ${
              activeFilter === item.title ? "item-active" : ""
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className="projects__list"
      >
        {filterProject.map((item) => (
          <motion.div
            key={item.id}
            className="projects__list-item app__flex"
            whileInView={{ scale: [0, 1] }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="projects__list-img app__flex">
              <img src={item.picture} alt={item.title} title={item.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                  staggerDirection: 0.5,
                }}
                className="projects__list-hover app__flex"
              >
                <a href={item.demoLink} target="_blank" rel="noreferer">
                  <motion.div
                    whileInView={{ scale: [0.9, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiOutlinePlayCircle />
                  </motion.div>
                </a>

                <a href={item.codeLink} target="_blank" rel="noreferer">
                  <motion.div
                    whileInView={{ scale: [0.9, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiOutlineGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="projects__list-info app__flex">
              <h4 className="bold-text ">{item.title}</h4>
              <p className="p-text">{item.description}</p>
              <div className="projects__list-type app__flex">
                <p className="p-text">{item.type[0]}</p>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

// export default AppWrapper(Projects, "projects");

export default AppWrapper(
  MotionWrapper(Projects, "projects"),
  "projects",
  "app__whitebg"
);
