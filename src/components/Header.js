import React from 'react';

//create stateless functional component for Header

const Header = (props) => {
			return (
				<header className='top'>
					<h1>Catch 
						<span className='ofThe'>of</span>
						<span className='the'>the</span>
						Day
					</h1>
					<h3 className='tagline'><span>{props.tagline}</span></h3>
				</header>
			);

	}



export default Header;
