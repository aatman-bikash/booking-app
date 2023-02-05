import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import SearchBar from '../searchBar/SearchBar';

const Header = ({ type }) => {
  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className='headerDesc'>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free LamaBooking account
            </p>
            <button className='headerBtn'>Sign-in / Register</button>
            <SearchBar />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
