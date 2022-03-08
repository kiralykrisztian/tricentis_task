import axios from "axios";
import { Album } from "./models/Album";
import { GetAlbumsRequest } from "./models/GetAlbumsRequest";
import { GetAlbumsResponse } from "./models/GetAlbumsResponse";

export const getAlbums = async (bandName: string): Promise<Album[]> => {
    const getAlbumsUrl = new GetAlbumsRequest(bandName);

    const albumSearch = await axios(getAlbumsUrl.getUrl());
    const albumSearchResponse = new GetAlbumsResponse(albumSearch.data);
    return albumSearchResponse.results;
}