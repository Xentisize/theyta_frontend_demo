import { FaRegComment } from "react-icons/fa"

const HighlightBtnGroup = ({ saveAndRestoreSelection, hidden, layout }) => {
	return (
		<div
			hidden={hidden}
			style={{
				position: layout.position,
				left: layout.left,
				top: layout.top,
				width: `${layout.widthInPixel}px`,
				height: `${layout.heightInPixel}px`,
			}}
		>
			<div className="flex -translate-y-4 flex-col items-center">
				<label htmlFor="commentBox" className="modal-button btn btn-primary" onClick={saveAndRestoreSelection}>
					<FaRegComment />
				</label>
				{/* <div className="z-[500] -mt-2 h-6 w-5 bg-black"></div> */}
			</div>
		</div>
	)
}

export default HighlightBtnGroup
