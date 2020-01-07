SELECT COUNT(ar.*) AS total_assistances, name
  FROM assistance_requests AS ar
    JOIN students ON ar.student_id = students.id
  WHERE name = 'Elliot Dickinson'
  GROUP BY name;