import { useConfigStore } from '../../../store/useConfigStore';

function Steps() {
	const {
		setStep,
		config: { step }
	} = useConfigStore();

	const handleStepClick = (selectedStep: number) => {
		setStep(selectedStep);
	};
	console.log('step', step);

	return (
		<>
			<ul className="steps">
				<li
					className={`step cursor-pointer ${
						step === 1 ? 'step-warning' : ''
					}`}
					onClick={() => handleStepClick(1)}>
					Work
				</li>
				<li
					className={`step cursor-pointer ${
						step === 2 ? 'step-warning' : ''
					}`}
					onClick={() => handleStepClick(2)}>
					Break
				</li>
				<li
					className={`step cursor-pointer ${
						step === 3 ? 'step-warning' : ''
					}`}
					onClick={() => handleStepClick(3)}>
					Long break
				</li>
			</ul>
		</>
	);
}

export default Steps;
