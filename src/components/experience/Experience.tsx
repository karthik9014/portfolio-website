import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { appData } from '../../data';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);
  const { skillsFrontend, skillsBackend, skillsAutomation } = appData;

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
    <section id="experience" className={`py-20 ${themeStyles.experienceSectionStyle}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="My Experience" subtitle="What Skills I Have" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <ExperienceCard title="Frontend Development" skills={skillsFrontend} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ExperienceCard title="Backend Development" skills={skillsBackend} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ExperienceCard title="Automation Testing" skills={skillsAutomation} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;