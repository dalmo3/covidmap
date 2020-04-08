import moment from 'moment';
const flightCache = require('../data/flightCache.json');

export const getFlight = patient => {
  if (!patient.flight) return;
  const formattedFlight = patient.flight.replace(
    /(..)([ ]*)([0]*)([1-9][0-9]*)([ ].*)?/g,
    '$1$4'
  );
  const flightMap = new Map(flightCache);
  const flightInstances = flightMap.get(formattedFlight) || [];
  return flightInstances.filter(
    flight =>
      isSameDate(flight.departed.date, patient.departure_date) ||
      isSameDate(flight.arrived.date, patient.arrival_date)
  )[0];
};

const isSameDate = (oldDate, newDate) =>
  moment(oldDate).isSame(moment(newDate, 'DD/MM/YYYY'), 'days');