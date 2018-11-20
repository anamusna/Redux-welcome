import React from 'react';

const HelloWorld = ({ tech }) => {
	return (
		<div className="hello-world text-center">
			Hello World <span className="hello-world__tech">{tech}!</span>
		</div>
	);
};

export default HelloWorld;
