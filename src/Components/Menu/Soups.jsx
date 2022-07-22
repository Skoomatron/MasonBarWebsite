import React from 'react';

const Soups = (props) => {

  return (
    <div>
    <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Salad Jars and Chili</h2>
    {
      props.soups.map((item, index) => {
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

export default Soups;