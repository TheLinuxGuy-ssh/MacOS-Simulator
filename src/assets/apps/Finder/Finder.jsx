import "./style.css";

const Finder = () => {
  return (
    <>
    <div id='finder'>
  <div id='toolbar'>
    <div id='windowname'>
      <i></i>
      All My Files
    </div>
    <div id='actions'>
      <div id='back'></div>
      <div id='next'></div>
      <div id='iconV'></div>
      <div id='list'></div>
      <div id='grid'></div>
      <div id='coverflow'>
        <i className='view'></i>
      </div>
      <div id='settings'></div>
      <div id='share'></div>
      <input results='0' type='search' />
    </div>
  </div>
  <div id='view'>
    <div id='sidebar'>
      <ul>
        <li>
          <span className='group'>
            Favorites
          </span>
          <ul>
            <li className='current_page'>
              <i className='afiles'></i>
              All My Files
            </li>
            <li>
              <i className='airdrop'></i>
              AirDrop
            </li>
            <li>
              <i className='apps'></i>
              Applications
            </li>
            <li>
              <i className='desk'></i>
              Desktop
            </li>
            <li>
              <i className='docs'></i>
              Documents
            </li>
            <li>
              <i className='downs'></i>
              Downloads
            </li>
            <li>
              <i className='mov'></i>
              Movies
            </li>
            <li>
              <i className='music'></i>
              Music
            </li>
            <li>
              <i className='pic'></i>
              Pictures
            </li>
          </ul>
        </li>
        <li>
          <span className='group'>
            Shared
          </span>
        </li>
      </ul>
    </div>
    <div id='content'>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Desktop
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Documents
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Downloads
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Movies
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Music
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Pictures
        </span>
      </div>
      <div className='folder'>
        <div className='icon'></div>
        <span>
          Public
        </span>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default Finder;
