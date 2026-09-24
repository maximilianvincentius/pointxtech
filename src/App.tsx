import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </MotionConfig>
  );
};

export default App;
