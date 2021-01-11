import React from 'react';
import styled, { css, keyframes } from 'styled-components'

interface ITable {
  activeBool: boolean
  activeIndex: number
}

const STable = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;  
  grid-template-rows: 400px 400px;
`;

const rise = keyframes`
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
`;

const STableElem = styled.div<ITable>`
  background-color: lightpink;
  border: ${({activeBool}) => !!activeBool ? '2px solid green' : '1px solid black' };
  ${({activeBool, activeIndex}) => activeBool && css`
    position: relative;
    width: 600px;
    height: 600px;
    animation: ${rise} 0.8s linear;
  ` }
  ${({activeBool, activeIndex}) => {
    if (activeBool && activeIndex === 2){
      return css`
        right: 200px;
      `;
    }
    if (activeBool && activeIndex === 3){
      return css`
        bottom: 200px;
      `;
    }
    if (activeBool && activeIndex === 4){
      return css`
        bottom: 200px;
        right: 200px;
      `;
    }
  }}
  img {
    width: 100%;
    height: 100%;
    opacity: ${({activeBool}) => activeBool ? '1' : '0.1' };
  }
`;

const Table = () => {
  const [activeIndex, setActive] = React.useState<number>(1);
  const handleSetActive = React.useCallback(() => {
    setActive(state => {
      if (state < 4) {
        return state + 1;
      } else {
        return 1;
      }
    })
  }, [])

  return (
    <STable 
      onClick={handleSetActive}>
        <STableElem 
          activeIndex={activeIndex}
          activeBool={activeIndex === 1}>
          <img src={activeIndex === 1 ? '/imgs/cat.gif' : '/imgs/cat.jpeg'} />
        </STableElem>
        <STableElem 
          activeIndex={activeIndex}
          activeBool={activeIndex === 2}>
          <img src={activeIndex === 2 ? '/imgs/cat.gif' : '/imgs/cat.jpeg'} />
        </STableElem>
        <STableElem 
          activeIndex={activeIndex}
          activeBool={activeIndex === 3}>
          <img src={activeIndex === 3 ? '/imgs/cat.gif' : '/imgs/cat.jpeg'} />
        </STableElem>
        <STableElem 
          activeIndex={activeIndex}
          activeBool={activeIndex === 4}>
          <img src={activeIndex === 4 ? '/imgs/cat.gif' : '/imgs/cat.jpeg'} />
        </STableElem>
    </STable>
  )
}

export default Table;