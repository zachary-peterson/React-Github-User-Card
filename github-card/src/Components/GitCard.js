import React from 'react';
import styled from 'styled-components';

const GitCardContainer = styled.div`
  border-radius: 15%;
  padding: 2.5% 0;
  margin: 2.5% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 12px double #FFFFFF;
  background-color: #D80000;
  font-family: 'Recursive', sans-serif;

  p {
    color: white;
    font-size: 1.75rem;
  }

  .exception {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    line-height: .0005;

    p {
      font-size: 3rem;
    }

    h2 {
      color: white;
      font-size: 5rem;
      letter-spacing: 10px;
    }
  }



  .top {
    margin: 2.5% auto;
    width: 100%;
    display: flex;
    background-color: #FFFFFF;
    font-size: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      width: 25%;
      margin: 0 auto;
    }

    h2 {
      width: 70%;
      margin: 0 auto;
      font-family: 'Rock Salt', cursive;
    }
  }

  .bot {
    text-align: center;
    width: 100%;
    color: #FFFFFF;
    font-size: 1.75rem;
    line-height: .25;

    a {
      color: #0000EE;
      

      &:hover {
        color: #66ccff;
        text-transform: lowercase;
        text-decoration: none;
      }
    }
  }
`

const GitCard = props => {

    return (
        <GitCardContainer>
          <div className='exception'>
            <h2 className='exc'><strong>HELLO</strong></h2>
            <p>my name is:</p>
          </div>
          <div className='top'>
            <img src={props.handle['avatar_url']}/>
            <h2>{props.handle.name}</h2>
          </div>
          <div className='bot'>
              <p>Number of Public Repositories: {props.handle['public_repos']}</p>
              <p>Number of Followers: {props.handleFollowers.length}</p>
              <a href={props.handle['html_url']} rel="noopener noreferrer" target='_blank'><em>Check Out My Work!</em></a>
          </div>
        </GitCardContainer>
    )
}

export default GitCard;