import React from 'react';
import { Link } from 'react-router-dom';
import myStyle from './NavSide.module.scss';

function NavSide() {
  return (
    <nav  className={myStyle.nav}> 
      <div className={myStyle.tabs}>
        <Link to="/BtcAPI" className={myStyle.tab}>비트코인 api 테스트</Link>
        <Link to="/TestAjax" className={myStyle.tab}>TestAjax</Link>


        {/* 추가 탭들 */}
      </div>
    </nav>
  );
}

export default NavSide;
