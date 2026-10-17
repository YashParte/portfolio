import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import CaseStudyPage from './pages/CaseStudyPage';
import PortfolioPage from './pages/PortfolioPage';
import './pages/portfolio-base.css';

const caseStudyMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
const requestedSlug = caseStudyMatch ? decodeURIComponent(caseStudyMatch[1]) : null;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>{caseStudyMatch && requestedSlug ? <CaseStudyPage slug={requestedSlug} /> : <PortfolioPage />}</StrictMode>,
);
