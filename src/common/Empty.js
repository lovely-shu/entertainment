import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
/* 미디어 쿼리: 화면 가로폭이 1000px 미만일 때 */
@media screen and (max-width: 1000px) {
    width:100vw;
    height:60px;
}
/* 미디어 쿼리: 화면 가로폭이 1000px 이상일 때 */
@media screen and (min-width: 1000px) {
    width:100vw;
    height:100px;
}
`
const Empty = () => {
    return (
        <Div>
            
        </Div>
    );
};

export default Empty;