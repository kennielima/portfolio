"use client"
import React, { Fragment, useContext, useState } from 'react'
import { styled } from 'styled-components';
import textContext from './ContextProvider';
import Image from 'next/image';

export default function Header() {
  const ctx = useContext(textContext);
  const [shownav, setShownav] = useState(false);
  const [hide, setHide] = useState(null);

  return (
    <Fragment>
      {ctx.click !== 'hidenav' &&
        <Head>
          <span
            id='home'
            onClick={() => { ctx.dispatch({ type: 'homeclick' }) }}>
            {'<'}kennie{'/>'}
          </span>
          <Main className={shownav ? 'show-nav' : ''}>
            <span
              onClick={() => {
                ctx.dispatch({ type: 'stackclick' });
                setShownav(!shownav)
              }}
            >TechStack</span>
            <span onClick={() => { ctx.dispatch({ type: 'projectclick' }); setShownav(!shownav) }}>Projects</span>
            <span onClick={() => { ctx.dispatch({ type: 'aboutclick' }); setShownav(!shownav) }}>About</span>
            <div id='contact'
              onClick={() => { ctx.dispatch({ type: 'contactclick' }); setShownav(!shownav) }}
              onMouseEnter={() => setHide('😀')}
              onMouseLeave={() => setHide(null)}
            >
              Hire Me?{hide}
            </div>
          </Main>
          <Image
            src={shownav ? '/closed.png' : '/menu.png'}
            alt=''
            width={200}
            height={200}
            onClick={() => setShownav(!shownav)}
          />
        </Head>}
    </Fragment>
  )
}
const Head = styled.header`
  position: sticky;
  width: auto;
  height: 5rem;
  margin: -2.5rem auto;
  top: 0rem;
  z-index: 20;
  background-color: #0c1c2f;
  background-color: #0c1c2f;
display: flex;
align-items: center;
justify-content: center;

#home {
position: absolute;
left: 6rem;
font-size: 2.8rem;
color: #62e6fc;
/* font-style: italic; */
&:hover {
  cursor: pointer;
  color: #25aae4;
}
@media(max-width:480px){
  left: 1.5rem;
  font-size: 3rem;
}
}

img{
  display: none;
  width: auto;
  height: 3rem;
  right: 2rem;
  top: 1rem;
  position: absolute;
  cursor: pointer;
@media(max-width:480px){
    display: block;
  }
}
`;

const Main = styled.div`
  height: inherit;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 6rem;
  color: #e6e6e6;

@media(max-width:768px){
  font-size: 2rem;
}
@media(max-width:480px){
  display: none;
&.show-nav {
  display: grid;
  width: 100%;
  height: auto;
  margin: auto;
  /* margin-right: 0; */
  font-size: 3rem;
  grid-gap: 5rem;
  padding: 10rem 0 15rem 0;
  opacity: 98%;
  /* background-color: rgba(12, 28, 47, 1); */

}
}
#home {

}
#contact{
  position: absolute;
  left: 85%;
  border: 1px solid #D76427;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
@media(max-width:768px){
  position: relative;
  left: 0;
}
}
#hide {
  display: none;
}
#hide:hover  {
    display: flex;
  }
span:hover,#contact:hover{
  cursor: pointer;
  color: #b3b3b3;
  transition: all 0.5s;
}


`;



