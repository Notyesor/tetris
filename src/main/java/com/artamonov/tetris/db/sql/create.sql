CREATE TABLE Player(
    login VARCHAR(20) PRIMARY KEY,
    password VARCHAR(80) NOT NULL
);
CREATE TABLE Score(
    login VARCHAR(20) PRIMARY KEY,
    value INTEGER,
    FOREIGN KEY(login) REFERENCES Player(login)
);
