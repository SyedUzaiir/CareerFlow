

import React from "react";
import SkillCard from "./SkillCard.jsx";

// The data for the technologies, with updated image sources
const technologies = [
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description:
      "A high-level, class-based, object-oriented programming language widely used for building enterprise applications.",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "A versatile scripting language used primarily for enhancing interactivity on websites.",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description:
      "A popular programming language known for its readability and wide applications from data science to web development.",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "The standard markup language for creating web pages and web applications.",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "A style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    name: "SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
    description:
      "A domain-specific language used in programming for managing and manipulating relational databases.",
  },
  {
    name: "XML",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/XML_Logo.svg/120px-XML_Logo.svg.png",
    description:
      "A markup language that defines a set of rules for encoding documents in a format that is both human- and machine-readable.",
  },
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers.",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "A React framework that enables functionality such as server-side rendering and static site generation.",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, allowing developers to build scalable network applications.",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "A fast, unopinionated, minimalist web framework for Node.js, simplifying routing and server setup.",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    description:
      "A utility-first CSS framework that allows for rapid UI development with low-level styling classes.",
  },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    description:
      "A popular collaboration platform for API development, testing, and debugging.",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "A distributed version control system that helps developers track changes and collaborate on code.",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description:
      "A web-based platform that provides Git repository hosting along with collaboration features.",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "A NoSQL database that stores data in flexible, JSON-like documents, ideal for modern web applications.",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "An open-source relational database management system known for its reliability and performance.",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description:
      "A platform developed by Google for building mobile and web applications with real-time databases and authentication.",
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    description:
      "An in-memory data structure store used as a database, cache, and message broker for high-performance applications.",
  },
];

// Reusable SkillCard component to display individual technology details

// The TechStack component that maps over the data and renders SkillCards
const TechStack = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Technologies We Use
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          A showcase of the tools and technologies that power our development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {technologies.map((tech) => (
            <SkillCard
              key={tech.name}
              img={tech.src}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TechStack;