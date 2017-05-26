import React from 'react';
import Input from '../common/textInput.jsx';
import PropTypes from 'prop-types';

class AuthorForm extends React.Component {
	render() {
		return(
			<form>
				<Input
					name="firstName"
					label="First Name"
					value={this.props.author.firstName}
					onChange={this.props.setAuthorState}
					error={this.props.errors.firstName} />

				<Input
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.setAuthorState}
					error={this.props.errors.lastName} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.saveAuthor} />
			</form>
		);
	}
}

AuthorForm.propTypes = {
	author: PropTypes.object.isRequired,
	setAuthorState: PropTypes.func.isRequired,
	saveAuthor: PropTypes.func.isRequired,
	errors: PropTypes.object
}

export default AuthorForm;