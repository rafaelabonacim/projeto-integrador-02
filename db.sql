SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `porca_parafuso` DEFAULT CHARACTER SET utf8 ;
USE `porca_parafuso` ;

-- -----------------------------------------------------
-- Table `porca_parafuso`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cep` INT(8) NOT NULL,
  `logradouro` VARCHAR(200) NOT NULL,
  `complemento` VARCHAR(100) NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `cidade` VARCHAR(200) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`tipo_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`usuario` (
  `id` VARCHAR(36) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(60) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `tipo_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_usuario_tipo_usuario1_idx` (`tipo_usuario_id` ASC),
  CONSTRAINT `fk_usuario_tipo_usuario1`
    FOREIGN KEY (`tipo_usuario_id`)
    REFERENCES `porca_parafuso`.`tipo_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`fornecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`fornecedor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefone` INT(11) NULL,
  `whatsapp` INT(11) NULL,
  `cnpj` INT(14) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `endereco_id` INT NOT NULL,
  `usuario_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_fornecedor_endereco1_idx` (`endereco_id` ASC),
  INDEX `fk_fornecedor_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_fornecedor_endereco1`
    FOREIGN KEY (`endereco_id`)
    REFERENCES `porca_parafuso`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fornecedor_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `porca_parafuso`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefone` INT(11) NULL,
  `whatsapp` INT(11) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `endereco_id` INT NOT NULL,
  `usuario_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cliente_endereco1_idx` (`endereco_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_cliente_usuario2_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_cliente_endereco1`
    FOREIGN KEY (`endereco_id`)
    REFERENCES `porca_parafuso`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_usuario2`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `porca_parafuso`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`orcamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`orcamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade` INT(10) NOT NULL,
  `prazo` DATE NOT NULL,
  `materia_prima` VARCHAR(200) NOT NULL,
  `detalhes` VARCHAR(1000) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `fornecedor_id` INT NOT NULL,
  `cliente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_orcamento_fornecedor1_idx` (`fornecedor_id` ASC),
  INDEX `fk_orcamento_cliente1_idx` (`cliente_id` ASC),
  CONSTRAINT `fk_orcamento_fornecedor1`
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `porca_parafuso`.`fornecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orcamento_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `porca_parafuso`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`plano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`plano` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `orcamentos` TINYINT(1) NOT NULL,
  `listagem` TINYINT(1) NOT NULL,
  `publicidade` TINYINT(1) NOT NULL,
  `preco` INT(5) NOT NULL,
  `preco_promocional` INT(5) NOT NULL,
  `parcelas` TINYINT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`plano_fornecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`plano_fornecedor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `preco` INT(5) NOT NULL,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `plano_id` INT NOT NULL,
  `fornecedor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_plano_fornecedor_plano1_idx` (`plano_id` ASC),
  INDEX `fk_plano_fornecedor_fornecedor1_idx` (`fornecedor_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_plano_fornecedor_plano1`
    FOREIGN KEY (`plano_id`)
    REFERENCES `porca_parafuso`.`plano` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plano_fornecedor_fornecedor1`
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `porca_parafuso`.`fornecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`area_de_atendimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`area_de_atendimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(2) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `porca_parafuso`.`fornecedor_has_area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`fornecedor_has_area` (
  `fornecedor_id` INT NOT NULL,
  `area_de_atendimento_id` INT NOT NULL,
  PRIMARY KEY (`fornecedor_id`, `area_de_atendimento_id`),
  INDEX `fk_fornecedor_has_area_de_atendimento_area_de_atendimento1_idx` (`area_de_atendimento_id` ASC),
  INDEX `fk_fornecedor_has_area_de_atendimento_fornecedor1_idx` (`fornecedor_id` ASC),
  CONSTRAINT `fk_fornecedor_has_area_de_atendimento_fornecedor1`
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `porca_parafuso`.`fornecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fornecedor_has_area_de_atendimento_area_de_atendimento1`
    FOREIGN KEY (`area_de_atendimento_id`)
    REFERENCES `porca_parafuso`.`area_de_atendimento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;