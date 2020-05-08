import React from 'react';
import styles from '../styles/SelectHeader.css';

const SelectHeader = ({price, selectDate, selectAdults, handleCalendarClick}) => (
  <div className={styles.header}>
        <div className={styles.header_price}>
          <div className={styles.date_travelers}>Select Date and Travelers</div>
          <div className={styles.from_rate}>
            <div className={styles.from}>
              From
            </div>
            <div data-test='price' className={styles.rate}>
              {'$' + price}
            </div>
          </div>
        </div>
        <div data-test='optionsButton'className={styles.dates_adults_options}>
          <div data-test='handleClick' className={styles.dates_adults_options_btn} onClick={handleCalendarClick}>
            <div className={`gg-calendar-dates ${styles.icons}`}/>
            <span data-test='date'>{selectDate[0] + ' ' + selectDate[1]}</span>
          </div>
          <div data-test='optionsButton' className={styles.dates_adults_options_btn}>
            <div className={`gg-user-add ${styles.icons}`} />
            <span data-test='adults'>{selectAdults + '  Adults'}</span>
          </div>
          <div data-test='optionsButton' className={styles.dates_adults_options_btn}>
            <div className={`gg-awards ${styles.icons}`} />
            <span data-test='options'>Options</span>
          </div>
        </div>
      </div>

)

export default SelectHeader;
