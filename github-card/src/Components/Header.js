import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2.5% auto;
  width: 80%;
  background-color: #D80000;
  border: 15px double #000000;
  outline: 5px solid #FFFFFF;
  outline-offset: -5px;

  h1 {
    width: 50%;
    padding: 5% 5%;
    margin: 2.5% auto;
    background-color: #4b5320;
    border: 5px solid #000000;
    outline: 5px solid #FFFFFF;
    outline-offset: 5px;
    font-family: 'VT323', monospace;
    font-size: 5rem;
  }
  
  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: #b29d69;
    border: 3px solid #000000;
    margin: 2.5% auto;
    outline: 5px solid #FFFFFF;
    outline-offset: 5px;

    label {
      margin: 2.5% auto 0;
      color: black;
      font-size: 1.75rem;
      font-family: 'VT323', monospace;
    }

    input {
      width: 35%;
      margin: 2.5% auto;
      height: 5vh;
      text-align: center;
      border: 2px solid red;
    }

    button {
      width: 30%;
      padding: 2% 0;
      margin: 2.5% auto;
      background-color: #454545;
      color: white;
      font-size: 1.5rem;
      border: 3px solid #000000;
      text-shadow: 2px 2px #000000;

      &:hover {
        background-color: #555555;
        text-transform: lowercase;
      }
    }
}
`

const Header = props => {
    
    
    return (
        <MainHeader>
          <h1>GitHub User Card</h1>
          <div>
            <label><strong>Enter User Handle Here:</strong></label>
            <input 
            autoFocus
            type='text'
            onChange={props.handleChanges}
            value={props.handleSearch}
            placeholder='Enter a GitHub Handle here...'
            />
            <button onClick={props.fetchHandle}><strong>Swap User Card</strong></button>
          </div>
        </MainHeader>
    )
}

export default Header;