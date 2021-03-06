import { useState } from "react"

const CommentBox = ({ updateCommentList, toggleCommentBox, toggleBtnGroup, selectedRange }) => {
	const [comment, setComment] = useState("")

	const handleCommentSubmit = (e) => {
		// e.preventDefault()

		if (comment) {
			const uniqueId = Date.now()
			wrapSelectedTextWithId(uniqueId)

			updateCommentList({
				id: uniqueId,
				author: "Me",
				message: comment,
			})

			toggleBtnGroup()
			toggleCommentBox()

			reset()
		}
	}

	const handleCommentChange = (e) => {
		setComment(e.target.value)
	}

	const reset = () => {
		setComment("")
	}

	const wrapSelectedTextWithId = (uniqueId) => {
		const markWrapper = document.createElement("mark")
		markWrapper.setAttribute("id", uniqueId)
		markWrapper.setAttribute(
			"class",
			"underline decoration-sky-500 underline-offset-4 decoration-2 text-red-400 decoration-dotted bg-inherit"
		)
		selectedRange.surroundContents(markWrapper)
	}

	return (
		<>
			<input type="checkbox" id="commentBox" className="modal-toggle" />
			<div className="modal-bottom sm:modal-middle modal">
				<div className="modal-box">
					<div className="form-control">
						<label className="label">
							<span className="label-text font-semibold">Speak aloud</span>
						</label>
						<textarea
							id="commentBox"
							placeholder="Add comment"
							onChange={handleCommentChange}
							value={comment}
							className="textarea-primary textarea"
						></textarea>
					</div>
					<div className="modal-action">
						<label htmlFor="commentBox" className="btn btn-primary" onClick={handleCommentSubmit}>
							Leave Comment
						</label>
						<label htmlFor="commentBox" className="btn btn-warning">
							Cancel
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default CommentBox
