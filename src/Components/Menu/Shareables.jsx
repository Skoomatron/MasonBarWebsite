import React from 'react';

const Shareables = (props) => {

  return (
    <div className="menuSectionContainer">
    <h2 className="menuHeader">Shareables</h2>
    {
      props.shareables.map((item, index) => {
        return (
          <div className="menuItemContainer" key={item + index} >
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

export default Shareables;