
const { fetch } = require('simple-fetch-cache');
const moment = require('moment');

const fetchFlightData = async (flightNumber, flightDate) => {
  // const parser = new DOMParser();

  // const date = flightDate ? moment(flightDate) : moment('23 Feb 2020')
  const date = flightDate ? new Date(flightDate) : new Date('23 Feb 2020');
  // console.log(date, new Date(date))
  flightNumber = 'EK450';
  // flightDate = '2020-02-23';
  const queryDate =
    date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate();
  // const queryDate = moment(date).format('YYYY-MM-DD')
  console.log(queryDate);

  const html = await fetch(
    `https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`
  ).then(res => {
    console.log(res);
    return res.reply;
  });
  // console.log(html)
  // const dom = parser.parseFromString(html, 'text/html');
  const dom = new JSDOM(html).window.document;
  // console.log(dom.window.document)
  console.log(html);
  console.log(dom.innerHTML);
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    console.log(schedule.innerHTML);
    const flightEvent = schedule.querySelector('.flightInfo-date').textContent;
    // flightEvent.textContent
    console.log('2');
    console.log(flightEvent);
    const displayDate = date.format('D MMM, YYYY');
    if (flightEvent.startsWith(`Arrival: ${displayDate}`)) {
    } else {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextFlightDate =
        nextDay.getFullYear() +
        '-' +
        (nextDay.getMonth() + 1) +
        '-' +
        nextDay.getDate();
      fetchFlightData(flightNumber, nextFlightDate);
    }
  });

  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    const flightEvent = schedule.querySelector('.flightInfo-date');
    console.log(flightEvent.textContent);
    const airport = schedule
    .querySelector('.flightInfo-airport')
    .textContent.replace(/ \(...\)/, '');
    schedule.querySelectorAll('.flightInfo-dateItem').forEach(dateItem => {
      console.log(dateItem.innerHTML);
      const dateLabel = dateItem.querySelector('.flightInfo-dateLabel');
      if (dateLabel && dateLabel.textContent === 'Actual:') {
        const dateTime = dateItem.querySelector('.flightInfo-dateTime');
        console.log(dateTime);

        console.log(airport, flightEvent.textContent, dateTime.textContent);
      }
    });
  });
};

fetchFlightData()