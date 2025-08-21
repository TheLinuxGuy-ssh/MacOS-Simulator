import { useEffect, useState } from "react"
import { supabase } from "../../../../utils/supabase"

const Songs = () => {

    const [songList, setSongList] = useState([]);
    
    const fetchSongs = async () => {
        const {data, error} = await supabase.from('songs').select();
        if(error){
            console.log(error);
        } else {
            setSongList(data);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, [])

    return (
        <>
        {songList.length == 0  ? (<> No Songs found </>) : (
        songList.map((song) => (
            <div className="song-item" key={song.id}>
                <img src={song.imgPath} width={200} alt="" />
            {song.Name}
            </div>
        ))
        )} 
        </>
    )
}

export default Songs