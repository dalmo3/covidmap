let age_mapper = ageGroup => ageGroup.trim().slice(0, 2).concat('s').replace(' ','');
let gender_mapper = gender => {
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
let fn_new_partial = (row, status, i) => {
  let [
    report_date,
    gender,
    age_bracket,
    dhb,
    overseas,
    overseas_cities,
    flight,
    departure_date,
    arrival_date
  ] = row.innerText.split('\t');
  let obj = {
    case_number: i + 1,
    report_date: report_date.trim(),
    status,
    dhb: dhb.trim(),
    overseas: overseas.trim(),
    overseas_cities: overseas_cities.trim(),
    gender: gender_mapper(gender),
    age_bracket: age_mapper(age_bracket),
    flight: flight.trim(),
    departure_date: departure_date.trim(),
    arrival_date: arrival_date.trim()
  };
  console.log(obj);
  // arr = [obj, ...arr];
  return obj;
};
let caseObj = {
  date: new Date(document.lastModified).toISOString(),
  confirmed: [],
  probable: []
};
document.querySelectorAll('table.table-style-two').forEach(table => {
  if (!table.querySelector('caption')) return;
  const caption = table.querySelector('caption').innerText;
  console.log(caption);
  const status = caption.split(' ')[0].toLowerCase();
  let arr = [];
  table.querySelectorAll('tbody tr').forEach((row, i, rows) => {
    let total = rows.length;
    arr = [fn_new_partial(row, status, total - i - 1), ...arr];
  });
  switch (status) {
    case 'probable':
      caseObj.probable = arr;
      break;
    default:
      caseObj.confirmed = arr;
      break;
  }
});

JSON.stringify(caseObj);
// JSON.stringify(caseObj).replace(/"([^,\[\{]*)?":/g, '$1:');
