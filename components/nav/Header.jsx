import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Link } from 'react-scroll';
import SideBar from './SideBar';
import { navbar } from '../../constants';
import { useScrollDirection } from '../../utils/hooks';

const Header = ({ setOverlay }) => {
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const scrollDirection = useScrollDirection();

  const toggleOverlay = () => {
    setOverlay();
    setActive(!active);
    setTimeout(() => {
      setHidden(!hidden);
    }, 600);
  };

  return (
    <div className={`sticky top-0 ${scrollDirection !== 'up' && !active ? '-translate-y-full 2xl:translate-y-0' : 'translate-y-0'}  ${active && 'overflow-visible'} ${hidden ? 'overflow-hidden' : 'overflow-visible'}  w-full relative bg-palette-1/[.90] z-20 shadow-2xl transition duration-300`}>
      <nav className="p-6 h-fit">
        <div className="max-w-[1700px] mx-auto flex justify-between gap-8 h-[30px] items-center">
          <Link
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-150}
            duration={300}
            href="/#home"
          >
             <img
              src="/Logos/logo.png"
              alt="logo"
              className="h-[60px] w-[70px] cursor-pointer"
            /> 
          </Link>
          <div className="flex flex-row items-center gap-12">
            <nav className="hidden lg:flex">
              <ul className="flex flex-row gap-8 xl:gap-12">
                {navbar.map(({ name, path }) => (
                  <li key={name} className="text-white text-[12px] sm:text-[14px] font-bold">
                    <Link
                      activeClass="active"
                      to={path}
                      spy
                      smooth
                      offset={path === 'contact' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                      duration={300}
                      key={name}
                      href={`/#${path}`}
                      className="relative py-8 transition duration-300 cursor-pointer text-[15px] xl:text-[18px] font-sans group "
                    >
                      {name}
                      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-row gap-12 items-center">

              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={0}
                duration={300}
                href="/#contact"
                aria-label="Get a free quote"
              >
                <button type="button" className="hidden md:flex font-bold text-palette-5 text-[12px] sm:text-[14px] px-8 py-4 border-[1px] border-palette-5 rounded-full hover:bg-palette-5 hover:text-palette-1/[.85] transition duration-300">
                  GET A FREE QUOTE
                </button>
              </Link>

              <div>
                <SideBar
                  active={active}
                  handleClick={() => toggleOverlay()}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
