import React from 'react';

const Soups = (props) => {

  return (
    <div className="menuSectionContainer">
    <h2 className="menuHeader">Salad Jars and Chili</h2>
    {
      props.soups.map((item, index) => {
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

export default Soups;