
import { useState, useEffect } from 'react';
import axios from 'axios';  // 'require' 대신 'import'를 사용

function TestAjax() {

  const [testDatas, setTestData] = useState(null); // 초기값을 null 또는 원하는 값으로 설정
  const [testDatas1, setTestDatas1] = useState([], []);
  const [testDatas2, setTestDatas2] = useState([], []);
  // 통신 테스트 github public 
  function testData(url) {
    fetch(url)
		.then((res) => res.json()) 
		.then((data) => {
			setTimeout(() => {
				setTestData(data); 
				setTestDatas1([data[0] , data[1]]);
			}, 500);
		})
		.catch((error) => {	console.error("Error data:", error); });
  }

  // axios.get()으로 GET 요청
	function testAjaxData(url) {
		axios.get(url) 
			.then((response) => {
				const data = response.data; // 응답에서 데이터 추출
				setTimeout(() => {
					setTestDatas2([data[0] , data[1]]);
				}, 500);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}

  useEffect(()=>{
    testData(`https://unknowntie.github.io/myblog_back_Public/contents/test.json`);
    testAjaxData(`https://unknowntie.github.io/myblog_back_Public/contents/test.json`);
  },[])

	return (
    <div>
      <hr></hr>
      <div>
          {testDatas ? // JSON 데이터를 출력
          (<div>{JSON.stringify(testDatas)}</div> ) : 
          (<p>Loading...</p> )}
        </div>
        <hr></hr>
				<div>
        {
          testDatas1.map((item, index) => (
              item.map((subItem, subIndex) => (
                <div key={subItem.id || subIndex}>
                  <h1>{subItem.title}</h1>
                  <p>count: {subItem.count}</p>
                  <p>float: {subItem.float}</p>
                  <p>url: {subItem.url}</p>
                  <p>color: {subItem.color.join(" , ")}</p>
                  {/* 다른 속성들도 출력 */}
                </div>
              ))
          ))
        }
      </div>
			<hr></hr>
				<div>
        {
          testDatas2.map((item, index) => (
            Array.isArray(item) ? (
              item.map((subItem, subIndex) => (
                <div key={subItem.id || subIndex}>
                  <h1>{subItem.title}</h1>
                  <p>count: {subItem.count}</p>
                  <p>float: {subItem.float}</p>
                  <p>url: {subItem.url}</p>
                  <p>color: {subItem.color.join(" , ")}</p>
                  {/* 다른 속성들도 출력 */}
                </div>
              ))
            ) : (
              <div key={index}>A {index}</div>
            )
          ))
        }
      </div>
        <hr></hr>
    </div>
  );
}

export default TestAjax;
