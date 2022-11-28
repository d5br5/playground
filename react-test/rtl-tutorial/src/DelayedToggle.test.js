import { findByText, fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import DelayedToggle from "./DelayedToggle";

describe("<DelayedToggle/>", () => {
	it("reveals text when toggle is ON", async () => {
		render(<DelayedToggle />);
		const toggleButton = screen.getByText("toggle");
		fireEvent.click(toggleButton);
		await waitFor(() => screen.getByText("야호!!"), { timeout: 3000 });
	});
	it("toggles text ON/OFF", async () => {
		render(<DelayedToggle />);
		const toggleButton = screen.getByText("toggle");
		fireEvent.click(toggleButton);
		const text = await waitFor(() => screen.getByText("ON"), { timeout: 3000 });
		expect(text).toHaveTextContent("ON");
	});
});
