SELECT DISTINCT teachers.name AS teacher
      , cohorts.name AS cohort
  FROM assistance_requests AS ar
    JOIN teachers ON ar.teacher_id = teachers.id 
    JOIN students ON ar.student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = 'JUL02'
  ORDER BY teachers.name;