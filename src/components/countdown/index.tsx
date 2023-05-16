import {
	NumberOfCycles,
	useConfigStore
} from '../../store/useConfigStore';
import { useEffect } from 'react';
import Play from '../svg/play';
import Reset from '../svg/reset';
import Stop from '../svg/stop';

function Countdown() {
	const {
		config: {
			isStop,
			minutes,
			seconds,
			minutesWork,
			secondsWork,
			step,
			currentCycle
		},
		setMinutes,
		setSeconds,
		setIsStop,
		setStep,
		setCurrentCycle
	} = useConfigStore();

	useEffect(() => {
		if (isStop) return;
		const interval = setInterval(() => {
			if (minutes === 0 && seconds === 0) return;
			setSeconds(seconds - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [isStop, minutes, seconds, setSeconds]);

	useEffect(() => {
		if (isStop) return;
		if (seconds === 0) {
			if (minutes === 0) {
				const nextStep =
					currentCycle === 6 ? 3 : step === 2 ? 1 : step + 1;
				const updatedCycle = currentCycle + 1;
				setCurrentCycle(updatedCycle as NumberOfCycles);
				setCurrentCycle(updatedCycle as NumberOfCycles);
				setStep(nextStep);
				setIsStop(false);

				return;
			} else {
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}
	}, [seconds, minutes, setIsStop, setMinutes, setSeconds, isStop]);

	useEffect(() => {
		setMinutes(minutesWork);
		setSeconds(0);
	}, [minutesWork]);

	const segundosString = seconds.toString().padStart(2, '0');
	const minutosString = minutes.toString().padStart(2, '0');
	return (
		<>
			<section className="flex flex-row justify-center gap-2 mb-4">
				<div className="flex flex-col p-2 bg-orange-400 text-white rounded-box  ">
					<span className="countdown font-mono text-8xl font-semibold">
						<span style={{ '--value': minutosString } as any}></span>
					</span>
					min
				</div>
				<div className="flex flex-col p-2 bg-orange-400 text-white rounded-box  ">
					<span className="countdown font-mono text-8xl font-semibold">
						<span style={{ '--value': segundosString } as any}></span>
					</span>
					sec
				</div>
			</section>

			{isStop ? (
				<div className="flex flex-row justify-around">
					<button
						className="btn btn-active me-4 bg-[#5114B9]"
						onClick={() => {
							setIsStop(false);
						}}>
						<Play height={20} width={20} />
					</button>
					{(minutes !== minutesWork || seconds !== secondsWork) && (
						<button
							className="btn btn-active  bg-[#5114B9]"
							onClick={() => {
								setMinutes(minutesWork);
								setSeconds(secondsWork);
								setIsStop(false);
								setCurrentCycle(1);
								setStep(1);
							}}>
							<Reset height={20} width={20} />
						</button>
					)}
				</div>
			) : (
				<div className="flex flex-row">
					<button
						className="btn btn-active  bg-[#5114B9]"
						onClick={() => {
							setIsStop(true);
						}}>
						<Stop height={20} width={20} />
					</button>
				</div>
			)}
		</>
	);
}

export default Countdown;
