SELECT assignments.id
      , name
      , day
      , chapter
      , COUNT(ar.*) AS total_requests
  FROM assignments 
    JOIN assistance_requests AS ar ON ar.assignment_id = assignments.id
  GROUP BY assignments.id, name, day, chapter
  ORDER BY total_requests DESC;