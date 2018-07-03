import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class PostsList extends Component {

	render() {
		return (
			<div>
				<ul>
					{this.props.users.length && this.props.users.map( user =>
						<li key={user.id}>
							<Link to={`/user/${user.id}`}>

								<span>{user.name} </span>
								<b>
									{this.props.posts.filter(post => user.id === post.userId).length}
								</b>
								<br />
								<br />
							</Link>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		users: state.users,
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostsList)