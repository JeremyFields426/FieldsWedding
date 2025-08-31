import { RSVPDetails } from "../model/RSVPDetails";
import { Route } from "./Route";

interface FetchOneRSVPRequest {
	name: string;
}

interface FetchOneRSVPResponse {
	rsvp: RSVPDetails | undefined;
}

interface FetchManyRSVPResponse {
	rsvps: RSVPDetails[];
}

interface PostAuthRequest {
	rsvp: RSVPDetails;
}

export class RSVPAPI extends Route {

	public override async FetchOne(req: FetchOneRSVPRequest) {
		return await this.UseAxiosFetch<FetchOneRSVPResponse>(req);
	}

	public override async FetchMany() {
		const { rsvps } = await this.UseAxiosFetch<FetchManyRSVPResponse>({})

		return rsvps
	}

	public override async Post(req: PostAuthRequest) {
		return await this.UseAxiosPost<{}>(req);
	}

	////////////////////////////////////////////////////////////
	//														  //
	//					Getters and Setters                   //
	//														  //
	////////////////////////////////////////////////////////////

	public override get Route(): string {
		return "rsvp";
	}
}
