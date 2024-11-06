// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ fetchMovies }) => {
  return (
    <aside className="sidebar">
      <button onClick={() => fetchMovies('popular')}>Popular</button>
      <button onClick={() => fetchMovies('action')}>Action</button>
      <button onClick={() => fetchMovies('comedy')}>Comedy</button>
    </aside>
  );
};

export default Sidebar;
