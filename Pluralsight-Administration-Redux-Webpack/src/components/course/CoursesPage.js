import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
	constructor(props) {
		super(props);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	redirectToAddCoursePage() {
		this.props.history.push("/course");
	}

	render() {
		const {courses} = this.props;
		return (
			<div>
				<h1>Courses</h1>
				<input type="submit"
					className="btn btn-primary"
					value="Add Course"
					onClick={this.redirectToAddCoursePage} />
				<CourseList courses={courses} />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
