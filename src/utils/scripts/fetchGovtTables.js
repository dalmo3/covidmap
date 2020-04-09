let age_mapper = ageGroup =>
  ageGroup
    .trim()
    .slice(0, 2)
    .concat('s')
    .replace(' ', '');
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
    arrival_date,
  ] = row.innerText.split('\t');
  let obj = {
    case_number: i + 1,
    report_date: report_date.trim(),
    status,
    dhb: dhb.trim(),
    gender: gender_mapper(gender),
    age_bracket: age_mapper(age_bracket),
    overseas: overseas.trim(),
    overseas_cities: overseas_cities.trim(),
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
      caseObj.probable = arr
      .sort((a, b) => (a.overseas_cities < b.overseas_cities ? 1 : -1))
      .sort((a, b) => (a.departure_date < b.departure_date ? 1 : -1))
      .sort((a, b) => (a.arrival_date < b.arrival_date ? 1 : -1))
      .sort((a, b) => (a.flight < b.flight ? 1 : -1))
      .sort((a, b) => (a.overseas < b.overseas ? 1 : -1))
      .sort((a, b) => (a.age_bracket < b.age_bracket ? 1 : -1))
      .sort((a, b) => (a.gender < b.gender ? 1 : -1))
      .sort((a, b) => (a.dhb < b.dhb ? 1 : -1))
      .sort((a, b) => {
        let aDateArr = a.report_date.split('/');
        let bDateArr = b.report_date.split('/');
        let aDate = new Date(aDateArr[2] + '-' + aDateArr[1] + '-' + aDateArr[0])
        let bDate = new Date(bDateArr[2] + '-' + bDateArr[1] + '-' + bDateArr[0])
        return aDate.getTime() - bDate.getTime();
      });
      break;
      default:
        caseObj.confirmed = arr
        .sort((a, b) => (a.overseas_cities < b.overseas_cities ? 1 : -1))
        .sort((a, b) => (a.departure_date < b.departure_date ? 1 : -1))
        .sort((a, b) => (a.arrival_date < b.arrival_date ? 1 : -1))
        .sort((a, b) => (a.flight < b.flight ? 1 : -1))
        .sort((a, b) => (a.overseas < b.overseas ? 1 : -1))
        .sort((a, b) => (a.age_bracket < b.age_bracket ? 1 : -1))
        .sort((a, b) => (a.gender < b.gender ? 1 : -1))
        .sort((a, b) => (a.dhb < b.dhb ? 1 : -1))
        .sort((a, b) => {
          let aDateArr = a.report_date.split('/');
          let bDateArr = b.report_date.split('/');
          let aDate = new Date(aDateArr[2] + '-' + aDateArr[1] + '-' + aDateArr[0])
          let bDate = new Date(bDateArr[2] + '-' + bDateArr[1] + '-' + bDateArr[0])
          return aDate.getTime() - bDate.getTime();
        });
      break;
  }
  // caseObj.confirmed = caseObj.confirmed.map(
  //   (c, i) => new Object({ case_number: i + 1, ...c })
  // );
  // caseObj.probable = caseObj.probable.map(
  //   (c, i) => new Object({ case_number: i + 1, ...c })
  // );
  caseObj.confirmed.forEach((c, i) => Object.assign(c, { case_number: i + 1 }));
  caseObj.probable.forEach((c, i) => Object.assign(c, { case_number: i + 1 }));
});

JSON.stringify(caseObj);
// JSON.stringify(caseObj).replace(/"([^,\[\{]*)?":/g, '$1:');
