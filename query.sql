CREATE TABLE users (
	id SERIAL primary key,
	full_name varchar(255),
	username varchar(100),
	email varchar(255),
	phone text,
	password varchar(255),
	confirm_password varchar(255)
);

INSERT INTO users (full_name, username, email, phone, password, confirm_password) 
values ('Rick San Mateo', 'ricksanmateo', 'ricksanmateo@gmail.com', '123456789', '123456', '123456');