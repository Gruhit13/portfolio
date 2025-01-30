import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import irccWorkPermit from '../assets/ircc_workpermit_chatbot.png'
import pyDocString from '../assets/py_docstring.png'
import connectFour from '../assets/connect_four.png'
import detectionTransformer from '../assets/detection_transformer.png'
import netflixDashboard from '../assets/netflix_dashboard.png'
import quoteGen from "../assets/quote_gen.png"
import rlAlgo from "../assets/rl_algo.png"
import snakeAi from "../assets/snake_ai.png"

const projects = [
  {
    title: "IRCC Work-Permit ChatBot",
    duration: "3 Weeks",
    image: irccWorkPermit,
    link: "https://github.com/Gruhit13/ircc-work-permit-chatbot/blob/main/README.md",
    description: [
      "Developed an AI-powered chatbot for work-permit queries by scraping IRCC web pages and leveraging AstraDB’s vector store for efficient data retrieval.",
      "Implemented a RAG pipeline using llama-index and integrated SambaNova’s LLM to generate accurate, context-aware responses.",
      "Built a Streamlit-based frontend for real-time user interaction, optimizing the system for performance and scalability.",
    ],
  },
  {
    title: "Py DocString Pro",
    duration: "01/2025 - Present",
    image: pyDocString,
    link: "https://marketplace.visualstudio.com/items?itemName=GruhitPatel.py-docstring-pro",
    description: [
      "Developed a Visual Studio Code extension to automate Python docstring generation using Large Language Models (LLMs), supporting Groq and Hugging Face APIs.",
      "Implemented intuitive functionality with command palette integration and shortcut keys to streamline docstring generation for Python functions.",
      "Debugged and resolved configuration issues, ensuring accurate setting synchronization across workspace and user profiles.",
      "Created a comprehensive README with setup instructions, troubleshooting guidance, and instructional demo videos to assist users effectively."
    ],
  },
  {
    title: "Quote Generator AI",
    duration: "02/2024 - 03/2024",
    image: quoteGen,
    link: "https://github.com/Gruhit13/quote-generator/blob/main/README.md",
    description: [
      "Developed an AI-powered tool utilizing a fine-tuned GPT-2 model implemented with TensorFlow and Hugging Face library to generate personalized quotes based on user-defined tags.",
      "Integrated advanced natural language processing techniques to craft unique and contextually relevant motivational, wisdom, or creative quotes.",
      "Streamlined user interaction with an intuitive input interface, enhancing accessibility and user engagement.",
      "Showcased expertise in AI and machine learning through model fine-tuning, delivering high-quality, tailored content for diverse user preferences."
    ]
  },
  {
    title: "Netflix Dashboard",
    duration: "1 - week",
    image: netflixDashboard,
    link: "/dashboard",
    description: [
      "Designed an interactive Tableau dashboard to analyze Netflix movies and TV shows, showcasing top 10 genres, ratings, descriptions, release dates, and added dates.",
      "Provided clear visual insights into key trends and distributions, enabling better understanding of Netflix's content catalog.",
      "Ensured the dashboard was user-friendly and informative, with dynamic filters for enhanced data exploration."
    ]
  },
  {
    title: "Connect 4 Using AlphaZero",
    duration: "01/2024 - 04/2024",
    image: connectFour,
    link: "https://www.linkedin.com/posts/gruhit-patel_aiadventures-alphago-alphazero-activity-7182078154763571201-PbQz?utm_source=share&utm_medium=member_desktop",
    description: [
      "Implemented an AI bot for Connect-4 using the Monte Carlo Tree Search (MCTS) algorithm, inspired by AlphaZero's advanced reinforcement learning approach.",
      "Optimized decision-making and state evaluation processes, enabling the bot to outperform average players in strategic gameplay.",
      "Trained the bot to balance efficiency and performance, achieving a high level of competitiveness in Connect-4.",
      "Showcased expertise in reinforcement learning and AI development through practical application of MCTS and AlphaZero-inspired techniques."
    ]
  },
  {
    title: "Detection Transformer",
    duration: "01/2023 - 03/2023",
    image: detectionTransformer,
    link: "https://github.com/Gruhit13/Detection-Transformer",
    description: [
      "Implemented a Detection Transformer leveraging attention mechanisms from natural language processing to identify and localize objects within images efficiently.",
      "Utilized one-shot detection with minimal post-processing, enhancing performance and reducing computational overhead.",
      "Enabled precise detection of small objects, demonstrating potential applications in fields like cancer cell detection and other areas requiring fine-grained analysis.",
      "Showcased advanced transformer-based approaches to improve object detection accuracy and efficiency."
    ]
  },
  {
    title: "Snake AI Using Reinforcement Learning",
    duration: "05/2023 - 07/2023",
    image: snakeAi,
    link: "https://www.linkedin.com/posts/gruhit-patel_computerscience-geneticalgorithm-activity-7074520371919491072-kQGc?utm_source=share&utm_medium=member_desktop",
    description: [
      "Implemented genetic algorithms inspired by biological evolution to optimize task performance through iterative population refinement.",
      "Designed a system where entities evolve via random creation, cross-over between parent genes, and mutation to enhance adaptability.",
      "Demonstrated knowledge transfer across generations, leading to improved task execution over time with minimal intervention.",
      "Developed a practical application in Snake AI to illustrate the algorithm's ability to simulate evolutionary learning effectively."
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Link to={project.link} target="_blank">
              <h2 className="text-xl font-bold text-white">
                {project.title}
              </h2>
            </Link>
            <p className="text-gray-400 mt-1">Duration: {project.duration}</p>

            <div className="mt-4 flex flex-col md:flex-row gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-40 h-40 rounded-lg object-cover"
              />
              <div className="space-y-2 text-gray-300">
                {project.description.map((point, i) => (
                  <p key={i} className="flex items-start">
                    <FaArrowRight className="text-blue-400 mt-1 mr-2" />
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
