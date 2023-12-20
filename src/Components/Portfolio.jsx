/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/table.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Article Newspaper📜",
    description:
      "Collaboration to create a beginner friendly article to help explain about the techstack web apps and tooling to get started.",
    url: "https://hashnode.com/@roshniii06",
  },
  {
    title: "About Me | Portfolio👧",
    description:
      "MLSA • #Include<her>Cohert4.0 • SIH'23 Campus Qualifier • Linkedin Certified Marketing Insider • GSSoC'23 • React Native • Open Source Contributor",
    url: "https://linktr.ee/roshniikri",
  },
  {
    title: "Project Work🚀",
    description:
      "Created some projects which builds the basic concepts and started with tech stack tools. Includes my experience and design abilities.",
    url: "https://github.com/RSN601KRI",
  },
  {
    title: "Certifications & Achievements🙌",
    description:
      "Here's some certifications and Honors. I've consistently pursued a balance between academics and extracurriculars.",
    url: "https://www.linkdin.com/in/roshnikumari1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
