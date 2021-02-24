import React, {Component} from 'react';
import ChatRoom from  './componentes/ChatRoom';


class App extends Component {


  render(){
    return (
      <div className="HOUSE">
        <div className="jumbotron">
          <p className="lead text-center"> CASA INTELIGENTE</p>
        </div>
        <ChatRoom/>
      </div>
    );
  }
}

export default App;