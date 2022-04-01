import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, Destination } from './pages';

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/destination' element={<Destination />} />
			</Routes>
		</div>
	);
};
