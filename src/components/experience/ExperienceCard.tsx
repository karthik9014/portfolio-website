import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Skill } from '../../types';

interface ExperienceCardProps {
  title: string;
  skills: Skill[];
}

const ExperienceCard = ({ title, skills }: ExperienceCardProps) => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);

  return (
    <motion.div
      className={`p-6 rounded-lg ${themeStyles.experienceCardStyle} h-full transition-all duration-300`}
      whileHover={{ y: -5 }}
    >
      <h3 className={`text-xl font-bold text-center mb-6 ${themeStyles.experienceTitleStyle}`}>{title}</h3>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <BsPatchCheckFill className={`mt-1 ${themeStyles.iconColor}`} />
            <div>
              <h4 className="font-medium">{skill.course}</h4>
              <small className="text-gray-500">{skill.expertise}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;