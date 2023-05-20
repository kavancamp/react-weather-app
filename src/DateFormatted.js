import React from "react";

export default function DateFormatted() {
  // eslint-disable-next-line
  let now = new Date();
  let todaysDate = now.toLocaleDateString();
  let time = now.getHours() + ":" + now.getMinutes();

  return (
    <li id="date">
      {todaysDate} {time}
    </li>
  );
}
