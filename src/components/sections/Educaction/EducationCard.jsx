import React from "react";
import Icons from "../../Others/IconProvider";

function EducationCard({ data }) {
  const { degree, institution, period, status, grade, logos } = data;

  return (
    <div className="education-card">
      <div className="education-content">
        <h3>{degree}</h3>
        <p className="institution">{institution}</p>
        <p className="period">{period}</p>
        {status && <p className="status">{status}</p>}
        {grade && <p className="grade">{grade}</p>}
      </div>

      <div className="education-logos">
        {logos?.map((logo, index) => {
          const Icon = Icons[logo];
          return Icon ? <Icon key={index} className="education-icon" /> : null;
        })}
      </div>
    </div>
  );
}

export default EducationCard;
