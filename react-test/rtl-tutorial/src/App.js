import Counter from "./Counter";
import DelayedToggle from "./DelayedToggle";
import Profile from "./Profile";
import UserProfile from "./UserProfile";

function App() {
	return (
		<div className="App">
			<Profile username="doh" name="kim dohyung" />
			<Counter />
			<DelayedToggle />
			<UserProfile id={2} />
		</div>
	);
}

export default App;
