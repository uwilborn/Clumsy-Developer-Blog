CREATE DATABASE noter_db;


USE noter_db;


CREATE TABLE newnote (
    id integer Primary key Auto_increment, 
    memo varchar(500),
    title varchar(500),
    created_by varchar(50),
    date_created date
    );

create Table user (
    id integer Primary key Auto_increment,
    name varchar(30), 
    username integer null,
    password varchar(8)
    );