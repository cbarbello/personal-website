import React from "react";

const AboutPage: React.FC = () => (
  <div className="container mx-auto py-8 px-4">
    <h2 className="text-3xl font-bold mb-8">About Me</h2>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src="/images/profile.jpg"
          alt="Casey Barbello"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="md:w-2/3 md:pl-8">
        <p className="mb-4 text-lg">
          I'm a full-stack software engineer with over 7 years of experience.
        </p>
        <p className="mb-4 text-lg">
          I originally attended UCSB for Economics, but switched to Computer
          Science after realizing how much of a force-multiplier programming
          could be. I've worked at a variety of companies, from small startups
          to large corporations, and have experience with a wide range of
          technologies.
        </p>
        <p className="mb-4 text-lg">
          I'm passionate about clean code, user experience, and continuous
          learning. When I'm not coding, you can find me hiking, reading, or
          experimenting with new technologies.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="font-semibold">
              Bachelor of Science in Computer Science
            </h4>
            <p>University of California, Santa Barbara 2015-2019</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          <div className="mb-4">
            <h4 className="font-semibold">Senior Software Engineer</h4>
            <p>Meta, 2019-2024</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
