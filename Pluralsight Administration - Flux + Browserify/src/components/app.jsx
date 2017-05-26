import React from 'react';
import Header from './common/header.jsx';

var $ = require('jquery');
var jQuery = $;

class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="l-margin">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;