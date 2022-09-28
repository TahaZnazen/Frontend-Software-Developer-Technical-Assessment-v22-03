import PropTypes from 'prop-types';
import React from 'react';

const Main = ({ children }) => (<div>{children}</div>);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
