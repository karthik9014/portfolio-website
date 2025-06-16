import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);

  const navItems = [
    { href: '#header', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#about', icon: <AiOutlineUser />, label: 'About' },
    { href: '#experience', icon: <BiBook />, label: 'Experience' },
    { href: '#portfolio', icon: <AiOutlineProject />, label: 'Portfolio' },
    { href: '#contact', icon: <BiMessageSquareDetail />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = navItems.map(item => item.href.substring(1));
      
      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop - windowHeight / 3) {
            const href = `#${sections[i]}`;
            if (activeNav !== href) {
              setActiveNav(href);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeNav, navItems]);

  return (
    <motion.nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex px-3 py-3 z-10 gap-3 rounded-full ${themeStyles.navStyle}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {navItems.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={() => setActiveNav(item.href)}
          className={`p-3 rounded-full flex text-xl ${
            activeNav === item.href ? themeStyles.navActiveStyle : themeStyles.navInactiveStyle
          } transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default Nav;