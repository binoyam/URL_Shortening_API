import React from 'react'
import './App.css';

function Nav() {
  return (
    <div className='nav-bar'>
      <nav>
        <ul className='menu'>
          <li><a href='https://shrtco.de' rel="noreferrer" target='_blank'>Home</a></li>
          <li><a href='https://shrtco.de/docs' rel="noreferrer" target='_blank'>API</a></li>
          <li><a href='https://pages.tibush.com/shrtcode/frequently-asked-questions-faq' rel="noreferrer" target='_blank'>FAQ</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav