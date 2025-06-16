import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setTheme } from '../store/themeSlice';
import { ThemeType } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { getThemeStyles } from '../themes/themeConfig';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);

  const themes: { id: ThemeType; label: string; icon: string }[] = [
    { id: 'modern', label: 'Modern', icon: '🌟' },
    { id: 'desi', label: 'Desi', icon: '🌺' },
    { id: 'minimal', label: 'Minimal', icon: '◻️' },
  ];

  const handleThemeChange = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        className={`fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer ${themeStyles.themeSwitcherButtonStyle}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoColorPaletteOutline size={24} />
      </motion.button>

      {/* Theme options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-40 right-4 z-50 bg-white p-3 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-gray-500 mb-1 px-1">Select Theme</p>
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${
                    currentTheme === theme.id
                      ? getThemeStyles(theme.id).themeSwitcherActiveStyle
                      : 'hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span>{theme.icon}</span>
                  {theme.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;