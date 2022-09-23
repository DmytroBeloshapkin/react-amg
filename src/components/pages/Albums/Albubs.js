import {useEffect, useState} from "react";
import {pageService} from "../../../service";
import Album from "./Album";




const Albubs = () => {

    let [albums, setAlbums]= useState([])

    useEffect(()=>{
        pageService.getAlbums().then(value => setAlbums(value.data))
    },[]);

    return (
        <div>
            {albums.map((album,index) => (<Album key = {index} album = {album}/>))}
        </div>
    );
};

export {Albubs};