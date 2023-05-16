import { useConfigStore } from '../store/useConfigStore';

export default function usePomodoroTime() {
	const stepsToDo = [1, 2, 1, 2, 3];

	const { setMinutes, setMinutesWork } = useConfigStore();

	// ahora calculamos el siguiente step en una funcion para tambien poder cambiar el minutesWork y actualizar los minutes
	const nextStep = (numberSteps: number) => {
		if (numberSteps === 1) {
			setMinutesWork(25);
			setMinutes(25);
		} else if (numberSteps === 2) {
			setMinutesWork(5);
			setMinutes(5);
		} else if (numberSteps === 3) {
			setMinutesWork(15);
			setMinutes(15);
		}
	};

	return {
		stepsToDo,
		nextStep
	};
}
