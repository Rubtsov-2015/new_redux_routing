import React, {Component} from 'react'
import PostsList from '../containers/postsList'
import UserPosts from './UserPosts'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from "react-redux";
import {getUsers} from "../action/users";
import {getPost} from "../action/posts";
import Post from './CommentsPost'

class App extends Component {
	async componentDidMount(){
		await this.props.getPost();
		await this.props.getUsers();
	}

	render() {
		return (
			<div>
				<h2>Posts</h2>
				<Switch>
					<Route exact path="/" component={PostsList}/>
					{/*<Route exact path="/user" render={(id) => <UserPosts id={id} />}  />*/}
					<Route path="/user/:id" component={UserPosts}/>
					<Route path="/post/:id" component={Post}/>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		posts: state.posts,
		users: state.users
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPost: () => {
			dispatch(getPost());
		},
		getUsers: () => {
			dispatch(getUsers());
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))