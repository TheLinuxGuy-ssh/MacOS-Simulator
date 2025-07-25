import * as data from "../data/config.json"

const Wallpaper = () => {
  return (
    <div className="wallpaper">
      <img src={data.wallpaperdark} alt="" />
    </div>
  )
};

export default Wallpaper;