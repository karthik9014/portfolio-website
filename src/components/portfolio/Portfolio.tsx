import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';
import { appData } from '../../data';
import SectionTitle from '../common/SectionTitle';

const Portfolio = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);
  const { projects } = appData;

  const containerVariants = {
    // hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    // hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className={`py-20 ${themeStyles.portfolioSectionStyle}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="My Portfolio" subtitle="Recent Work" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden ${themeStyles.portfolioCardStyle} transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.inProgress && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <FaSpinner className="animate-spin" />
                    <span className="text-xs font-medium">In Progress</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-left">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${themeStyles.portfolioTagStyle}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${themeStyles.portfolioButtonStyle}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${themeStyles.portfolioOutlineButtonStyle}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;