import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile/>", () => {
	it("matches snapshot", () => {
		const wrapper = mount(<Profile username="doh" name="kim doh" />);
		expect(wrapper).toMatchSnapshot();
	});
});
