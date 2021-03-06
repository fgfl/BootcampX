const {Pool} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});



const cohort = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];

const studentQuery = `
  SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
    FROM students
      JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1 
    LIMIT $2;
`;
const studentQueryValues = [`${cohort}%`, limit || 5];

pool.query(studentQuery, studentQueryValues)
.then((res) => {
  console.log(res.rows);

  res.rows.forEach(user => {
    console.log(`${user.name} had an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  });
  
  pool.end().then(() => console.log('==pool ended=='));
})
.catch((err) => console.error('query error', err.stack));
