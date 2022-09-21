import React from 'react';

const Sidebar = (props) => {

  return (
    <div className="welcomeSidebar">
      {props.state.images.map((image, index) => {
        return (
          <div key={image.photoURL + index} className="imageContainer">
            <div
              key={image + index}
              // style={{transform: `${test}`}}
              className="imageMap"
              style={{backgroundImage: `url(${image.photoURL})`}}
              ></div>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar;