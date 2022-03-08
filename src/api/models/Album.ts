export class Album {
    public wrapperType: string;
    public artistId: number;
    public collectionId: number;
    public artistName: string;
    public collectionName: string;
    public collectionCensoredName: string;
    public artistViewUrl: string;
    public collectionViewUrl: string;
    public artworkUrl60: string;
    public artworkUrl100: string;
    public collectionPrice: number;
    public collectionExplicitness: string;
    public trackCount: number;
    public copyright: string;
    public country: string;
    public currency: string;
    public releaseDate: Date;
    public primaryGenreName: string;
    public previewUrl: string;
    public description: string;

    public constructor(init: Partial<Album>) {
        init = init || {};
        this.wrapperType = init.wrapperType || "";
        this.artistId = init.artistId || 0;
        this.collectionId = init.collectionId || 0;
        this.artistName = init.artistName || "";
        this.collectionName = init.collectionName || "";
        this.collectionCensoredName = init.collectionCensoredName || "";
        this.artistViewUrl = init.artistViewUrl || "";
        this.collectionViewUrl = init.collectionViewUrl || "";
        this.artworkUrl60 = init.artworkUrl60 || "";
        this.artworkUrl100 = init.artworkUrl100 || "";
        this.collectionPrice = init.collectionPrice || 0;
        this.collectionExplicitness = init.collectionExplicitness || "";
        this.trackCount = init.trackCount || 0;
        this.copyright = init.copyright || "";
        this.country = init.country || "";
        this.currency = init.currency || "";
        this.releaseDate = init.releaseDate || new Date();
        this.primaryGenreName = init.primaryGenreName || "";
        this.previewUrl = init.previewUrl || "";
        this.description = init.description || "";
    }
}