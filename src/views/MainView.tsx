import { useCallback, useEffect, useState } from "react";
import { getAlbums } from "../api/AppleMusicApi";
import { Album } from "../api/models/Album";
import { Delays } from "../constants/Delays";
import { AlbumListView } from "./ListView";

import "./MainView.css";

export const MainView = (): JSX.Element => {
    const [bandNameInput, setBandNameInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [albums, setAlbums] = useState<string[]>(["A", "B", "C", "D", "E"]);
    const [fetchedAlbums, setFetchedAlbums] = useState<string[]>([]);

    const sendRequest = useCallback((searchBandName: string) => {
        if (isSending) {
            return;
        }

        setIsSending(true);
        getAlbums(searchBandName).then(
            (result: Album[]) => {
                const newAlbums = result.map(album => album.collectionName).sort().slice(0, 5);
                setFetchedAlbums(newAlbums);
            }
        ).finally(() => setIsSending(false));
    }, [isSending]);

    useEffect(() => {
        const timeoutId = setInterval(() => {
            moveAlbums(albums, fetchedAlbums);
            setAlbums([...albums]);
        }, 1000);

        return () => clearInterval(timeoutId);
    }, [fetchedAlbums]);

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            if (bandNameInput) {
                sendRequest(bandNameInput);
            }
        }, Delays.UserTypeDelay);

        return () => clearTimeout(typingTimeout)
    }, [bandNameInput]);

    const onSearchInputChanged = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {        
        setBandNameInput(event.target.value);
    }

    return <>
        <div className="search-bar">
            <input className="band-name" placeholder="Search Band" value={bandNameInput} onChange={onSearchInputChanged} type="text"/>
        </div>

        <AlbumListView albums={albums} />
    </>
}

const moveAlbums = (albums: string[], fetchedAlbums: string[]): void => {
    const firstElement = albums.shift();
    const newElement = fetchedAlbums.length > 0 ? fetchedAlbums.shift() : firstElement;

    albums.push(newElement || "");
}

