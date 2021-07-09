-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema porca_parafuso
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema porca_parafuso
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `porca_parafuso` DEFAULT CHARACTER SET utf8 ;
USE `porca_parafuso` ;

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`usuario` (
  `id` INT(36) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `tipo` TINYINT(1) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`)
  );

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cep` INT(8) NOT NULL,
  `logradouro` VARCHAR(200) NOT NULL,
  `numero` VARCHAR(5) NOT NULL,
  `complemento` VARCHAR(45) NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `cidade` VARCHAR(200) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


-- -----------------------------------------------------
-- Table `porca_parafuso`.`fonecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `porca_parafuso`.`fonecedor` (
  `id` VARCHAR(36) NOT NULL,
  `telefone` INT(11) NULL,
  `whatsapp` INT(11) NULL,
  `cnpj` INT(14) NOT NULL,
  `plano` VARCHAR(45) NOT NULL,
  `valor` VARCHAR(45) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `usuario_id` INT NOT NULL,
  `endereco_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_fonecedor_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `porca_parafuso`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fonecedor_endereco1`
    FOREIGN KEY (`endereco_id`)
    REFERENCES `porca_parafuso`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`cliente` (
  `id` INT(36) NOT NULL AUTO_INCREMENT,
  `telefone` INT(11) NULL,
  `whatsapp` INT(11) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `usuario_id` INT(36) NOT NULL,
  `endereco_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cliente_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `porca_parafuso`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_endereco1`
    FOREIGN KEY (`endereco_id`)
    REFERENCES `porca_parafuso`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`orcamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantidade` INT(10) NOT NULL,
  `prazo` DATE NOT NULL,
  `materia` VARCHAR(60) NOT NULL,
  `detalhes` VARCHAR(200) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `fonecedor_id` VARCHAR(36) NOT NULL,
  `cliente_id` INT(36) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_orcamento_fonecedor1`
    FOREIGN KEY (`fonecedor_id`)
    REFERENCES `porca_parafuso`.`fonecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orcamento_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `porca_parafuso`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`plano` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `orcamentos` TINYINT(1) NOT NULL,
  `listagem` TINYINT(1) NOT NULL,
  `publicidade` TINYINT(1) NOT NULL,
  `preco` INT NOT NULL,
  `preco_promocional` INT NOT NULL,
  `parcelas` TINYINT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`plano_fornecedor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `valor` INT NOT NULL,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `plano_id` INT NOT NULL,
  `fonecedor_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_plano_fornecedor_plano1`
    FOREIGN KEY (`plano_id`)
    REFERENCES `porca_parafuso`.`plano` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plano_fornecedor_fonecedor1`
    FOREIGN KEY (`fonecedor_id`)
    REFERENCES `porca_parafuso`.`fonecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `porca_parafuso`.`area_de_atendimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(200) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  `fonecedor_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_area_de_atendimento_fonecedor1`
    FOREIGN KEY (`fonecedor_id`)
    REFERENCES `porca_parafuso`.`fonecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;