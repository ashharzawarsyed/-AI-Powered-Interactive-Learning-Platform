// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/header';
import Chatbot from './components/Chatbot';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
};

const HomePage = () => <div>Home Page Content</div>;
const FeaturesPage = () => <div>Features Page Content</div>;
const PricingPage = () => <div>Pricing Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;
const ContactPage = () => <div>Contact Page Content</div>;

export default App;
