import { PAGE, usePage } from "../hooks/usePage";
import { AdminPage } from "../pages/AdminPage";
import { PhotosPage } from "../pages/GalleryPage";
import { GiftsPage } from "../pages/GiftsPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RSVPPage } from "../pages/RSVPPage";
import { ItineraryPage } from "../pages/ItineraryPage";

export function AppBody() {
	const { page } = usePage();

	switch (page) {
		case PAGE.HOME_PAGE:
			return <HomePage />;
		case PAGE.RSVP_PAGE:
			return <RSVPPage />
		case PAGE.ITINERARY_PAGE:
			return <ItineraryPage />
		case PAGE.GIFTS_PAGE:
			return <GiftsPage />
		case PAGE.GALLERY_PAGE:
			return <PhotosPage />
		case PAGE.ADMIN_PAGE:
			return <AdminPage />
	}

	return <NotFoundPage />;
}
