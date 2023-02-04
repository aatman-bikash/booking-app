import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClickEvent } from '../../hooks';
import './searchbar.css';

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  let dateRef = useOutsideClickEvent(() => {
    setOpenDate(false);
  });

  let optionsRef = useOutsideClickEvent(() => {
    setOpenOptions(false);
  });

  const handleOptions = (item, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [item]: action === 'd' ? options[item] - 1 : options[item] + 1,
      };
    });
  };

  return (
    <div className='headerSearch'>
      <div className='headerSearchItem'>
        <div className='headerSearchItemContainer headerSearchLocation'>
          <FontAwesomeIcon icon={faLocationDot} className='headerSearchIcon' />
          <input
            type='text'
            className='headerSearchInput'
            placeholder='Where are you going?'
          />
        </div>
      </div>

      <div ref={dateRef} className='headerSearchItem'>
        <div
          className='headerSearchItemContainer'
          onClick={() => {
            setOpenOptions(false);
            setOpenDate(!openDate);
          }}
        >
          <FontAwesomeIcon icon={faCalendarDays} className='headerSearchIcon' />
          <span className='headerSearchText'>{`${
            date[0].startDate === null
              ? 'Check-in'
              : format(date[0].startDate, 'eee, dd MMM')
          } — ${
            date[0].endDate === null
              ? 'Check-out'
              : format(date[0].endDate, 'eee, dd MMM')
          }`}</span>
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='datepicker'
          />
        )}
      </div>

      <div ref={optionsRef} className='headerSearchItem'>
        <div
          className='headerSearchItemContainer'
          onClick={() => {
            setOpenDate(false);
            setOpenOptions(!openOptions);
          }}
        >
          <FontAwesomeIcon icon={faUsers} className='headerSearchIcon' />
          <span className='headerSearchText'>{`${options.adults} ${
            options.adults === 1 ? 'adult' : 'adults'
          }・${options.children} ${
            options.children === 1 ? 'child' : 'children'
          }・${options.rooms} ${options.rooms === 1 ? 'room' : 'rooms'}`}</span>
        </div>
        {openOptions && (
          <div className='options'>
            <div className='optionsItem'>
              <span className='optionsText'>Adults</span>
              <div className='div optionsBtnItems'>
                <button
                  disabled={options.adults <= 1}
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('adults', 'd');
                  }}
                >
                  –
                </button>
                <span className='optionsCountText'>{options.adults}</span>
                <button
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('adults', 'i');
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className='optionsItem'>
              <span className='optionsText'>Children</span>
              <div className='div optionsBtnItems'>
                <button
                  disabled={options.children <= 0}
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('children', 'd');
                  }}
                >
                  –
                </button>
                <span className='optionsCountText'>{options.children}</span>
                <button
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('children', 'i');
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className='optionsItem'>
              <span className='optionsText'>Rooms</span>
              <div className='optionsBtnItems'>
                <button
                  disabled={options.rooms <= 1}
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('rooms', 'd');
                  }}
                >
                  –
                </button>
                <span className='optionsCountText'>{options.rooms}</span>
                <button
                  className='optionsBtn'
                  onClick={() => {
                    handleOptions('rooms', 'i');
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className='headerSearchBtn'>Search</button>
    </div>
  );
};

export default SearchBar;
