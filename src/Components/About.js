import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black pb-4 ">
      <header className="pt-20 flex justify-center mb-6 md:mb-16">
        <h2 className="text-yellow-700 text-3xl">About</h2>
      </header>
      <main className="flex justify-center items-center">
        <div className="bg-gray-100 w-10/12 flex flex-col items-center justify-center rounded-3xl animate-fadeIn">
          <h2 className="p-4 text-2xl">Skills</h2>
          <section className="flex flex-wrap p-2 w-full">
            <div className="flex items-center flex-col w-full md:w-4/12 px-2 text-center">
              <h3 className="p-1 text-lg">Languages</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="flex items-center flex-col w-full md:w-4/12 px-2 text-center">
              <h3 className="p-1 text-lg">Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="flex items-center flex-col w-full md:w-4/12 px-2 text-center">
              <h3 className="p-1 text-lg">Other</h3>
              <ul>
                <li>SEM</li>
                <li>SEO</li>
                <li>Client Relationships</li>
                <li>Project Management</li>
              </ul>
            </div>
          </section>

          <section className="flex justify-center text-center p-2">
            <div>
              <h2 className="p-2 text-2xl">About Me</h2>
              <p>
                I've been working in marketing for the last 7 years, and have
                spent the last 3 heavily involved in internal Web Development and the User
                Experience. I started learning to code at the beginning of 2020,
                and have since completed several online courses, most recently
                <a 
                className="underline hover:text-blue-500"
                  href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
                  target="_blank"
                >
                  {" "}
                  CodeCademy's Front End Engineer Course
                </a>
                , and have created a number of personal projects. <br /> <br />{" "}
                In my spare time I enjoy rock climbing and DIY, you can usually
                find me out in the Peak District at least once a week with my
                dog and self-converted campervan.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
