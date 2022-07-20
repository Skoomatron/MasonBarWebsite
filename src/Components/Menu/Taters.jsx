import React from 'react';

const Taters = (props) => {
  console.log(props.taters)
  return (
    <div>
      <h2>Taters</h2>
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