import * as data from "../data/config.json";

const Wallpaper = ({ dark }) => {
  return (
    <div className="wallpaper">
        <img src={data.wallpaperdark} style={{ opacity: `${dark ? '1': '0'}`, zIndex: '-9' }} alt="" />
        <img src={data.wallpaperlight} alt="" />
    </div>
  );
};

export default Wallpaper;
