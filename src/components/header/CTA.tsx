import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import ResumeFile from '../../assets/VenkataKartheek_CV.pdf';
const CTA = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <motion.a
        href={ResumeFile}
        download
        className={`px-6 py-3 rounded-md font-medium ${themeStyles.buttonStyle}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.a>
      <motion.a
        href="#contact"
        className={`px-6 py-3 rounded-md font-medium ${themeStyles.outlineButtonStyle}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;