const fetch = require('fetch-filecache-for-crawling');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const readXlsxFile = require('read-excel-file');

const saveData = (data, fileName) => {
  const NEW_DATA_PATH = path.resolve(__dirname, fileName);
  fs.writeFileSync(NEW_DATA_PATH, JSON.stringify(data));
};
const age_mapper = (ageGroup) =>
  ageGroup.trim().slice(0, 2).concat('s').replace(' ', '');
const gender_mapper = (gender) => {
  switch (gender.trim().toLowerCase()) {
    case 'f':
      return 'Female';
    case 'female':
      return 'Female';
    case 'm':
      return 'Male';
    case 'male':
      return 'Male';
    default:
      return gender;
  }
};

const generateCaseObject = (row, status) => {
  const [
    report_date,
    gender,
    age_bracket,
    dhb,
    overseas,
    overseas_cities,
    flight,
    departure_date,
    arrival_date,
  ] = row;
  return {
    case_number: 0,
    report_date: moment(report_date).utc().format('D/MM/YYYY'),
    status,
    dhb: dhb ? dhb.trim() : '',
    gender: gender ? gender_mapper(gender) : '',
    age_bracket: age_bracket ? age_mapper(age_bracket) : '',
    overseas: overseas ? overseas.trim() : '',
    overseas_cities: overseas_cities ? overseas_cities.trim() : '',
    flight: flight ? flight.trim() : '',
    departure_date: departure_date
      ? moment(departure_date).utc().format('D/MM/YYYY')
      : '',
    arrival_date: arrival_date ? moment(arrival_date).utc().format('D/MM/YYYY') : '',
  };
};

const generateCaseArray = (array, status) =>
  array
    .slice(3)
    .map((row, i, arr) => generateCaseObject(row, status))
    .sort((a, b) => (a.overseas_cities < b.overseas_cities ? 1 : -1))
    .sort((a, b) => (a.departure_date < b.departure_date ? 1 : -1))
    .sort((a, b) => (a.arrival_date < b.arrival_date ? 1 : -1))
    .sort((a, b) => (a.flight < b.flight ? 1 : -1))
    .sort((a, b) => (a.overseas < b.overseas ? 1 : -1))
    .sort((a, b) => (a.age_bracket < b.age_bracket ? 1 : -1))
    .sort((a, b) => (a.gender < b.gender ? 1 : -1))
    .sort((a, b) => (a.dhb < b.dhb ? 1 : -1))
    .sort((a, b) =>
      moment(a.report_date, 'D/MM/YYYY').isSameOrAfter(
        moment(b.report_date, 'D/MM/YYYY')
      )
        ? 1
        : -1
    )
    .map((patient, i) => Object.assign(patient, { case_number: i + 1 }));
fetch(
  'https://www.health.govt.nz/system/files/documents/pages/covid-case-list-13april2020.xlsx'
)
  .then((d) => d.arrayBuffer())
  .then((file) =>
    readXlsxFile(file, { sheet: 'Confirmed' }).then((confirmed) => {
      readXlsxFile(file, { sheet: 'Probable' }).then((probable) => {
        const data = {
          date: moment(confirmed[1][1]).toISOString,
          confirmed: generateCaseArray(confirmed, 'confirmed'),
          probable: generateCaseArray(probable, 'probable'),
        };
        saveData(data, '../../data/MoH/current.json');
      });
    })
  );
