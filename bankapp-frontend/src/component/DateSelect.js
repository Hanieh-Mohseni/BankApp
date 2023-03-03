import React, { useState } from "react";
import dist from "@testing-library/user-event";

import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelect.css";
import styled from "styled-components";

function DateSelect({ selectedDate, setselectedDate }) {
  return (
    <Mydiv>
      <Datepicker
      placeholderText={'Select Date'} 
        selected={selectedDate}
        onChange={(date) => {
          setselectedDate(date);
        }}
        dateFormat="yyyy-MM-dd"
        // To desable the past
        minDate={new Date()}
        //To exclude weekends
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </Mydiv>
  );
}
const Mydiv = styled.div`
  margin: 5px;
  padding: 5px 15px;
`;
export default DateSelect;
