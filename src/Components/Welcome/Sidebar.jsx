import React from 'react';

const Sidebar = (props) => {

  return (
    <div className="welcomeSidebar">
      {props.state.images.map((image, index) => {
        console.log(image)
        return (
          <div className="imageContainer">
            <div className="imageMap" key={image + index} style={{backgroundImage: `url(${image.photoURL})`}}></div>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar;