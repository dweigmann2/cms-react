import layoutStyles from '../styles/layout.module.css';
import '../i18n.js';

import React, { useState } from 'react';

function Layout({ children }) {


  return <div className='main'>

    {children}

    </div>;
}

export default Layout;
