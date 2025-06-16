import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const getTitleStyles = () => {
    switch (currentTheme) {
      case 'desi':
        return {
          subtitle: 'text-rose-600',
          title: 'text-amber-900 after:bg-amber-400',
          underline: 'after:h-1 after:w-20 after:bg-amber-400 after:block after:mx-auto after:mt-2',
        };
      case 'minimal':
        return {
          subtitle: 'text-neutral-600',
          title: 'text-neutral-900 after:bg-neutral-400',
          underline: 'after:h-px after:w-16 after:bg-neutral-400 after:block after:mx-auto after:mt-2',
        };
      default:
        return {
          subtitle: 'text-indigo-600',
          title: 'text-gray-900 after:bg-indigo-500',
          underline: 'after:h-1 after:w-20 after:bg-indigo-500 after:block after:mx-auto after:mt-2',
        };
    }
  };

  const styles = getTitleStyles();

  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <motion.p
          className={`text-sm font-medium uppercase tracking-wider ${styles.subtitle}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className={`text-3xl font-bold mt-2 ${styles.title} ${
          centered ? styles.underline : ''
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default SectionTitle;