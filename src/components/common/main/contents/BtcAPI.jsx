import { useState, useEffect } from 'react';

function BtcAPI () {
  const [btcPrice, setBtcPrice] = useState(null);


  // 암호화폐 가격 가져오기
  const fetchGeminiPrice = async () => {
    const url = 'https://api.gemini.com/v1/pubticker/btcusd';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setBtcPrice(data.last);
    } catch (error) {
    }
  };
  
  useEffect(()=>{
    fetchGeminiPrice();
  },[])


  return (
    <div>
      <h1>비트코인 현재가 확인</h1>

      {/* 암호화폐 가격 가져오기 */}
      <button onClick={fetchGeminiPrice}>BTC 현재가 확인</button>
     
      {btcPrice && <p> <br/> <br/>현재 BTC: ${btcPrice}</p>}

    </div>
  );
};

export default BtcAPI;
