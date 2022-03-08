import { Album } from "./Album";

export class GetAlbumsResponse {
    public resultsCount: number;
    public results: Album[];

    public constructor(init?: Partial<GetAlbumsResponse>) {
        init = init || {};
        this.resultsCount = init. resultsCount || 0;
        this.results = init.results || [];
    }
}