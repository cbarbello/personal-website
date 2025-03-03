import React from "react";
import FeaturedProjects from "../../components/FeaturedProjects";

const HomePage: React.FC = () => (
  <div className="container mx-auto py-8 px-4">
    <section className="flex flex-col md:flex-row items-center justify-between mb-16">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Casey Barbello</h2>
        <h3 className="text-2xl text-gray-600 mb-6">
          Fullstack Software Engineer
        </h3>
        <p className="text-lg mb-6">I build things.</p>
        <div className="flex space-x-4">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Contact Me
          </a>
          <a
            href="/projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded"
          >
            See My Work
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/images/profile-picture.jpg"
          alt="Casey Barbello"
          className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
        />
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "Docker",
          "AWS",
          "Node.js",
          "PostgreSQL",
        ].map((skill) => (
          <div key={skill} className="bg-gray-100 p-4 rounded text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <FeaturedProjects />
    </section>
  </div>
);

export default HomePage;
