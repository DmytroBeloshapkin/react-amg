import {useEffect, useState} from "react";

import {pageService} from "../../../../service";
import Album from "../Album/Album";
import css from './Albums.module.css'


const Albubs = () => {

    let [albums, setAlbums] = useState([])

    useEffect(() => {
        pageService.getAlbums().then(value => setAlbums(value.data))
    }, []);

    return (
        <div>
            <div className={css.namePage}>Albums page</div>
            <div className={css.albums}>
                {albums.map((album, index) => (<Album key={index} album={album}/>))}
            </div>
        </div>
    );
};

export {Albubs};