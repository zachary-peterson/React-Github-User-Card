import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2.5% auto;
  width: 80%;
  background-color: #00cec9;

  h1 {
    width: 50%;
    padding: 5% 5%;
    margin: 2.5% auto;
    background-color: #FFFFFF;
    
  }
  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border: 2px solid crimson;
    margin: 2.5% auto;

    input {
      width: 35%;
      margin: 2.5% auto;
      height: 5vh;
      text-align: center;

    }

    button {
      width: 30%;
      padding: 2% 0;
      margin: 2.5% auto;
    }
}
`

const GitCard = styled.div`
  margin: 2.5% auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 3px dashed black;

  .top {
    width: 100%;

    img {
      width: 25%;
      margin: 0 auto;
    }

    h2 {
      width: 70%;
      margin: 0 auto;
    }
  }

  .bot {
    width: 100%;
  }
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      handle: [],
      handleSearch: ""
    };
  };

  handleChanges = e => {
    const { value } = e.target;

    this.setState({
      handleSearch: value
    });
  };

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
  };

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
  }

  render() {

    console.log(this.state);


    return (
      <Container>
        <MainHeader>
          <h1>GitHub User Card</h1>
          <div>
            <input 
            type='text'
            onChange={this.handleChanges}
            value={this.state.handleSearch}
            placeholder='Enter a GitHub Handle here...'
            />
            <button onClick={this.fetchHandle}>Add User Card</button>
          </div>
        </MainHeader>
        
        <GitCard>
          <div className='top'>
            <img src={this.state.handle['avatar_url']}/>
            <h2>{this.state.handle.name}</h2>
          </div>
          <div className='bot'>
            <ul>
              <li># of PR: {this.state.handle['public_repos']}</li>
              <li># of FWs: {this.state.followers}</li>
              <li># of FG: {this.state.folowing}</li>
            </ul>
          </div>
        </GitCard>

      </Container>
    );
  }
}

export default App;
