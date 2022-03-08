import { AppleMusicUrls } from "../../constants/AppleMusicUrls";

export class GetAlbumsRequest {
    public bandName: string;

    public constructor(bandName: string) {
        this.bandName = bandName;
    }

    public getUrl(): string {
        const searchUrl = new URL(`${AppleMusicUrls.apiBaseUrl}/search`);
        searchUrl.searchParams.append("term", this.bandName);

        return searchUrl.toString();
    }
}