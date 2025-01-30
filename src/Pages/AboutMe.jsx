import { useState } from "react";
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "./AboutMe.css"
import profilePhoto from "../assets/profile.jpg"
import {Link} from "react-router-dom"
import Resume from "../assets/GruhitPatel.pdf"

export default function AboutMe() {
  return (
    <div className="flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col space-y-4">
          <Link className="group1-btn block text-center text-white" to="/portfolio/">📖 About Me</Link>
          <Link className="group1-btn block text-center text-white" to="/portfolio/projects">📂 Projects</Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-center space-x-8">
          <img
            src={profilePhoto} // Replace with actual image path
            alt="Gruhit Patel"
            className="w-40 h-48 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">Gruhit Patel</h1>
            <p className="text-gray-300 mt-2">
              Data professional skilled in building data pipelines, developing analytics models, creating dashboards, and optimizing analytics with Python, Power BI, and data preparation techniques.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="pdf_resume.pdf" download={Resume} className="flex items-center space-x-2 py-2 group2-btn block text-center"> <FaDownload/> <span>Download Resume</span></a>
              <button className="flex items-center space-x-2 px-4 py-2 group3-btn rounded-lg text-white">
                <FaEnvelope /> <span>Contact Me</span>
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex space-x-6 text-blue-400">
          <a href="#">Blog</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
        </div>

        {/* Experience & Qualifications */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Experience & Qualifications</h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>✔️ Extensive experience in data analysis, backend development, and automation</li>
            <li>✔️ Proficient in Python, SQL, Power BI, and data preparation techniques</li>
            <li>✔️ Hands-on experience with machine learning, NLP, and reinforcement learning models</li>
            <li>✔️ Strong problem-solving, collaboration, and time management skills</li>
            <li>✔️ Skilled in building scalable APIs and optimizing backend systems on AWS</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>📌 Programming: Python (TensorFlow, PyTorch, Pandas), TypeScript, Node.js</li>
            <li>📊 Data Visualization: Power BI, MS Excel, Matplotlib, Seaborn</li>
            <li>📈 Modeling: NLP, Reinforcement Learning, Speech-to-Text, Statistical Analysis</li>
            <li>🛢 Databases: SQL, MongoDB, PostgreSQL</li>
            <li>☁ Cloud & Tools: AWS, Docker, GitHub, API Integration</li>
          </ul>
        </section>

        {/* Work History */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Work History</h2>
          
          <div className="mt-2 mb-6 text-gray-300">
            <h3 className="font-semibold">📊 Data Science Intern | Sunspark Canvassing</h3>
            <p>09/2023 - Present</p>
            <ul className="mt-2 space-y-2">
              <li><FaArrowRight className="inline-block"/> Automated data pipelines for reporting using Python, reducing manual effort by 70% and improving data accessibility</li>
              <li><FaArrowRight className="inline-block"/> Enhanced Excel dashboards to support business decision-making, ensuring data accuracy and timeliness</li>
            </ul>
          </div>

          <div className="mt-2 mb-6 text-gray-300">
            <h3 className="font-semibold">🖥️ Software Developer (Backend) | Kabra Logistics</h3>
            <p>05/2022 - 06/2023</p>
            <ul className="mt-2 space-y-2">
              <li><FaArrowRight className="inline-block"/> Optimized backend processes, enhancing system performance by 30%, and collaborated with cross-functional teams to deliver solutions aligned with business goals.</li>
              <li><FaArrowRight className="inline-block"/> Deployed and maintained backend systems on AWS, ensuring efficient data integration and processing.</li>
              <li><FaArrowRight className="inline-block"/> Maintained data integrity during API integrations, ensuring seamless data migration and usability.</li>
            </ul>
          </div>

          <div className="mt-2 mb-6 text-gray-300">
            <h3 className="font-semibold">🔬 Research Intern | Bhaskaracharya Institute for Space Application and Geo-informatics</h3>
            <p>01/2022 - 04/2022</p>
            <ul className="mt-2 space-y-2">
              <li><FaArrowRight className="inline-block"/> Manipulated large datasets from autonomous vehicles, using Python to perform exploratory data analysis and identify inefficiencies.</li>
              <li><FaArrowRight className="inline-block"/> Analyzed large datasets, applied statistical methods, and refined reinforcement learning models for improved accuracy in decision-making.</li>
            </ul>
          </div>

          <div className="mt-2 mb-6 text-gray-300">
            <h3 className="font-semibold">🛠️ Software Developer Intern | Information and Library Network Center</h3>
            <p>08/2021 - 12/2021</p>
            <ul className="mt-2 space-y-2">
              <li><FaArrowRight className="inline-block"/> Built and optimized a multi-modular API system using Node.js, Express.js, and TypeScript.</li>
              <li><FaArrowRight className="inline-block"/> Programmatically extracted data using APIs and optimized transformations for a large SQL database.</li>
            </ul>
          </div>
          
        </section>
      </main>
    </div>
  );
}
