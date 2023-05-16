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
		config: { step }
	} = useConfigStore();

	useEffect(() => {
		let stepData = [
			{ minutes: 0, seconds: 5, step: 1 },
			{ minutes: 0, seconds: 5, step: 2 },
			{ minutes: 0, seconds: 2, step: 3 }
		];

		const currentStepData = stepData.find(data => data.step === step);

		if (currentStepData) {
			const { minutes, seconds } = currentStepData;
			setMinutesWork(minutes);
			setMinutes(minutes);
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
