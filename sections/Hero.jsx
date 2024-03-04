import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion'
import { Picture } from '../components';
import { Link } from 'react-scroll';
import { heroBtns } from '../constants';

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`relative sm:pl-16 pl-6 w-full bg-palette-5`} id='home'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1450px] w-full h-screen min-h-[600px] mx-auto flex flex-col justify-end short:justify-center"
      >
        <div className='absolute inset-0 w-full h-screen min-h-[600px]'>
          <picture>
            {/* <source srcSet="/imgs/mowing-man.webp" type="image/webp" /> */}
            <img
              src="/imgs/security.jpeg"
              alt="Hero cover"
              className="object-cover w-full h-full brightness-75"
            />
          </picture>
        </div>

        <div className='flex flex-col items-left justify-end gap-10 pb-[200px] relative z-10 short:gap-6 short:pb-0'>
          <div>
            <motion.h1 variants={textVariant(0.1)} className={styles.heroHeading}>
            A reliable Total Security
            </motion.h1>
            <motion.h1 variants={textVariant(0.4)} className={styles.heroHeading}>
             Solution Provider.
            </motion.h1>
          </div>
          <motion.p variants={textVariant(0.7)} className={styles.heroText}>
          Our efforts are focused on balancing among safety/security, convenience (easy to use) and 
economic points
          </motion.p>
          <motion.div variants={textVariant(1)} className='flex flex-col small-mobile:flex-row gap-2 mobile:gap-6'>
            {heroBtns.map(({name, path}, i) => (
              <Link
                activeClass='active'
                to={path}
                spy={true}
                smooth={true}
                offset={path === 'contact' && !isDesktop ? 600 : isDesktop ? 0 : -90}
                duration={300}
                key={name}
                href={`/#${path}`}
              >
                <button className={styles.heroBtn}>{name}</button>
              </Link>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
