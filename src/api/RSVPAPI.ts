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

interface PostRSVPRequest {
	rsvp: RSVPDetails;
}

interface DeleteRSVPRequest {
	name: string;
}

export class RSVPAPI extends Route {

	public override async FetchOne(req: FetchOneRSVPRequest) {
		return await this.UseAxiosFetch<FetchOneRSVPResponse>(req);
	}

	public override async FetchMany() {
		const { rsvps } = await this.UseAxiosFetch<FetchManyRSVPResponse>({})

		return rsvps
	}

	public override async Post(req: PostRSVPRequest) {
		return await this.UseAxiosPost(req);
	}

	public override async Delete(req: DeleteRSVPRequest) {
		return await this.UseAxiosDelete(req);
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
