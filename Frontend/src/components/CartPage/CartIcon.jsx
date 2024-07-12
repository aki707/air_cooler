import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const CartIcon = () => {
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => {
    setItemCount(itemCount + 1);
  };

  const badgeStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const afterStyle = {
    content: `'${itemCount}'`,
    fontSize: '12px',
    color: '#fff',
    background: 'red',
    borderRadius: '50%',
    padding: '0 5px',
    position: 'absolute',
    left: '-8px',
    top: '-10px',
    opacity: '0.9',
  };

  return (
    <div>
      <i className="fa fa-shopping-cart fa-lg" style={badgeStyle}>
        {itemCount > 0 && <span className="badge" style={afterStyle}></span>}
      </i>
      {/* <button onClick={addItem}>Add Item</button> */}
    </div>
  );
};

export default CartIcon;
