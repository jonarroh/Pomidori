interface ModalProps {
	title: string;
	button: React.ReactNode;
	children: React.ReactNode;
}

function Modal({ title, button, children }: ModalProps) {
	return (
		<>
			{/* The button to open modal */}
			<label htmlFor="my-modal" className="btn btn-primary">
				{button}
			</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal ">
				<div className="modal-box bg-purple-900">
					<h3 className="font-bold text-lg">{title}</h3>
					{children}
					<div className="modal-action">
						<label htmlFor="my-modal" className="btn">
							cerrar
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
