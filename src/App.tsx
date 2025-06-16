import { useSelector } from 'react-redux';
import { RootState } from './store';
import { getThemeStyles } from './themes/themeConfig';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);

  return (
    <div style={{ fontFamily: themeStyles.fontFamily }}>
      <ThemeSwitcher />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;