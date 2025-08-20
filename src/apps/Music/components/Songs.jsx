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
        Songss
        {songList.map((song) => {
            <div key={song.id}>
            {song.Name}
            what
            </div>
        })}
        </>
    )
}

export default Songs