import { useEffect, useRef } from 'react';
import { useConfigStore } from '../../../store/useConfigStore';
import { toast } from 'react-hot-toast';

function Form() {
	const { setMinutesWork } = useConfigStore();
	const minuteInput = useRef<HTMLInputElement>(null);
	const secondInput = useRef<HTMLInputElement>(null);

	const checkNumber = (value: string) => {
		const number = Number(value);
		if (isNaN(number)) return 0;
		return number;
	};

	return (
		<div className="flex flex-col justify-start">
			<div className="flex flex-col gap-2 mb-4">
				<label htmlFor="work" className="block">
					{' '}
					Minutos
				</label>
				<input
					type="number"
					name="work"
					id="work"
					className="input input-bordered bg-primary"
					placeholder="25"
					min={0}
					ref={minuteInput}
					onChange={e => {
						//debounce para que no se ejecute cada vez que se escribe
						setTimeout(() => {
							const value = checkNumber(e.target.value);
							setMinutesWork(value);
						}, 500);
					}}
				/>
			</div>
			{/* <div className="flex flex-col gap-2 mb-4">
				<label htmlFor="sleep" className="block">
					{' '}
					Minutos de descanso
				</label>
				<input
					type="number"
					name="sleep"
					id="sleep"
					className="input input-bordered bg-primary"
					placeholder="5"
					min={0}
					ref={secondInput}
				/>
			</div> */}
		</div>
	);
}

export default Form;
