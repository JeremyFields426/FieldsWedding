import { PhotoDetails } from "../model/PhotoDetails";
import { Route } from "./Route";

interface FetchOnePhotoRequest {
    id: string;
}

interface FetchOnePhotoResponse {
    photo: PhotoDetails | undefined;
}

interface FetchManyPhotosResponse {
    photos: PhotoDetails[];
}

interface PostPhotoRequest {
    photo: PhotoDetails;
}

interface DeletePhotoRequest {
    id: string
}

export class PhotoAPI extends Route {

    public override async FetchOne(req: FetchOnePhotoRequest) {
        return await this.UseAxiosFetch<FetchOnePhotoResponse>(req);
    }

    public override async FetchMany() {
        const { photos } = await this.UseAxiosFetch<FetchManyPhotosResponse>({})

        return photos
    }

    public override async Post(req: PostPhotoRequest) {
        return await this.UseAxiosPost<{}>(req);
    }

    public override async Delete(req: DeletePhotoRequest) {
        return await this.UseAxiosDelete(req);
    }

    ////////////////////////////////////////////////////////////
    //														  //
    //					Getters and Setters                   //
    //														  //
    ////////////////////////////////////////////////////////////

    public override get Route(): string {
        return "photo";
    }
}
