import { useEffect } from 'react';
import { useConfigStore } from '../store/useConfigStore';

export function useNextStep() {
	const {
		setMinutes,
		setMinutesWork,
		setSeconds,
		setSecondsWork,
		setCurrentCycle,
		setStep,
		config: { step, minutesWork, secondsWork }
	} = useConfigStore();

	useEffect(() => {
		let stepData = [
			{ minutes: minutesWork, seconds: secondsWork, step: 1 },
			{ minutes: 5, seconds: secondsWork, step: 2 },
			{ minutes: 15, seconds: secondsWork, step: 3 }
		];

		const currentStepData = stepData.find(data => data.step === step);

		if (currentStepData) {
			const { minutes, seconds } = currentStepData;
			setMinutesWork(minutes);
			setMinutes(minutes);
			if (secondsWork === 0) {
				setSeconds(59);
			}
			setSeconds(seconds);
			setSecondsWork(seconds);
		}
	}, [
		step,
		setMinutes,
		setMinutesWork,
		setSeconds,
		setSecondsWork,
		setCurrentCycle,
		setStep
	]);
}
