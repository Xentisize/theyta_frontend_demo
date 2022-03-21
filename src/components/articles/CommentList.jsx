const CommentList = ({ comments }) => {
	return (
		<ul>
			{comments.map((comment) => (
				<li key={comment.id}>
					<a href={`#${comment.id}`}>
						<strong>????: {comment.message}</strong>
					</a>
				</li>
			))}
		</ul>
	)
}

export default CommentList
