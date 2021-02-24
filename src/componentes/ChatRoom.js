import React, {Component} from 'react';
import fire from '../fire'


class ChatRoom extends Component {

    constructor(){
        super();
        this.state={
            Ascensor2: '',
            Parqueadero2:'',
            Ventana2:'',
            Puerta2:'',
            Ascensor2: '',
            Parqueadero2:'',
            Ventana2:'',
            Puerta2:'',
        }

    }
    UpdateMessage(e){
        this.setState({Ascensor: e.target.value});
        console.log(this.state.message);


    }
    UpdateMessage3(e){
        this.setState({Parqueadero: e.target.value});
        console.log(this.state.messages);


    }
    UpdateMessage4(e){
        this.setState({Ventana: e.target.value});
        console.log(this.state.messages);


    }
    UpdateMessage5(e){
        this.setState({Puerta: e.target.value});
        console.log(this.state.messages);


    }
    componentDidMount(){
                
                 fire.database().ref('HOUSE/Ascensor').on('value' , snap =>{
                const currentmessages = snap.val();
                if(currentmessages !== null){
                    this.setState({
                    Ascensor: currentmessages
                    });
                }
            });
            fire.database().ref('HOUSE/Ascensor2').on('value' , snap =>{
                const currentmessages9 = snap.val();
                if(currentmessages9 !== null){
                    this.setState({
                    Ascensor2: currentmessages9
                    });
                }
            });
            fire.database().ref('HOUSE/Parqueadero').on('value' , snap =>{
                const currentmessages3 = snap.val();
                if(currentmessages3 !== null){
                    this.setState({
                    Parqueadero: currentmessages3
                    });
                }
            });
            fire.database().ref('HOUSE/Parqueadero2').on('value' , snap =>{
                const currentmessages8 = snap.val();
                if(currentmessages8 !== null){
                    this.setState({
                    Parqueadero2: currentmessages8
                    });
                }
            });
            fire.database().ref('HOUSE/Ventana').on('value' , snap =>{
                const currentmessages4 = snap.val();
                if(currentmessages4 !== null){
                    this.setState({
                        Ventana: currentmessages4
                    });
                }
            });
            fire.database().ref('HOUSE/Ventana2').on('value' , snap =>{
                const currentmessages7 = snap.val();
                if(currentmessages7 !== null){
                    this.setState({
                        Ventana2: currentmessages7
                    });
                }
            });
            fire.database().ref('HOUSE/Puerta').on('value' , snap =>{
                const currentmessages5 = snap.val();
                if(currentmessages5 !== null){
                    this.setState({
                    Puerta: currentmessages5
                    });
                }
            });
            fire.database().ref('HOUSE/Puerta2').on('value' , snap =>{
                const currentmessages6 = snap.val();
                if(currentmessages6 !== null){
                    this.setState({
                    Puerta2: currentmessages6
                    });
                }
            });
    }

    handleSubmit(e){
            e.preventDefault();
            const list = this.state.messages
            const newMessage ={
                Ascensor: this.state.Ascensor,
                Parqueadero: this.state.Parqueadero,
                Ventana: this.state.Ventana,
                Puerta: this.state.Puerta,
                Ascensor2: this.state.Ascensor2,
                Parqueadero2: this.state.Parqueadero2,
                Ventana2: this.state.Ventana2,
                Puerta2: this.state.Puerta2
            };
        fire.database().ref('HOUSE/').set(newMessage);

    }
    enviar(e){

    }
    render(){
        return(
            <div>
                Inserte 1 para prenser y 0 para apagar
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group col-md-2">
                    Ascensor
                <input 
                    type="text"
                    value={this.state.Ascensor}
                    onChange={this.UpdateMessage.bind(this)}
                    />
                    {this.state.Ascensor2}
                    </div>
                    <div className="form-group col-md-2"> 
                    Parqueadero
                    <input 
                    type="text"
                    value={this.state.Parqueadero}
                    onChange={this.UpdateMessage3.bind(this)}
                    />
                    {this.state.Parqueadero2}
                    </div>
                    <div className="form-group col-md-2"> 
                    Ventana
                    <input 
                    type="text"
                    value={this.state.Ventana}
                    onChange={this.UpdateMessage4.bind(this)}
                    />
                    {this.state.Ventana2}
                    </div>
                    <div className="form-group col-md-2"> 
                    Puerta
                    <input 
                    type="text"
                    value={this.state.Puerta}
                    onChange={this.UpdateMessage5.bind(this)}
                    />
                    {this.state.Puerta2}
                    </div>
                    <button>
                        Send
                    </button>
                </form>
            </div>
      
      );
    }
  }
  export default ChatRoom;