import { RSVPAPI } from "./RSVPAPI";

export type InvalidateFn = (cache: CACHE) => Promise<void>;

export enum CACHE {
	RSVPS = "RSVPs",
}

export abstract class Routes {
	public static readonly RSVPAPI = new RSVPAPI();
}
