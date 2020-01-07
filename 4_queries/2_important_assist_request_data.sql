SELECT  t.name AS teacher
      , s.name AS student
      , assign.name AS assignment
      , completed_at - started_at AS duration
  FROM assistance_requests AS ar
    LEFT JOIN teachers AS t ON ar.teacher_id = t.id
    LEFT JOIN students AS s ON ar.student_id = s.id
    LEFT JOIN assignments AS assign ON ar.assignment_id = assign.id
  ORDER BY duration;