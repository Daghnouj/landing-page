import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Courses from './components/Courses';
import ContactForm from './components/ContactForm';
import './App.css';
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Courses />
      <ContactForm />
    </div>
  );
};

export default App;
