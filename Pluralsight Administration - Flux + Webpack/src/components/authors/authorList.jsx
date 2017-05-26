import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthorActions from '../../actions/authorActions.jsx';
import toastr from 'toastr';

class AuthorList extends React.Component {
	createAuthorRow(author) {
		return(
			<tr key={author.id}>
				<td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
				<td>{author.firstName} {author.lastName}</td>
				<td><a href="javascript:void(0)" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
			</tr>
		);
	}

	deleteAuthor(id, event) {
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
	}

	render() {
		return(
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.authors.map(this.createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
}

AuthorList.propTypes = {
	authors: PropTypes.array.isRequired
}

export default AuthorList;