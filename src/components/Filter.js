import React, { useState } from 'react'
import fireDb from "../firebase";


const Filter = (props) => {

  const [filter, setFilter] = useState("Disable");
  const [filterParams, setFilterParams] = useState("")

  const filterData = (filter, filterParams) => {
    fireDb.child("/").orderByChild(filter).equalTo(filterParams).on("value", (snapshot) => {
      if (snapshot.val()) {
        const data = snapshot.val();
        props.setData(data);

      }
    })
  }

  const filterReset = () => {
    fireDb.child("/").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        props.setData({ ...snapshot.val() })
      } else {
        props.setData({});
      }
    });
  }
  return (
    <div>
      <div className="filter-container" >
        <input type="radio" name="filter" value="Gender" onClick={() => setFilter("Gender")} />
        <label htmlFor="Gender">Gender</label>

        <input type="radio" name="filter" value="Location" onClick={() => setFilter("Location")} />
        <label htmlFor="Location">Location</label>

        <input type="radio" name="filter" value="Date" onClick={() => setFilter("Date")} />
        <label htmlFor="Date">Date</label>

        <input type="radio" name="filter" value="Reset" onClick={() => setFilter("/")} />
        <label htmlFor="Disable">Reset</label>
      </div>

      <div className="filter-selector">
        {(filter === "Gender") && (
          <select name="Gender" onChange={(e) => setFilterParams(e.target.value)} >
            <option value="selected" selected>Please Select Gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        )}

        {(filter === 'Location') && (
          <select name="Location" onChange={(e) => setFilterParams(e.target.value)} >
            <option value="selected" selected>Please Select City..</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        )}

        {(filter === 'Date') && (
          <input type="date" name="filter-date" onChange={(e) => {
            let date = e.target.value;
            let newDate = new Date(date).toDateString();
            let [, month, day,year] = newDate.split(" ");
            day = +day;
            year = year[2]+year[3];
            let date2 = `${day}-${month}-${year}`;
            console.log(date2)
            setFilterParams(date2);
          }} />
        )}

        {(filter !== "/") && (<button onClick={() => {
          filterData(filter, filterParams);
        }}>click to filter</button>)}

        {(filter === "/") && (
          <button onClick={filterReset}>Reset</button>
        )}
      </div>


    </div>
  )
}

export default Filter