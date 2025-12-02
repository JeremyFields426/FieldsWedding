import { Route } from "./Route";

export class HealthAPI extends Route {

    public override async FetchOne() {
        return await this.UseAxiosFetch({});
    }

    ////////////////////////////////////////////////////////////
    //														  //
    //					Getters and Setters                   //
    //														  //
    ////////////////////////////////////////////////////////////

    public override get Route(): string {
        return "ping";
    }
}
