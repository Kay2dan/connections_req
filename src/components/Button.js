import React from "react";

const Button = ({ btnType, size, title, onClickEvHandler }) => {
   return(
      <button className = { `${ btnType } ${ size }` }
              type = "button"
              onClick = {() => onClickEvHandler() }>
         { title }
      </button>
   );
};

export default Button;