import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
`

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2.5% auto;
  width: 80%;
  background-color: #D80000;
  border: 15px double #FFFFFF;

  h1 {
    width: 50%;
    padding: 5% 5%;
    margin: 2.5% auto;
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
    border: 3px solid #000000;
    margin: 2.5% auto;

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

      &:hover {
        background-color: #555555;
      }
    }
}
`

const GitCard = styled.div`
  border-radius: 15%;
  padding: 2.5% 0;
  margin: 2.5% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 12px double #FFFFFF;
  background-color: #D80000;
  font-family: 'Recursive', sans-serif;

  p {
    color: white;
    font-size: 1.75rem;
  }

  .exc {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .exception {
    margin: 3% auto;
    font-size: 3rem;
    
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
      color: #ffffff;
      

      &:hover {
        color: #f2f2f2;
        text-transform: lowercase;
        text-decoration: none;
      }
    }
  }
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      handle: [],
      handleFollowers: '',
      handleSearch: ''
    };
  };

  handleChanges = e => {
    const { value } = e.target;

    this.setState({
      handleSearch: value
    });
  };

  //https://api.github.com/users/zachary-peterson/followers

  componentDidMount() {
    axios
      .get('https://api.github.com/users/zachary-peterson')
      .then(res => {
        console.log(res);
        this.setState({
          handle: res.data,
          handleSearch: res.data.login
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
    .get('https://api.github.com/users/zachary-peterson/followers')
    .then(res => {
      console.log(res);
      this.setState({
        handleFollowers: res.data
      })
    })
    .catch()
    }
  
    fetchHandle = e => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.handleSearch}`)
      .then(res => {
        this.setState({
          handle: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.handleSearch}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          handleFollowers: res.data
        })
      })
      .catch()
    };

    componentDidUpdate() {
      
    }

  render() {

    console.log(this.state);


    return (
      <Container>
        <MainHeader>
          <h1>GitHub User Card</h1>
          <div>
            <label><strong>Enter User Handle Here:</strong></label>
            <input 
            autoFocus
            type='text'
            onChange={this.handleChanges}
            value={this.state.handleSearch}
            placeholder='Enter a GitHub Handle here...'
            />
            <button onClick={this.fetchHandle}><strong>Swap User Card</strong></button>
          </div>
        </MainHeader>
        
        <GitCard>
          <div className='exc'>
            <p className='exception'><strong>Hello My Name Is:</strong></p>
          </div>
          <div className='top'>
            <img src={this.state.handle['avatar_url']}/>
            <h2>{this.state.handle.name}</h2>
          </div>
          <div className='bot'>
              <p>Number of Public Repositories: {this.state.handle['public_repos']}</p>
              <p>Number of Followers: {this.state.handleFollowers.length}</p>
              <a href={this.state.handle['html_url']} rel="noopener noreferrer" target='_blank'><em>Check Out My Work!</em></a>
          </div>
        </GitCard>

      </Container>
    );
  }
}

export default App;
