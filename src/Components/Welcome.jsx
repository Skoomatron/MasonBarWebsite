import React from "react";

const Welcome = (props) => {

  return (
    <div>
      <button
        onClick={() => {
          props.clickHandler();
        }}
      >
        Test Button
      </button>
    </div>
  )
}

export default Welcome;