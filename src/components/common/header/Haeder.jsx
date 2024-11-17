import React from 'react';
import { Link } from 'react-router-dom';
import myStyle from './Header.module.scss';
import GitUpdate from './GitUpdated';

function Header({ pageName }) {
  return (
    <header className={myStyle.header}>
      <div className={myStyle.tabs}>
        <Link to="/" className={myStyle.tab}>Home</Link>
        {/* 추가 탭들 */}
      </div>
      <span>{ pageName } </span>
      <GitUpdate/>
      
    </header>
  );
}

export default Header;
