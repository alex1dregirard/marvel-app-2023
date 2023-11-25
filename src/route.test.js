import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "./routes";
import { render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

describe('route ', () => {
    it('render characters pages', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
        });

        await act(async () => {
            render(<RouterProvider router={router} />);
        });

        // expect that home link is active
        const homeLink = screen.getByRole('link', { name: 'Home' });
        expect(homeLink).toHaveClass('active');

        // expect that h2 element is in the document with the text "Marvel Characters"
        const h2Element = screen.getByRole('heading', { level: 2, name: 'Marvel Characters' });
        expect(h2Element).toBeInTheDocument();
    });

    it('render character detail page', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/characters/1009175'],
        });

        await act(async () => {
            render(<RouterProvider router={router} />);
        });

        // expect that h2 element is in the document with the text "Beast"
        const h2Element = screen.getByRole('heading', { level: 2, name: 'Beast' });
        expect(h2Element).toBeInTheDocument();
    });

    it('render About page', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/about'],
        });

        await act(async () => {
            render(<RouterProvider router={router} />);
        });

        // expect that about link is active
        const aboutLink = screen.getByRole('link', { name: 'About' });
        expect(aboutLink).toHaveClass('active');

        // expect that h2 element is in the document with the text "About"
        const h2Element = screen.getByRole('heading', { level: 2, name: 'About Us' });
        expect(h2Element).toBeInTheDocument();
    });

    it('render Contact page', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/contact'],
        });

        await act(async () => {
            render(<RouterProvider router={router} />);
        });

        // expect that contact link is active
        const contactLink = screen.getByRole('link', { name: 'Contact' });
        expect(contactLink).toHaveClass('active');

        // expect that h2 element is in the document with the text "Contact"
        const h2Element = screen.getByRole('heading', { level: 2, name: 'Contact Us' });
        expect(h2Element).toBeInTheDocument();
    });
});