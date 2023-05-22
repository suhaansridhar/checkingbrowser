import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Page not found :/</h3>
        <p>Go to <Link to="/">HomePage.</Link></p>
    </div>
  )
}

export default NotFound
