import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , useNavigate } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

function RedirectHandler() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('redirect'); // redirect 변수 존재시, 해당 위치로 이동

  React.useEffect(() => {
    if (redirectPath) {
      //alert(redirectPath); //주소확인
      //github의 기본 주소는 생략
      let path = redirectPath.substring(redirectPath.indexOf("/", 1));
      //alert(path); //주소확인
      const decodedPath = decodeURIComponent(path);
      navigate(decodedPath);
    }
  }, [navigate, redirectPath]);
  return <App />;
}

// github page 사용시 F5불가로 404발생시, redirect 값으로 이동할 주소를 받아서 전달
function Root() {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('redirect');

  if (redirectPath) 
    return <RedirectHandler />;
  return <App />;
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/reacttestlist">
      <Root/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
