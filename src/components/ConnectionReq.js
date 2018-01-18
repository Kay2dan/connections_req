import React from "react";
import Button from "./Button";

const ConnectionReq = ({ by, date, status, index, onClickEvHandlerForReject }) => {
   const buttonsCollection = [{
         btnType : "approve",
         size : "small",
         title : "Approve",
         onClickEvHandler : () => console.log( "approved!" )
      }, {
         btnType: "reject",
         size: "small",
         title: "Reject",
         onClickEvHandler: () => onClickEvHandlerForReject( index )
      }
   ]
   return(
      <div className = "connectionReq">
         <div className = "connectionOriginator">{ by }</div>
         <div className = "connectionDate">{ date }</div>
         <div className = "connectionStatus">{ status }</div>
         <div className = "buttonSection">
            { buttonsCollection.map(( btn, i ) => {
               return(
                  <Button btnType = { btn.btnType }
                        size = { btn.size }
                        title = { btn.title }
                        onClickEvHandler = { btn.onClickEvHandler }
                        key = { `btn${ i }` }/>
               );
            }) }
         </div>
      </div>     
   );
};

export default ConnectionReq;