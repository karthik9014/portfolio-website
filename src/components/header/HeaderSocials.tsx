import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { appData } from '../../data';

const HeaderSocials = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const { socials } = appData.contact;

  const iconVariants = {
    hover: { y: -5, scale: 1.2 },
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {socials.linkedin && (
        <motion.a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`text-2xl ${
            currentTheme === 'minimal' ? 'text-neutral-800' : 'text-white'
          } hover:opacity-80 transition-opacity`}
          whileHover="hover"
          variants={iconVariants}
        >
          <FaLinkedin />
        </motion.a>
      )}
      {socials.github && (
        <motion.a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className={`text-2xl ${
            currentTheme === 'minimal' ? 'text-neutral-800' : 'text-white'
          } hover:opacity-80 transition-opacity`}
          whileHover="hover"
          variants={iconVariants}
        >
          <FaGithub />
        </motion.a>
      )}
      {socials.twitter && (
        <motion.a
          href={socials.twitter}
          target="_blank"
          rel="noreferrer"
          className={`text-2xl ${
            currentTheme === 'minimal' ? 'text-neutral-800' : 'text-white'
          } hover:opacity-80 transition-opacity`}
          whileHover="hover"
          variants={iconVariants}
        >
          <FaTwitter />
        </motion.a>
      )}
    </div>
  );
};

export default HeaderSocials;