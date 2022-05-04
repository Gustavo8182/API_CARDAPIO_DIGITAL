use vaz59mbwdpwyhar1;

CREATE TABLE users (
    idUser INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nam VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL
);

CREATE TABLE snack (
    idSnack INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nam VARCHAR(20) NOT NULL,
    descri VARCHAR(200) NOT NULL,
    price DOUBLE NOT NULL,
    num INT
);


CREATE TABLE request (
    idRequest INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nameClient VARCHAR(100) NOT NULL,
    dat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    payment VARCHAR(100) NOT NULL,
    totalPrice DOUBLE NOT NULL,
    address VARCHAR(200) NOT NULL,
    snack INT NOT NULL,
    CONSTRAINT FOREIGN KEY (snack) REFERENCES snack (idSnack)
);
SELECT * FROM  request;
SELECT * FROM  snack;
SELECT * FROM  users;
drop table user;
show tables;

INSERT INTO  users (nam, email, pass) values ( 
"Rodrigo",
"teste@teste.com",
"123456"
);

INSERT INTO  snack (nam, descri, price,num) values ( 
"X-SALADA",
"PÃO, SALADA E MOLHO ESPECIAL",
8.90,
2
);

INSERT INTO  request (nameClient, payment, totalPrice, address, snack) values ( 
"Rodrigo",
"Dinheiro",
30.00,
"Rua dos Bocós nº 1, Jardim Catarina, são gonçalo",
3
);