import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Components/Header';
import GitCard from './Components/GitCard';
import './App.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
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
        <Header handleChanges={this.state.handleChanges} handleSearch={this.state.handleSearch} fetchHandle={this.state.fetchHandle}/>
        <GitCard handle={this.state.handle} handleFollowers={this.state.handleFollowers}/>
      </Container>
    );
  }
}

export default App;
