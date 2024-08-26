import { useContext } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaQuoteLeft,
  FaRegEnvelope,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = ({ contactActive, activeTab }) => {

  // const b = useContext(caht)
  return (
    <div
      className={`${
        contactActive ? 'block' : 'hidden'
      } absolute top-0 left-0 bottom-0 right-0 bg-black rounded-xl max-h-screen overflow-y-scroll`}
    >
      {/* cross button */}
      <div
        className="absolute top-3 right-3  cursor-pointer"
        onClick={() => activeTab('home')}
      >
        <FaTimes size={30} className="hover:text-teal-400 duration-300" />
      </div>

      {/* content area */}
      <div className="p-4 md:p-8">
        <div className="text-center">
          <h4 className="uppercase text-4xl mb-3">
          CONTACT <span className="text-teal-400">ME </span>
          </h4>
          <p className="text-justify">
          I am readily available for discussions regarding creative design projects or potential partnerships. Your inquiries and collaboration proposals are welcome. Please feel free to get in touch, and let's explore opportunities for innovative and impactful work together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12">
          <div className="flex flex-col gap-y-4 ">
            <div>
              <h4 className="text-3xl uppercase mb-1">Phone</h4>
              <h6 className="flex items-center gap-x-2 opacity-50 ">
                <FaWhatsapp /> +88 01730 19 76 20
              </h6>
            </div>

            <div>
              <h4 className="text-3xl uppercase mb-1">Email</h4>
              <h6 className="flex items-center gap-x-2 opacity-50">
                <FaRegEnvelope /> enayetflweb@gmail.com
              </h6>
            </div>

            <div className="flex gap-x-4 items-center mt-12">
              <Link to='https://www.facebook.com/profile.php?id=100094416483981' target="_blank" rel="noopener noreferrer">
                <FaFacebookF
                  size={20}
                  className="hover:text-teal-400 hover:-translate-y-2 duration-500 cursor-pointer"
                />
              </Link>
              <Link to='https://github.com/enayetsyl' target="_blank" rel="noopener noreferrer">
                <FaGithub
                  size={20}
                  className="hover:text-teal-400 hover:-translate-y-2 duration-500 cursor-pointer"
                />
              </Link>
              <Link to='https://www.linkedin.com/in/md-enayetur-rahman-567256285/' target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn
                  size={20}
                  className="hover:text-teal-400 hover:-translate-y-2 duration-500 cursor-pointer"
                />
              </Link>
              <Link to='https://twitter.com/enayetu_syl' target="_blank" rel="noopener noreferrer">
                <FaTwitter
                  size={20}
                  className="hover:text-teal-400 hover:-translate-y-2 duration-500 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* form */}
          <div className="w-full lg:w-1/2">
            <form className="w-full">
              <div className="form-group">
                <div className="w-full flex justify-between items-center gap-x-2">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="bg-transparent border border-slate-600  rounded-xl min-h-[55px] w-full md:w-1/2 px-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="bg-transparent border border-slate-600  rounded-xl min-h-[55px] w-full md:w-1/2 px-3"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="bg-transparent border border-slate-600  rounded-xl min-h-[55px] px-3 py-4 mt-3 w-full"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="w-full  mt-3">
                <button
                  type="submit"
                  className="bg-teal-400 hover:bg-teal-600 py-4 flex justify-center items-center rounded-xl w-full uppercase duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative mt-12 z-10">
          <FaQuoteLeft className="absolute top-0 left-0 text-teal-400 opacity-30 -z-10" size={20}/>
          <FaQuoteLeft className="absolute bottom-0 right-0 text-teal-400 opacity-30 -z-10 rotate-180" size={20}/>
          <h4 className="uppercase text-center opacity-60 ">
            {`Design is a nuanced expression that encompasses both artistic creativity and aesthetic considerations. Its apparent simplicity belies the intricacies inherent in its execution, contributing to its inherent complexity.`}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
