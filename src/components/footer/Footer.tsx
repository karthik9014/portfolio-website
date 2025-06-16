import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { appData } from '../../data';

const Footer = () => {
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
    const themeStyles = getThemeStyles(currentTheme);
    const { socials } = appData.contact;
    const { name } = appData.user;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`py-12 mb-28 ${themeStyles.footerStyle} relative`}>
            <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
            
            <motion.div
                className="absolute -top-5 right-8 cursor-pointer"
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className={`${themeStyles.footerIconStyle} p-3 rounded-full text-white flex items-center justify-center`}>
                    <FaArrowUp />
                </div>
            </motion.div>
            
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex gap-4 mb-8">
                        {socials.linkedin && (
                            <motion.a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className={`${themeStyles.footerIconStyle} p-3 rounded-full text-white transition-colors`}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin size={20} />
                            </motion.a>
                        )}
                        {socials.github && (
                            <motion.a
                                href={socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className={`${themeStyles.footerIconStyle} p-3 rounded-full text-white transition-colors`}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub size={20} />
                            </motion.a>
                        )}
                        {socials.twitter && (
                            <motion.a
                                href={socials.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className={`${themeStyles.footerIconStyle} p-3 rounded-full text-white transition-colors`}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaTwitter size={20} />
                            </motion.a>
                        )}
                        {socials.instagram && (
                            <motion.a
                                href={socials.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className={`${themeStyles.footerIconStyle} p-3 rounded-full text-white transition-colors`}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaInstagram size={20} />
                            </motion.a>
                        )}
                    </div>

                    <div className="text-center text-sm opacity-80">
                        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
                        <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;