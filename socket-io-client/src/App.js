import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4001'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    console.log(socket);
    socket.on("FromAPI", data => {
      console.log('yo got data from socket: ', data);
      this.setState({
        response : data
      })
    });
  }

  render() {
    const { response } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        { response 
          ? <p> The temperature in Florence is: {response} F</p>
          : <p>Loading...</p>
        }
      </div>
    );

  }
}

export default App;