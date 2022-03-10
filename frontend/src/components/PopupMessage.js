import React from 'react';

const PopupMessage = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button
          className='close-btn btn'
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};

export default PopupMessage;
