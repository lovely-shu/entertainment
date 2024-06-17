import React, { useEffect } from 'react';
import styled from 'styled-components';

const {kakao} = window;

const Div = styled.div`

/* 미디어 쿼리: 화면 가로폭이 768px 미만일 때 */
@media screen and (max-width: 768px) {
    margin: 0 auto;
   #map{
    border-radius:20px;
    width:70vw;
    height:50vh;
    margin:0 auto;
    }

}

/* 미디어 쿼리: 화면 가로폭이 768px 이상일 때 */
@media screen and (min-width: 768px) {
    margin:0 auto;
    #map{
        border-radius:20px;
        width:70vw;
        margin:0 auto;
        height:400px;
    }

}



`


const KakaoMap = () => {

    useEffect(()=>{
        var geocoder = new kakao.maps.services.Geocoder();

        var callback = function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                console.log(result);
            }
        };
        
        geocoder.addressSearch(' 서울특별시 강남구 선릉로127길 5-6 ', callback);


        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng( 37.5152159847328 ,127.041194355714),
            level:3
        };
        const map = new kakao.maps.Map(container, options);
    
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng( 37.5152159847328, 127.041194355714)
          });
    
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;color:black;text-align:center;padding:6px 0;font-size:0.8rem;">더블유이엔터테인먼트</div>'
          });
          infowindow.open(map, marker);
    },[])
   
 
    return (
        <Div>
    

                    <div id='map'>     
                    </div>
           
         
      
        </Div>
    );
};

export default KakaoMap;