import React, {Component, Fragment} from 'react';
import request from "../lib/request";

const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=';


class Posts extends Component {

	constructor(props){
		super(props);
		this.state = {
			postsComments: []
		}
	}

	componentDidMount() {
		request(`${urlComments}${this.props.match.params.id}`)
			.then((postsComments) => {
				this.setState(
					{postsComments}
				)
			});
	}

	navigateBack = () => {
		this.props.history.goBack();
	};

	render() {
		// const comments = request(urlComments+this.props.match.params.id);
		console.log(this.props);
		return (
			<Fragment>
				<ul>
					{this.state.postsComments.map((comment, index) =>
						<li key={comment.id}>
							<b>Comment:{index+1}</b><br/>
							{comment.name} <br/>
							{comment.body}
						</li>
					)}
				</ul>
				<button
					onClick={this.navigateBack}>
					Back
				</button>
			</Fragment>
		)

	}

}



export default Posts