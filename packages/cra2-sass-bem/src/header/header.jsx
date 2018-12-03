import React from 'react';
import './header.scss';

export const Header = () => (
  <div className="header">
    This is my Header
    <p className="header__cross">EUR/USD</p>
    <p className="header__cross updated">EUR/USD (On Update)</p>
  </div>
);
