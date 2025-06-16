import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { FaAward, FaBriefcase, FaFolder } from 'react-icons/fa';
import { appData } from '../../data';
import SectionTitle from '../common/SectionTitle';
import DOMPurify from 'dompurify'

const About = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);
  const { about } = appData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get To Know" />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="lg:col-span-1 flex justify-center"
            variants={itemVariants}
          >
            <div className={`relative ${themeStyles.aboutImageStyle}`}>
              <img
                src={about.aboutImg}
                alt="About"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <motion.div
                className={`p-6 rounded-lg ${themeStyles.aboutCardStyle} flex flex-col items-center text-center`}
                whileHover={{ y: -5 }}
              >
                <FaAward className={`text-2xl mb-3 ${themeStyles.iconColor}`} />
                <h5 className="text-lg font-medium">Experience</h5>
                <small className="text-gray-600">{about.experience}</small>
              </motion.div>

              <motion.div
                className={`p-6 rounded-lg ${themeStyles.aboutCardStyle} flex flex-col items-center text-center`}
                whileHover={{ y: -5 }}
              >
                <FaBriefcase className={`text-2xl mb-3 ${themeStyles.iconColor}`} />
                <h5 className="text-lg font-medium">Company</h5>
                <small className="text-gray-600">{about.company}</small>
              </motion.div>

              <motion.div
                className={`p-6 rounded-lg ${themeStyles.aboutCardStyle} flex flex-col items-center text-center`}
                whileHover={{ y: -5 }}
              >
                <FaFolder className={`text-2xl mb-3 ${themeStyles.iconColor}`} />
                <h5 className="text-lg font-medium">Projects</h5>
                <small className="text-gray-600">{about.projects}</small>
              </motion.div>
            </div>

            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={itemVariants}
            >
              <p className='text-left about-content' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(about.aboutInfo)}}></p>
            </motion.p>

            <motion.a
              href="#contact"
              className={`inline-block ${themeStyles.sectionButtonStyle} px-6 py-3 rounded-md font-medium transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;