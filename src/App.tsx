import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import HomePage from './pages/HomePage';
import './index.css';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </MotionConfig>
  );
};

export default App;
