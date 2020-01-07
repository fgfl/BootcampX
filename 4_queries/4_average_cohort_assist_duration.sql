SELECT cohorts.name AS name
     , AVG(completed_at - started_at) AS average_assistance_time
  FROM assistance_requests AS ar
    JOIN students AS s ON ar.student_id = s.id
    JOIN cohorts ON s.cohort_id = cohorts.id
  GROUP BY cohorts.name
  ORDER BY average_assistance_time;