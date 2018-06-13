import React from 'react';
import PropTypes from 'prop-types';

/** basic hello world component */
function HelloWorld({ message }) {
	return <div>Hello { message }</div>
}

HelloWorld.propTypes = {
	/** message to display */
	message: PropTypes.string,
};

HelloWorld.defaultProps = {
	message: "World",
}

export default HelloWorld;
