SELECT COUNT(*) AS total_assistance, name
  FROM teachers
    JOIN assistance_requests AS ar ON teachers.id = ar.teacher_id
  WHERE name = 'Waylon Boehm'
  GROUP BY name;