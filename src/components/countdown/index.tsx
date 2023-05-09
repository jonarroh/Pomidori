import { useConfigStore } from '../../store/useConfigStore';
import { useEffect } from 'react';
import Play from '../svg/play';
import Reset from '../svg/reset';
import Stop from '../svg/stop';

function Countdown() {
	const {
		config: { isStop, minutes, seconds, minutesWork, secondsWork },
		setMinutes,
		setSeconds,
		setIsStop
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
				setIsStop(true);
			} else {
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}
	}, [seconds, minutes, setIsStop, setMinutes, setSeconds, isStop]);

	useEffect(() => {
		setIsStop(true);
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
			{/* <h2 className="text-7xl font-semibold">
				{minutosString}:{segundosString}
			</h2> */}

			{isStop ? (
				<div className="flex flex-row justify-around">
					<button
						className="btn btn-active btn-accent me-4"
						onClick={() => {
							setIsStop(false);
						}}>
						<Play height={20} width={20} />
					</button>
					{(minutes !== minutesWork || seconds !== secondsWork) && (
						<button
							className="btn btn-active btn-accent "
							onClick={() => {
								setMinutes(minutesWork);
								setSeconds(secondsWork);
								setIsStop(false);
							}}>
							<Reset height={20} width={20} />
						</button>
					)}
				</div>
			) : (
				<div className="flex flex-row">
					<button
						className="btn btn-active btn-primary"
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
