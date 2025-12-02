import { HealthAPI } from "./HealthAPI";
import { ImageAPI } from "./ImageAPI";
import { PhotoAPI } from "./PhotoAPI";
import { RSVPAPI } from "./RSVPAPI";

export enum CACHE {
	RSVP = "RSVP",
	PHOTO = "PHOTO",
	PING = "PING"
}

export abstract class Routes {
	public static readonly RSVPAPI = new RSVPAPI();
	public static readonly PhotoAPI = new PhotoAPI();
	public static readonly ImageAPI = new ImageAPI();
	public static readonly HealthAPI = new HealthAPI();
}
