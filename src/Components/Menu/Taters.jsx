import React from 'react';

const Taters = (props) => {
  return (
    <div>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Baked Potatoes</h2>
      {
        props.taters.map((item, index) => {
          return (

            <div key={item + index} style={{border: 'solid 3px black'}}>
              {item.name}
              <div style={{border: 'solid 2px black', width: 'fit-content'}}>{item.description}</div>
              <div style={{fontStyle: 'italic'}}>{item.price}</div>
            </div>
          )

        })
      }
    </div>
  )
}

export default Taters;