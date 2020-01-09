const {Pool} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});



const cohort = process.argv.slice(2)[0];

const assistedTeachersQuery = `
  SELECT DISTINCT teachers.name AS teacher
        , cohorts.name AS cohort
    FROM assistance_requests AS ar
      JOIN teachers ON ar.teacher_id = teachers.id 
      JOIN students ON ar.student_id = students.id
      JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE cohorts.name = $1
    ORDER BY teachers.name;
`;
const assistedTeachersValue = [`${cohort}`];

pool.query(assistedTeachersQuery, assistedTeachersValue)
.then((res) => {

  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  });
  
  pool.end().then(() => console.log('==pool ended=='));
})
.catch((err) => console.error('query error', err.stack));
