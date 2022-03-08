import "./ListView.css";

interface IAlbumListViewProps {
    albums: string[];
}

export const AlbumListView = (props: IAlbumListViewProps): JSX.Element => {
    return <div className="album-list-wrapper">
        {
            props.albums.map((album, index) => {
                return <span key={index}>{album}</span>
            })
        }
    </div>
}
