create table user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  phonenumber VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL
);

create table administrator (
  id int primary key auto_increment not null,
  user_id int,
  constraint fk_administrator_user
  foreign key (user_id)
  references user(id)
);

CREATE TABLE user_message (
  message_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT,
  message_text VARCHAR(2000) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user(id)
);