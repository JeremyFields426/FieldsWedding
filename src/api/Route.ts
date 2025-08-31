import axios from "axios";
import { v4 } from "uuid";

/**
 * Provides an interface for performing axios fetch, post, patch, and delete requests. Adds the headers, creates the URL, and
 * sets the provided query parameters for each request. Provides an interface setting the request/response types.
 */
export abstract class Route {
	private static readonly SERVER_URL = process.env
		.REACT_APP_SERVER_URL as string;

	private static readonly API_KEY = process.env
		.REACT_APP_SERVER_API_KEY as string;

	private static readonly HEADERS = {
		APIKey: this.API_KEY,
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
		"Access-Control-Allow-Headers":
			"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
	};

	public constructor() {
		if (!Route.SERVER_URL) {
			throw new Error("The URL for the Server is not defined!");
		}

		if (!Route.API_KEY) {
			throw new Error("The API Key for the Server is not defined!");
		}

		this.FetchOne = this.FetchOne.bind(this);
		this.FetchMany = this.FetchMany.bind(this);
		this.Post = this.Post.bind(this);
		this.Patch = this.Patch.bind(this);
		this.Delete = this.Delete.bind(this);
	}

	protected async UseAxiosFetch<Res = any, Req = any>(
		req: Req
	): Promise<Res> {
		const { data } = await axios.get<Res>(this.URL, {
			params: req,
			headers: Route.HEADERS,
		});

		return data;
	}

	protected async UseAxiosPost<Res = any, Req = any>(req: Req): Promise<Res> {
		const { data } = await axios.post<Res>(this.URL, req, {
			headers: Route.HEADERS,
		});

		return data;
	}

	protected async UseAxiosPatch<Res = any, Req = any>(
		req: Req
	): Promise<Res> {
		const { data } = await axios.patch<Res>(this.URL, req, {
			headers: Route.HEADERS,
		});

		return data;
	}

	protected async UseAxiosDelete<Res = any, Req = any>(
		req: Req
	): Promise<Res> {
		const { data } = await axios.delete<Res>(this.URL, {
			params: req,
			headers: Route.HEADERS,
		});

		return data;
	}

	public async FetchOne(req: any): Promise<any> {
		throw new Error(`Fetch One is not defined for ${this.Route}.`);
	}

	public async FetchMany(req: any): Promise<any> {
		throw new Error(`Fetch Many is not defined for ${this.Route}.`);
	}

	public async Post(req: any): Promise<any> {
		throw new Error(`Post is not defined for ${this.Route}.`);
	}

	public async Patch(req: any): Promise<any> {
		throw new Error(`Patch is not defined for ${this.Route}.`);
	}

	public async Delete(req: any): Promise<any> {
		throw new Error(`Delete is not defined for ${this.Route}.`);
	}

	////////////////////////////////////////////////////////////
	//														  //
	//					Getters and Setters                   //
	//														  //
	////////////////////////////////////////////////////////////

	protected get ClientID() {
		const key = "Client ID";

		if (!localStorage.getItem(key)) {
			localStorage.setItem(key, v4());
		}

		return localStorage.getItem(key);
	}

	protected get URL() {
		return `${Route.SERVER_URL}/${this.Route}`;
	}

	protected abstract get Route(): string;
}
