//import React from "react";
import "../components/Education.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const educationData = [
  {
    course: "B.Tech in Computer Science",
    school: "PES University",
    marks: "CGPA: 7.41/10",
    desc: "One of the top engineering colleges in Karnataka, known for research and industry exposure.",
    img: "/assets/PESU-EC-Campus.jpg",
    subjects: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Python",
      "Java",
      "Web Development- MERN",
      "C and C++",
      "Cloud Computing",
      "Software Engineering",
      "Machine Learning",
      "Data Analytics",
      "System Design"
    ]
  },
  {
    course: "Pre-University (PUC)",
    school: "Sri Sathya Sai Saraswati PU College, Navanihala, Kalaburagi dist",
    marks: "Marks: 99.33%",
    desc: "A well-established college offering quality education in science and arts streams.",
    img: "/assets/PU_College.jpg",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology"
    ]
  },
  {
    course: "High School",
    school: "Sri Sathya Sai Saraswati Boys High School, Navanihala, Kalaburagi dist",
    marks: "Marks: 93.60%",
    desc: "A school fostering disciplined learning with traditional values and modern practices.",
    img: "/assets/High_school.jpg",
    subjects: [
      "Science",
      "Mathematics",
      "Social Studies",
      "English - Second Language",
      "Kannada - First Language",
      "Hindi - Third Language"
    ]
  },
];

function Education() {
  const navigate = useNavigate();

  const handleViewMarks = (course, index) => {
    if (course === "Pre-University (PUC)") {
      navigate(`/marks-card/puc/0`); // 0 for PUC
    } else if (course === "High School") {
      navigate(`/marks-card/9`); // 9 for High School (add data in marksData if needed)
    }
  };
  return (
    <div className="education-outer">
      {educationData.map((edu, index) => (
        <section className="education-fullscreen" key={index}>
          <div className="education-main">
            {/* Left: Details */}
            <div className="education-details-block">
              <h2>{edu.course}</h2>
              <h3>{edu.school}</h3>
              <p className="marks">{edu.marks}</p>
              <p className="desc">{edu.desc}</p>
              <button
                className="marks-btn"
                style={{ marginTop: "16px" }}
                onClick={() => handleViewMarks(edu.course, index)}
              >
                View Certificate
              </button>
            </div>
            {/* Right: Colorful block with image */}
            <div className="education-image-block">
              <img src={edu.img} alt="School" />
            </div>
          </div>
          {/* Pink section below */}
          <div className="education-white-section">
            <div className="subject-grid">
              {edu.subjects.map((subject, idx) => (
                <div className="subject-item" key={idx}>
                  <span className="check-icon">&#10003;</span>
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Education;