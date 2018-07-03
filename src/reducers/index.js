import {combineReducers} from 'redux'
import Post from './posts'
import Users from './users'

const allReducers = combineReducers({
	posts: Post,
	users: Users
});

export default allReducers