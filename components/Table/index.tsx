import React from 'react';
import styled, { css, keyframes } from 'styled-components'
import Switch from 'rc-switch';
import TableElement from '../TableElement';
import 'rc-switch/assets/index.css'

const STable = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;  
  grid-template-rows: 400px 400px;
`;

const Table = () => {
  const [activeIndex, setActive] = React.useState<number>(1);
  const [increaseMod, setIncreaseMod] = React.useState<boolean>(false);
  const onSwitch = React.useCallback(() => {
    setIncreaseMod(() => !increaseMod);
  }, [increaseMod])
  const handleSetActive = React.useCallback(() => {
    setActive(state => {
      if (state < 4) {
        return state + 1;
      } else {
        return 1;
      }
    })
  }, [])

  const elementsArray = [
    {
      indexElem: 1,
      gif: '/imgs/scene0.gif',
      image: '/imgs/scene0.jpeg',
    },
    {
      indexElem: 2,
      gif: '/imgs/scene1.gif',
      image: '/imgs/scene1.jpeg',
    },
    {
      indexElem: 3,
      gif: '/imgs/cat.gif',
      image: '/imgs/cat.jpeg',
    },
    {
      indexElem: 4,
      gif: '/imgs/cat.gif',
      image: '/imgs/cat.jpeg',
    },
  ]

  return (
    <><span>
      {`Increase Mod     `}
      <Switch
        onChange={onSwitch}
        onClick={onSwitch}
      />
      </span>
      <STable 
        onClick={handleSetActive}>
          {elementsArray.map((element) => (
            <TableElement 
              key={element.indexElem}
              activeIndex={activeIndex}
              gif={element.gif}
              image={element.image}
              indexElem={element.indexElem}
              increaseMod={increaseMod}
            />
          ))}
      </STable>
    </>
  )
}

export default Table;