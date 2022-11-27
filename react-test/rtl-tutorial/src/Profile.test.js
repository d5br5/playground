import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", () => {
	it("matches snapshot", () => {
		const utils = render(<Profile username="doh" name="kim dohyung" />);
		expect(utils.container).toMatchSnapshot();
	});
	// it("shows the props correctly", () => {
	// 	const utils = render(<Profile username="doh" name="kim dohyung" />);
	// 	// utils.getByText("doh");
	// 	// utils.getByText("(kim dohyung)");
	// 	// utils.getByText(/kim/);
	// });
});
