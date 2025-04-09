/** Component Imports */

import React from 'react';
import ArticlePreview from './components/ArticlePreview/ArticlePreview';
import SocialShare from './components/SocialShare/SocialShare';

import './styles.css'; // this is for global styles including resets and variables

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

const App = () => {
  return (
    <div className="App">
      <main>
        <ArticlePreview />
      </main>
    </div>
  );
};

export default App;