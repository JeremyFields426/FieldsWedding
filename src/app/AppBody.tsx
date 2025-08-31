import { PAGE, usePage } from "../hooks/usePage";
import { AdminPage } from "../pages/AdminPage";
import { CapturePage } from "../pages/CapturePage";
import { ContactPage } from "../pages/ContactPage";
import { GiftsPage } from "../pages/GiftsPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RSVPPage } from "../pages/RSVPPage";
import { VenuePage } from "../pages/VenuePage";

export function AppBody() {
	const { page } = usePage();

	switch (page) {
		case PAGE.HOME_PAGE:
			return <HomePage />;
		case PAGE.RSVP_PAGE:
			return <RSVPPage />
		case PAGE.VENUE:
			return <VenuePage />
		case PAGE.GIFTS:
			return <GiftsPage />
		case PAGE.CONTACT:
			return <ContactPage />
		case PAGE.CAPTURE:
			return <CapturePage />
		case PAGE.ADMIN:
			return <AdminPage />
	}

	return <NotFoundPage />;
}
