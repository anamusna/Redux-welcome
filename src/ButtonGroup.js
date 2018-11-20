import React from 'react';
import { store } from './store';
import { setTechnology } from './actions';

const ButtonGroup = ({ technologies }) => {
	return (
		<div className="text-center">
			{technologies.map((tech, index) => {
				return (
					<button
						style={{ margin: '10px' }}
						key={`button-${index}`}
						value={tech}
						className="tech-btn btn-outline-secondary"
						onClick={dispatchButtonAction}>
						{tech}
					</button>
				);
			})}
		</div>
	);
};

const dispatchButtonAction = (event) => {
	const tech = event.target.value;
	store.dispatch(setTechnology(tech));
};

export default ButtonGroup;
