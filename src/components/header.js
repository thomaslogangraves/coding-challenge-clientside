require('../css/header.css')
import React, {Component} from 'react';

class Header extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="header">
				<h1><a href="/">Referly</a></h1>
			</div>
		)
	}
};

export default Header;
