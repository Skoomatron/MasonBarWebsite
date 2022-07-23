import React from 'react';

const Sandwiches = (props) => {

  return (
    <div className="menuSectionContainer">
    <h2 className="menuHeader">Gourmet Sandwiches</h2>
    {
      props.sandwiches.map((item, index) => {
        return (

          <div className="menuItemContainer" key={item + index}>
            {item.name}
            <br></br>
            <div className="menuDescription">{item.description}</div>
            <br></br>
            <div style={{fontStyle: 'italic'}}>{item.price}</div>
          </div>
        )

      })
    }
  </div>
  )
}

export default Sandwiches;