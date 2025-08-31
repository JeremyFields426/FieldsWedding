import { useLocation, useNavigate } from "react-router-dom";

export type SwitchPageFn = (page: PAGE) => void;

export enum PAGE {
	NOT_FOUND_PAGE = "/*",
	HOME_PAGE = "/",
	RSVP_PAGE = "/rsvp",
	VENUE = "/venue",
	CONTACT = "/contact",
	GIFTS = "/gifts",
	CAPTURE = "/capture",
	ADMIN = "/admin69"
}

/**
 * Determines the current page based on the pathname contained in the URL of the browser
 * and creates a function for changing the current route.
 *
 * @returns The current page of the application and a function for changing the page.
 */
export function usePage() {
	const NavigateFn = useNavigate();
	const location = useLocation();

	const page = location.pathname as PAGE;
	const SetPageFn = (page: PAGE) => NavigateFn(page);

	return { page, SetPageFn };
}

/**
 * @returns A function for changing the page back to the home screen when the user is not logged in
 * and changing the page back to the application page when the user is logged in.
 */
export function useGoHome() {
	const { SetPageFn } = usePage();

	let GoHomeFn = () => SetPageFn(PAGE.HOME_PAGE);

	return { GoHomeFn };
}
