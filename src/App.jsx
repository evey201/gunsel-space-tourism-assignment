import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Destination, Crew } from './pages';

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
			</Routes>
		</div>
	);
};
