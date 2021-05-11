const pool = require('./db');

const sql = `
SELECT * FROM assisted_by_staff1
UNION
SELECT * FROM assisted_by_staff2
`;

pool.query(sql, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
});

pool.end();

/*
CREATE or REPLACE VIEW Assisted_by_Staff1 AS
SELECT
    a.rental_id AS "Rental ID",
    a.customer_id AS "Customer ID",
    a.staff_id AS "Staff ID"
FROM rental a
WHERE a.staff_id = '1'

CREATE or REPLACE VIEW Assisted_by_Staff2 AS
SELECT
    b.rental_id AS "Rental ID",
    b.customer_id AS "Customer ID",
    b.staff_id AS "Staff ID"
FROM rental b
WHERE b.staff_id = '2'
*/