import React from 'react';

const Taters = (props) => {
  return (
    <div className="menuSectionContainer">
      <h2 className="menuHeader">Baked Potatoes</h2>
      {
        props.taters.map((item, index) => {
          return (

            <div className="menuItemContainer" key={item + index}>
              {item.name}
              <div className="menuDescription">{item.description}</div>
              <div style={{fontStyle: 'italic'}}>{item.price}</div>
            </div>
          )

        })
      }
    </div>
  )
}

export default Taters;