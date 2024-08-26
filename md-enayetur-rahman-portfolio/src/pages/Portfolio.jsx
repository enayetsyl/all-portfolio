import { FaTimes } from 'react-icons/fa';
import imageOne from '../assets/images/two.png';
import imageTwo from '../assets/images/three.png';
import imageThree from '../assets/images/four.png';
import imageFour from '../assets/images/five.png';
import imageFive from '../assets/images/six.png';
import imageSix from '../assets/images/seven.png';
import imageSeven from '../assets/images/eight.png';
import imageEight from '../assets/images/nine.png';
import imageNine from '../assets/images/eleven.png';

const data = [
  {
    link: '',
    img: imageOne,
  },
  {
    link: '',
    img: imageTwo,
  },
  {
    link: '',
    img: imageThree,
  },
  {
    link: '',
    img: imageFour,
  },
  {
    link: '',
    img: imageFive,
  },
  {
    link: '',
    img: imageSix,
  },
  {
    link: '',
    img: imageSeven,
  },
  {
    link: '',
    img: imageEight,
  },
  {
    link: '',
    img: imageNine,
  },
];

const Portfolio = ({ worksActive, activeTab }) => {
  return (
    <div
      className={`${
        worksActive ? 'block' : 'hidden'
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
          <h4 className=" text-4xl mb-3">
            My <span className="text-teal-400">Portfolio</span>
          </h4>
          <p className="text-justify">
          I welcome opportunities to engage in discussions about creative design projects or potential collaborations. My dedication to delivering high-quality work and building meaningful partnerships makes me open to exploring new ventures. Feel free to reach out, and let's discuss how we can create something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12">
          {data.map((item, i) => (
            <div
              className="overflow-hidden rounded-xl w-full h-full cursor-pointer hover:opacity-80 hover:scale-95 duration-500"
              key={i}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
