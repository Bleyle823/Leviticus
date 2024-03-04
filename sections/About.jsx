import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { TypingText, TitleText, QuoteCard, Picture } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  const isDesktop = useMediaQuery({ maxWidth: 1024 })

  return (
    <section className={`p-0 lg:p-[100px] relative z-10 min-h-[1100px] flex flex-col justify-end lg:justify-center`} id='about'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-12`}
      >
        <div className='flex flex-col-reverse lg:items-center lg:flex-row gap-8 lg:gap-[100px] xl:gap-40 mt-[50px] w-fit h-fit'>
          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('right', 'tween', 0.1, 1)}
            className='relative z-50 h-[600px] xl:h-[700px] 2xl:h-[800px]'
          >
            <Picture
              webp="/imgs/sec.png"
              src="/imgs/sec.png"
              alt="2 men trimming hedge"
              className="relative w-full lg:max-w-[400px] xl:max-w-[500px] min-h-[600px] h-full object-cover object-cover z-40 lg:rounded-lg shadow-xl"
            />
            <QuoteCard
              text="Work with a Qualified Team you can Trust."
              styles="lg:hidden"
            />
            <div className='hidden lg:block'>
              <div className='absolute -top-[50px] -left-[50px] h-full w-full bg-palette-1 shadow-2xl z-0' />
              <div className='absolute -bottom-4 -right-4 h-full w-full bg-palette-5 z-20' />
              <div className='absolute -bottom-[50px] -right-[50px] h-full w-full border-4 border-palette-1 z-10' />
            </div>
          </motion.div>

          <motion.div
            variants={isDesktop ? fadeIn('up', 'tween', 0.1, 1) : fadeIn('left', 'tween', 0.1, 1)}
            className='px-6 sm:px-16 lg:px-0 sm:py-12 flex flex-col justify-center items-start gap-12 flex-1'
          >
            <motion.div
              variants={isMobile ? fadeIn('up', 'tween', 0.2, 1) : fadeIn('left', 'tween', 0.2, 1)}
              className='flex flex-col items-start'
            >
              <TypingText title='| About Us' textStyles='text-center' />
              <TitleText title={<>Who We Are</>} />
            </motion.div>

            <div className='flex flex-col gap-8'>
              <p className={`font-normal text-[16px] leading-7`}>
              Levictus Security Management Limited is a venture company in Kenya in pursuit of optimizing Africa systems security 
requirements as a reliable Total Security Solution Provider. The creativity is the tool we use in our problem solving 
methods (Solution). Our efforts are focused on balancing among safety/security, convenience (easy to use) and 
economic points.


              </p>

              <p className={`font-normal text-[16px] leading-7`}>
              The right choice of solution and afterwards continuous maintenance service make us different with others and are the 
major success points. It looks like a small difference which we stick to but we believe surely big difference in the end.
Our longstanding commitment to excellence and our pool of industry experts collectively strengthen our capacity to 
provide our clients with extensive design, installation, commissioning and after-sales services including:
Initial Study and Conceptual Design
              </p>

              <p className={`font-normal text-[16px] leading-7`}>
              Value Engineering
Full Engineering Support
Total ProjectManagement Services
Total Installation Capabilities
Project Commissioning Capabilities
FullAfter Sales Support
Our smart building systems include:<br/><br/>
1. Access Control Systems<br/>
2. Time and Attendance systems<br/>
3. Automatic Gates<br/>
4. CCTV Surveillance Systems<br/>
5.Audio-Video Systems<br/>
6. Data Networks and High Speed Internet<br/>
7. Solutions Structured Cabling Solutions<br/>
8. Interactive Systems for the hospitality industry<br/>
9. Intrusion and Security Systems<br/>
10. Computerized Guard Patrol Systems<br/>
11. Security Bollards and Car Barriers<br/>
12. Website Design & Hosting Services<br/>
13. Digital Branding<br/>
14. ICT Support Services<br/>
14. Fire Detection and Voice Evacuation Systems<br/>
16. Fire Suppression Systems<br/>
17. Air Conditioners<br/>
18. Electric Fence<br/>
              </p>
            </div>

            {/* <button className={`${styles.heroBtn} bg-palette-1 hover:border-palette-1`}>Learn More</button> */}

          </motion.div>
        </div>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          className='hidden lg:flex w-[18px] h-[28px] object-contain mt-[50px]'
        />
      </motion.div>
    </section>
  );
};

export default About;
