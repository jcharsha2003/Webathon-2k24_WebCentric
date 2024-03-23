import React from 'react';
import ReactDOM from 'react-dom/client';

import UserLoginContextStore from "./context/UserLoginContextStore";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <UserLoginContextStore>
 
    <App />
    
  </UserLoginContextStore>
 
);

