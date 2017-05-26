import React from "react";
import {Route, Switch, NotFoundRoute} from 'react-router-dom';
import App from "./components/app.jsx";
import HomePage from "./components/homePage.jsx";
import AboutPage from "./components/about/aboutPage.jsx";
import AuthorPage from "./components/authors/authorPage.jsx";
import ManageAuthorPage from "./components/authors/manageAuthorPage.jsx";
import NotFoundPage from "./components/notFoundPage.jsx";

var routes = (
	<App>
		<Switch>
			<Route name="home" exact path="/" component={HomePage} />
			<Route name="authors" exact path="/authors" component={AuthorPage} />
			<Route name="addAuthor" exact path="/author" component={ManageAuthorPage} />
			<Route name="manageAuthor" path="/author/:id" component={ManageAuthorPage} />
			<Route name="about" exact path="/about" component={AboutPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;