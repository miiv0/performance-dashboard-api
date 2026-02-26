DROP TYPE IF EXISTS Employee CASCADE;
DROP TABLE IF EXISTS programmers CASCADE;
DROP TABLE IF EXISTS designers CASCADE;

CREATE TYPE Employee AS (
    name TEXT,
    email TEXT,
    role TEXT,
    start_date DATE
);
create table programmers (
    id SERIAL PRIMARY KEY,
    details Employee
);
create table designers (
    id SERIAL PRIMARY KEY,
    details Employee
);
insert into programmers (details)
values (
        ROW(
            'Alice Smith',
            'alice.smith@example.com',
            'Frontend Developer',
            '2022-01-15'
        )
    );
insert into programmers (details)
values (
        ROW(
            'Ricky Johnson',
            'ricky.johnson@example.com',
            'Backend Developer',
            '2023-03-10'
        )
    );
