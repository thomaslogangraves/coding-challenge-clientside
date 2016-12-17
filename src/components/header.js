require('../css/header.css')
import React, {Component} from 'react';

class Header extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="header">
				<h1>Referly</h1>
			</div>
		)
	}
};

export default Header;
