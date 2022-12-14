CREATE SCHEMA `signup` ;


CREATE TABLE `signup`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NULL,
  `lastname` VARCHAR(100) NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE `signup`.`url_mapping` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `visualisations` VARCHAR(200) NOT NULL,
  `user` INT NOT NULL,
  `layout` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`));
