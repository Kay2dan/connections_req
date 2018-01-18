import "../styles/App.css";
import React, { Component } from 'react';
import { List as iList,
         remove } from "immutable";
import moment from "moment";
import Button from "./Button";
import ConnectionReq from "./ConnectionReq";
import names from "../data/data";

class App extends Component {

   constructor(){
      super();
      this.state = {
         // extendible with additional props
         connections : iList([
            {
               by : "dummy",
               date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
               status : "pending..." // change state on approved & perform other action 
            }
         ])
      };
      this.connectionReqHandler = this.connectionReqHandler.bind( this );
      this.removeConnectionReqHandler = this.removeConnectionReqHandler.bind( this );
   }

   // onmount, we file a request just to show something on screen
   componentWillMount(){
      this.connectionReqHandler();
   }

   // remove the index request from state.connections
   removeConnectionReqHandler( index ){
      this.setState({
         connections : this.state.connections.delete( index )
      });
   }

   // evHandler for btn which generates random req.
   connectionReqHandler(){
      const newConnectionReq = this.generateConnectionReq();
      this.setState({
         connections : this.state.connections.push( newConnectionReq )
      });
   }

   // func which generates the random connection req. 
   // called by connectionReqHandler above
   generateConnectionReq(){
      const max = names.length - 1;
      const randValue = Math.floor( Math.random() * ( max - 0 + 1 ) + 0);
      return({
         by : names[ randValue ],
         date: moment( new Date()).format("MMMM Do YYYY, h:mm:ss a"),
         status : "pending..."
      });
   }

   render() {
      return (
         <div className = "app">
            <Button btnType = "generator"
                    size = "large"
                    title = "Generate a Random Request"
                    onClickEvHandler = { this.connectionReqHandler }/>
            <div className = "connectionReqSection">
               { this.state.connections.map(( req, i ) => {
                  return(
                     <ConnectionReq by = { req.by }
                                    date = { req.date }
                                    status = { req.status }
                                    index = { i }
                                    onClickEvHandlerForReject = { this.removeConnectionReqHandler }
                                    key = { `connection${ i }` }/>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default App;
