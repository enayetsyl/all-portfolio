import { FaCalendarAlt, FaTimes } from "react-icons/fa";

const About = ({ aboutActive, activeTab }) => {
  return (
    <div
      className={`${
        aboutActive ? "block" : "hidden"
      } absolute top-0 left-0 bottom-0 right-0 bg-black rounded-xl max-h-screen overflow-y-scroll`}
    >
      {/* cross button */}
      <div
        className="absolute top-3 right-3  cursor-pointer"
        onClick={() => activeTab("home")}
      >
        <FaTimes size={30} className="hover:text-teal-400 duration-300" />
      </div>

      {/* content area */}
      <div className="p-4 md:p-8">
        <div className="max-w-[555px] mx-auto text-center">
          <h4 className="uppercase text-4xl font-bold mb-3">
            ABOUT <span className="text-teal-400">ME</span>
          </h4>
          <p className="text-base text-justify!">
            I'm Md Enayetur Rahman, a passionate web developer, seamlessly
            blending creativity and purpose in the dynamic tech landscape.
            Proficient in the MERN stack and currently immersing myself in
            Next.js, I offer a unique mix of skills and principles.
          </p>
          <h5 className="text-xl font-bold my-4 text-start">
            Crafting Solutions:
          </h5>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">
              Understanding Insights: </span>
            <span>
               A knack for delving into people's motivations and grasping deeper
              layers.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Ethical Drive: </span>
            <span>
              Guided by strong principles, I approach every endeavor with a
              sense of ethics.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Passion-Fueled: </span>
            <span>
              Energized by a purposeful approach, always fueled by visions of a
              brighter future.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Impactful Altruism: </span>
            <span>
              Committed to making a positive impact, prioritizing the greater
              good.
            </span>
          </h6>
          {/* navigating challenges */}
          <h5 className="text-xl font-bold my-4 text-start">
            Navigating Challenges:
          </h5>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Feedback Resilience: </span>
            <span>
              Open to feedback, yet protective of cherished principles.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Balancing Act: </span>
            <span>
              Juggling the value of honesty with the challenge of vulnerability.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Idealistic Focus: </span>
            <span>
              Driven by ideals, occasionally grappling with a perfectionistic
              perspective.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Beyond Ordinary Goals: </span>
            <span>
              Aspiring to achieve the extraordinary, even if it means breaking
              down into manageable steps.
            </span>
          </h6>
          <h6 className="text-start text-sm my-2">
            <span className="font-bold text-start">Self-Care Awareness: </span>
            <span>
               Conscious of the potential for burnout, prioritizing balance and
              well-being.
            </span>
          </h6>
          {/* technical arsenal */}

          <h5 className="text-xl font-bold my-4 text-start">
          Technical Arsenal:
          </h5>
          <h6 className="text-justify text-sm my-2">
          Equipped with proficiency in full-stack development, meticulous attention to detail, and an unwavering commitment to continuous learning.
          </h6>
          {/* Professional Journey:*/}

          <h5 className="text-xl font-bold my-4 text-start">
          Professional Journey:
          </h5>
          <h6 className="text-justify text-sm my-2">
          Eager to contribute as a junior developer or intern, I bring a distinctive blend of creativity, ethical values, and a fervent passion for technology to any forward-thinking team.
          </h6>

          {/* personal details */}
          <div className="my-6">
            <div className="flex justify-Start items-center mt-3">
              <h4 className="text-xl">Name: Md Enayetur Rahman</h4>
            </div>
            <div className="flex justify-Start items-center mt-3">
              <h4 className="text-xl">Language: Bangla, 
              English.</h4>
            </div>
            <div className="flex justify-Start items-center mt-3">
              <h4 className="text-xl">Location: Sylhet, Bangladesh.</h4>
            </div>
            <div className="flex justify-Start items-center mt-3">
              <h4 className="text-xl">Phone: +88 01730 19 76 20</h4>
            </div>
            <div className="flex justify-Start items-center mt-3">
              <h4 className="text-xl">email: enayetflweb@gmail.com</h4>
            </div>
          </div>

          {/* cv download button */}
          <div className="my-12">
            <button className="px-12 py-4 bg-teal-500 hover:bg-cyan-600 duration-500 font-bold text-sm uppercase rounded-full">
              Download CV
            </button>
          </div>
        </div>

        {/* experience and education */}
        <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-12 lg:gap-20">
          {/* experience */}
          <div>
            <h4 className="text-3xl uppercase mb-8">Experience</h4>

            <div className="flex flex-col gap-y-6">
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> dec 2023- dec 2023
                </h6>
                <h5 className="text-xl">Backend Developer</h5>
                <p className="opacity-70 uppercase">
                  For a small e-commerce project i developed the backend.
                </p>
              </div>
              {/* <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> 2017-2019
                </h6>
                <h5 className="text-xl">Frontend Developer</h5>
                <p className="opacity-70 uppercase">
                  I started my career from fiverr. I earned a level 2 badge from
                  there. I had a 5star rating overall.
                </p>
              </div>
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> 2017-2019
                </h6>
                <h5 className="text-xl">Frontend Developer</h5>
                <p className="opacity-70 uppercase">
                  I started my career from fiverr. I earned a level 2 badge from
                  there. I had a 5star rating overall.
                </p>
              </div> */}
            </div>
          </div>
          {/* education */}
          <div>
            <h4 className="text-3xl uppercase mb-8">Education</h4>

            <div className="flex flex-col gap-y-6">
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> july 2023- Dec 2023
                </h6>
                <h5 className="text-xl">Complete Web Development Course</h5>
                <p className="opacity-70 uppercase">
                  @Programming Hero learned: HTML, CSS, JS, REACT, NODE JS,
                  EXPRESS, MONGODB, TAILWIND, MATERIAL UI.
                </p>
              </div>
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> june 2023- june 2023
                </h6>
                <h5 className="text-xl">
                  CS50's Introduction to Programming with Scratch
                </h5>
                <p className="opacity-70 uppercase">
                  Learned basics of programming through Scratch.
                </p>
              </div>
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> june 2023- june 2023
                </h6>
                <h5 className="text-xl">
                  CS50's Web Programming with Python and JavaScript
                </h5>
                <p className="opacity-70 uppercase">
                  Learned what is what is web programming.
                </p>
              </div>
              <div>
                <h6 className="flex items-center gap-x-2 opacity-50">
                  <FaCalendarAlt /> june 2023- june 2023
                </h6>
                <h5 className="text-xl">
                  CS50's Introduction to Computer Science
                </h5>
                <p className="opacity-70 uppercase">
                  Learned what is computer science and how it works.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* expertises */}
        <div className="mt-20">
          <h4 className="text-3xl uppercase mb-8 text-center">My Skills</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 ">
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">HTML (95%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[95%] h-full rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">CSS (95%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[95%] h-full rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">Tailwind (95%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[95%] h-full rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">JS (60%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[60%] h-full rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">React (80%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[80%] h-full rounded-xl"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">Material UI (90%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[90%] h-full rounded-xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">Node js (80%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[80%] h-full rounded-xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base  uppercase  pb-1">Express (80%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[80%] h-full rounded-xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base uppercase  pb-1">mongodb (85%)</h4>
              <div className="w-full rounded-xl h-1.5 overflow-hidden bg-slate-700">
                <div className="bg-teal-400 w-[85%] h-full rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
