import { useEffect, useState } from "react"
import ReactAudioPlayer from "react-audio-player";
import { supabase } from "../../../../utils/supabase"

const Songs = ({ audioRef, activeSong }) => {

    const [songList, setSongList] = useState([]);
    
    const fetchSongs = async () => {
        const {data, error} = await supabase.from('songs').select();
        if(error){
            console.log(error);
        } else {
            setSongList(data);
        }
    }
    const handleActiveSong = (path) => {
        activeSong(path);
    }

    useEffect(() => {
        fetchSongs();
    }, [])
    return (
        <>

        {songList.length == 0  ? (<> No Songs found </>) : (
        songList.map((song) => (
            <div className="song-item" key={song.id} onClick={() => handleActiveSong(song.Path)}>
                <img src={song.imgPath} width={200} alt="" />
            {song.Name}
            </div>
        ))
        )} 
        </>
    )
}

export default Songs