import React from "react";

import './custom-component.styles.scss';

const CustomButotn = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButotn;
