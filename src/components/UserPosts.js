import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";



const userPosts = (props) =>{

	return(
		<Fragment>
			<ul>
				{props.posts
					.filter(post => +props.match.params.id === post.userId)
					.map((i) => <li key={i.id}>
							<Link to={`/post/${i.id}`}>{i.title}</Link>
						</li>)
				}
			</ul>
		</Fragment>
	)
}

function mapStateToProps (state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(userPosts)