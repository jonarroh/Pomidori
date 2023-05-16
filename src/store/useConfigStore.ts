import { create } from 'zustand';

type Theme = 'dark' | 'light';
type Language = 'es' | 'en';
export type NumberOfCycles = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
interface Config {
	config: {
		theme: Theme;
		language: Language;
		WorkTime: boolean;
		ShortBreak: boolean;
		LongBreak: boolean;
		isStop: boolean;
		minutes: number;
		seconds: number;
		minutesWork: number;
		secondsWork: number;
		step: number;
		currentCycle: NumberOfCycles;
	};
	setConfig: (config: Config) => void;
	setTheme: (theme: Theme) => void;
	setLanguage: (language: Language) => void;
	setIsStop: (isStop: boolean) => void;
	setWorkTime: (WorkTime: boolean) => void;
	setShortBreak: (ShortBreak: boolean) => void;
	setLongBreak: (LongBreak: boolean) => void;
	setMinutes: (minutes: number) => void;
	setSeconds: (seconds: number) => void;
	setMinutesWork: (minutesWork: number) => void;
	setSecondsWork: (secondsWork: number) => void;
	setStep: (step: number) => void;
	setCurrentCycle: (currentCycle: NumberOfCycles) => void;
}

export const useConfigStore = create<Config>((set, get) => ({
	config: {
		theme: 'dark',
		language: 'es',
		WorkTime: true,
		ShortBreak: false,
		LongBreak: false,
		isStop: true,
		minutes: 0,
		seconds: 10,
		minutesWork: 0,
		secondsWork: 10,
		step: 1,
		currentCycle: 1
	},
	setConfig: (config: Config) =>
		set({
			config: { ...get().config, ...config }
		}),
	setTheme: (theme: Theme) =>
		set({ config: { ...get().config, theme } }),
	setLanguage: (language: Language) =>
		set({ config: { ...get().config, language } }),
	setIsStop: (isStop: boolean) =>
		set({ config: { ...get().config, isStop } }),
	setWorkTime: (WorkTime: boolean) =>
		set({ config: { ...get().config, WorkTime } }),
	setShortBreak: (ShortBreak: boolean) =>
		set({ config: { ...get().config, ShortBreak } }),
	setLongBreak: (LongBreak: boolean) =>
		set({ config: { ...get().config, LongBreak } }),
	setMinutes: (minutes: number) =>
		set({ config: { ...get().config, minutes } }),
	setSeconds: (seconds: number) =>
		set({ config: { ...get().config, seconds } }),
	setMinutesWork: (minutesWork: number) =>
		set({ config: { ...get().config, minutesWork } }),
	setSecondsWork: (secondsWork: number) =>
		set({ config: { ...get().config, secondsWork } }),
	setStep: (step: number) =>
		set({ config: { ...get().config, step } }),
	setCurrentCycle: (currentCycle: NumberOfCycles) =>
		set({ config: { ...get().config, currentCycle } })
}));
