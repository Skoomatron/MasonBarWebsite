import React from 'react';
import Sandwiches from './Sandwiches.jsx';
import Shareables from './Shareables.jsx';
import Taters from './Taters.jsx';
import Soups from './Soups.jsx';

const Menu = (props) => {

  const allItems = props.state.menu;

  const taters = [];
  const sandwiches = [];
  const shareables = [];
  const soups = [];

  const menuFilter = () => {
    allItems.forEach((item, index) => {
      if (item.category === 'Sandwiches') {
        sandwiches.push(item);
      } else if (item.category === 'Taters') {
        taters.push(item);
      } else if (item.category === 'SoupsSalads') {
        soups.push(item);
      } else if (item.category === 'Shareables') {
        shareables.push(item);
      }
    });
  }

  menuFilter();

  return (
    <div>
      <Shareables shareables={shareables}/>
      <Soups soups={soups}/>
      <Taters taters={taters}/>
      <Sandwiches sandwiches={sandwiches}/>
    </div>
  )
}

export default Menu;