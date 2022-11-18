import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import Button from "../components/Blocks/Button";


afterEach(cleanup);


/*Check that the colors of the button component change according to style*/
test('Render the login button component with the correct colors', () => {
    render(<Button type="login" text="LOGIN" />);

    const buttonClass = Button("login", "LOGIN").type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(19, 88, 70)");
    expect(style.color).toBe("rgb(235, 241, 239)");
});

test('Render the contact button component with the correct colors', () => {
    render(
        <Button type="contact" text="Contact Us" />
    );

    const buttonClass = Button("contact", "Contact Us").type.styledComponentId;

    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(235, 241, 239)");
    expect(style.color).toBe("rgb(19, 88, 70)");
});

test('Render the active notes button component with the correct colors', () => {
    render(
        <Button type="notes" text="View Notes" enabled={true}
        />);

    const buttonClass = Button("notes", "View Notes", true).type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(238, 249, 242)");
    expect(style.color).toBe("rgb(33, 33, 33)");
});

test('Render the inactive notes button component with the correct colors', () => {
    render(
        <Button type="notes" text="View Notes" enabled={false} />
    );

    const buttonClass = Button("notes", "View Notes", false).type.styledComponentId;
    const ButtonRoot = document.getElementsByClassName(buttonClass);
    const style = window.getComputedStyle(ButtonRoot[0]);

    expect(style.backgroundColor).toBe("rgb(238, 249, 242)");
    expect(style.color).toBe("rgb(121, 146, 131)");
});
