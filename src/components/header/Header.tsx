import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { appData } from '../../data';
import TypewriterText from '../common/TypewriterText';

const Header = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);
  const { user } = appData;
  const [showRole, setShowRole] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <header
      className={`min-h-[100vh] flex flex-col items-center justify-center text-center relative ${themeStyles.headerStyle}`}
      id='header'
      style={{ fontFamily: themeStyles.fontFamily }}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h5 className={`text-lg ${themeStyles.headerTextStyle}`}>
            <TypewriterText 
              text={user.greeting} 
              delay={80}
            />
          </h5>
          <motion.h1
            className={`text-5xl font-bold mt-2 mb-3 ${themeStyles.headerTextStyle}`}
            whileHover={{ scale: 1.05 }}
          >
            <TypewriterText 
              text={user.name} 
              delay={100} 
              onComplete={() => setShowRole(true)}
            />
          </motion.h1>
          {showRole && (
            <h5 className={`text-lg ${themeStyles.headerSubtitleStyle}`}>
              <TypewriterText 
                text={user.role} 
                delay={50} 
                onComplete={() => setShowCTA(true)}
              />
            </h5>
          )}
        </motion.div>

        {showCTA && (
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CTA />
          </motion.div>
        )}

        <motion.div
          className="mt-12 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated background blur effect */}
            <div className={`absolute inset-0 -z-10 blur-2xl opacity-30 rounded-full ${themeStyles.profileBlurStyle}`}></div>
            
            {/* Gradient border container */}
            <div className={`w-80 h-80 p-1.5 rounded-full ${themeStyles.profileGradientStyle}`}>
              {/* Image container with inner shadow */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                <img
                  src={appData.about.aboutImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Badge */}
            <motion.div 
              className={`absolute -bottom-2 -right-2 p-3 rounded-full shadow-lg ${themeStyles.profileBadgeStyle}`}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="text-white text-xl">👨‍💻</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <HeaderSocials />
        </motion.div>

        <motion.a
          href="#contact"
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${themeStyles.headerSubtitleStyle} flex flex-col items-center`}
          variants={itemVariants}
          whileHover={{ y: 5 }}
        >
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Header;