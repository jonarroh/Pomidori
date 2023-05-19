import { useRef } from 'react';

const useSound = () => {
	const audioRef = useRef<HTMLAudioElement>(null);

	const playSound = () => {
		const audioElement = audioRef.current;
		if (audioElement) {
			audioElement.currentTime = 0; // Reinicia el sonido si se está reproduciendo actualmente.
			audioElement.play();
		}
	};

	return { audioRef, playSound };
};

export default useSound;
