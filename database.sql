CREATE TABLE `multistep_form`.`multifrm_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45) NULL,
  `business` VARCHAR(45) NULL,
  `telephone` VARCHAR(45) NULL,
  `name_invoice` VARCHAR(45) NOT NULL,
  `nit_invoice` VARCHAR(45) NOT NULL,
  `address_invoice` VARCHAR(45) NULL,
  `contact_invoice` VARCHAR(45) NULL,
  `email_invoice` VARCHAR(45) NULL,
  `telephone_invoice` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


  CREATE TABLE `multistep_form`.`multifrm_participants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45) NULL,
  `address` VARCHAR(100) NULL,
  `country` VARCHAR(45) NULL,
  `telephone` VARCHAR(45) NULL,
  `cel` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `multifrm_users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `multifrm_users_id_idx` (`multifrm_users_id` ASC),
  CONSTRAINT `multifrm_users_id`
    FOREIGN KEY (`multifrm_users_id`)
    REFERENCES `multistep_form`.`multifrm_users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
