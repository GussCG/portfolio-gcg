import React from "react";
import { education } from "../../../constants/education";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="education-header">
          <h1>Educación</h1>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <EducationCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
