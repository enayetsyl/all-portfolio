import { useState } from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function App() {
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [worksActive, setWorksActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const activeTab = (tabName) => {
    setHomeActive(false);
    setAboutActive(false);
    setWorksActive(false);
    setContactActive(false);

    switch (tabName) {
      case 'home':
        setHomeActive(true);
        break;
      case 'about':
        setAboutActive(true);
        break;
      case 'works':
        setWorksActive(true);
        break;
      case 'contact':
        setContactActive(true);
        break;
      default:
        break;
    }
  };

  const navData = [
    {
      active: 'home',
      title: 'home',
    },
    {
      active: 'about',
      title: 'About Me',
    },
    {
      active: 'works',
      title: 'Recent Works',
    },
    {
      active: 'contact',
      title: 'Contact Now',
    },
  ];

  return (
    <section className="h-screen relative overflow-hidden bg-black p-6 font-primary">
      <div className="outer-line p-1">
        <div className="bg-black bg-opacity-95 backdrop-blur-xl text-white z-100 p-4 md:p-6 relative h-full w-full">
          <div className="grid grid-cols-12 gap-x-4 items-center justify-center h-full">
            <div className="hidden lg:block lg:col-span-5 image">
              <img src="" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-7 h-full w-full">
              <div className="relative border border-white rounded-xl p-4 h-full w-full overflow-hidden">
                {/* *********** HOME ********** */}
                <div className="grid sm:grid-cols-2 gap-4 h-full w-full">
                  {navData.map((item, i) => (
                    <div
                      className={` bg-slate-800 hover:bg-slate-900 h-full duration-500 cursor-pointer flex justify-center items-center rounded-md ${
                        item.active === 'home' && homeActive
                          ? 'bg-transparent'
                          : item.active === 'about' && aboutActive
                          ? 'bg-transparent'
                          : item.active === 'works' && worksActive
                          ? 'bg-transparent'
                          : item.active === 'contact' && contactActive
                          ? 'bg-transparent'
                          : 'bg-slate-800 hover:bg-slate-900'
                      }`}
                      key={i}
                      onClick={() => activeTab(item.active)}
                    >
                      <h2 className="font-light uppercase text-3xl">
                        {item.title}
                      </h2>
                    </div>
                  ))}
                </div>

                {/* *********** ABOUT ********** */}
                <About aboutActive={aboutActive} activeTab={activeTab} />
                {/* *********** WORKS ********** */}
                <Portfolio worksActive={worksActive} activeTab={activeTab} />
                {/* *********** CONTACT ********** */}
                <Contact contactActive={contactActive} activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
