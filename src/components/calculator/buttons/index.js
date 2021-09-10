import React from 'react';
import Equal from './equal';
import LeftPanel from './leftPanel';
import Operators from './operators';

const Buttons = ({ ...props }) => (
  <div className="buttons">
    <Operators {...props} />
    <LeftPanel {...props} />
    <Equal {...props} />
  </div>
);

export default Buttons;
