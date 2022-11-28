import React from "react";
import Style from './_pages.module.css';
import { BiBed, BiCalendar, BiUser } from "react-icons/bi";

const BookingDeals = () => {
  return (
    <section className={Style.deals}>
      <form>
        <span>
          <input type="text" placeholder="Where are you Going" />
        </span>
        <span>
          <input type="text" placeholder="Check-in -" />
          <input type="text" placeholder="- Check-out" />
        </span>

        <span>
             <select name="details" id="details">
                <option value="Adults">Adults</option>
                <option value="Children">Children</option>
                <option value="Rooms">Rooms</option>
          </select>
        </span>
        <button>Search</button>
      </form>
    </section>
  );
};

export default BookingDeals;
