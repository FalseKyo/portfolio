import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
// Import other components similarly

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <MainSection />
      {/* Insert other components like Footer, Work Section, etc. */}
    </div>
  );
}

export default App;