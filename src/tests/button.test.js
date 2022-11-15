import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import Button from "../components/button";


afterEach(cleanup);
test('render button contact', () => {
    render(<Button type="contact" text="Contact Us" enabled={false} />);

    const buttonClass = Button("contact", "Contact Us").type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(235, 241, 239)");
    expect(style.color).toBe("rgb(19, 88, 70)");
});

test('renders button notes enabled', () => {
    render(<Button type="notes" text="View Notes" enabled={true} />);

    const buttonClass = Button("notes", "View Notes", true).type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(238, 249, 242)");
    expect(style.color).toBe("rgb(33, 33, 33)");
});

test('renders button notes disabled', () => {
    render(<Button type="notes" text="View Notes" enabled={false} />);

    const buttonClass = Button("notes", "View Notes", false).type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(238, 249, 242)");
    expect(style.color).toBe("rgb(121, 146, 131)");
});
