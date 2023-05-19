import './App.css';
import Countdown from './components/countdown';
import Jonarroh from './components/svg/jonarroh';
import Steps from './components/ui/steps';

function App() {
	return (
		<main className="w-screen h-screen bg-violet-950 text-white ">
			<div className="flex flex-row items-center justify-around w-screen h-1/6 px-4 ">
				<div className="flex flex-row items-center justify-center">
					<h1 className="text-4xl font-semibold me-2">Pomidori</h1>
					<img
						src="/pomidori.svg"
						alt="logo"
						width={45}
						height={45}
					/>
				</div>
				<div className="flex flex-row items-center justify-center gap-x-2">
					<p className="me-2">Made by Jonarroh</p>
					<Jonarroh />
				</div>
			</div>
			<div className="flex flex-col items-center justify-center w-screen h-4/6 gap-y-4">
				<Steps />
				<Countdown />
			</div>
		</main>
	);
}

export default App;
