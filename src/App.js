import './App.css';
import { About, Contact, Home, Work } from './components';

import Navigation from './components/Navigation';
import { useState } from 'react';
import { StyledLayout } from './styles';

function App() {
  const [contentLoaded, setContentLoaded] = useState('home');

  return (
    <StyledLayout>
      <Navigation setContentLoaded={setContentLoaded} />
      {contentLoaded === 'home' && <Home />}
      {contentLoaded === 'about' && <About />}
      {contentLoaded === 'work' && <Work />}
      {contentLoaded === 'contact' && <Contact />}
    </StyledLayout>
  );
}

export default App;
