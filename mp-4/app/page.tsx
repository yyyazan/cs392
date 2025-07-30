"use client";
import Link from 'next/link';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: lightcoral;
  font-size: calc(10px + 5vw);
  font-family: "Boldonse", system-ui;

  margin: 0 auto;
  margin-top: 20vh;
  text-align: center;

  text-shadow: 4px 4px 0px #e0c5c5;
`;

const StyledButton = styled.button`
   font-family: "Boldonse", system-ui;
   background-color: lightcoral;
   color: white;
   border-radius: 8px;
   border: none;
   padding: 12px 24px;
   letter-spacing: 2px;

  display: block;
  margin: 10px auto;
  margin-top: 20vh;
  
  box-shadow: 4px 4px 0px #e0c5c5;
  &:hover {
    background-color: #e35d5d;
  }
`;

const StyledP = styled.p`
 font-family: "Boldonse", system-ui;
 text-align: center;
 font-size: calc(3px + 2vw);
 color: #d9a5a5;
 margin: 15px;
`;


export default function Home() {
  return (
      <>
        <StyledH1>song generator</StyledH1>
        <StyledP>♪ create a song line by line ♫</StyledP>

          <Link href="/generate">
              <StyledButton>let's go</StyledButton>
          </Link>
      </>

  );
}
