import styled, { css, keyframes } from "styled-components";

interface ITable {
  activeBool: boolean
  activeIndex: number
  increaseMod: boolean;
}

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
  ${({activeBool, increaseMod}) => activeBool && increaseMod && css`
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

interface ITableElement {
  activeIndex: number
  gif: string
  image: string
  indexElem: number
  increaseMod: boolean
}

const TableElement: React.FC<ITableElement> = ({
  activeIndex,
  gif,
  image,
  indexElem,
  increaseMod,
}) => {
  return (
    <STableElem 
      increaseMod={increaseMod}
      activeIndex={activeIndex}
      activeBool={activeIndex === indexElem}
    >
      <img src={activeIndex === indexElem ? gif : image} />
    </STableElem>
  )
}

export default TableElement;