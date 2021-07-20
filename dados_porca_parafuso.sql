-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Jul-2021 às 01:18
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `porca_parafuso`
--

--
-- Extraindo dados da tabela `area_de_atendimento`
--

INSERT INTO `area_de_atendimento` (`id`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'AC', NULL, NULL),
(2, 'AL', NULL, NULL),
(3, 'AP', NULL, NULL),
(4, 'AM', NULL, NULL),
(5, 'BA', NULL, NULL),
(6, 'CE', NULL, NULL),
(7, 'DF', NULL, NULL),
(8, 'ES', NULL, NULL),
(9, 'GO', NULL, NULL),
(10, 'MA', NULL, NULL),
(11, 'MT', NULL, NULL),
(12, 'MS', NULL, NULL),
(13, 'MG', NULL, NULL),
(14, 'PA', NULL, NULL),
(15, 'PB', NULL, NULL),
(16, 'PR', NULL, NULL),
(17, 'PE', NULL, NULL),
(18, 'PI', NULL, NULL),
(19, 'RJ', NULL, NULL),
(20, 'RN', NULL, NULL),
(21, 'RS', NULL, NULL),
(22, 'RO', NULL, NULL),
(23, 'RR', NULL, NULL),
(24, 'SC', NULL, NULL),
(25, 'SP', NULL, NULL),
(26, 'SE', NULL, NULL),
(27, 'TO', NULL, NULL);

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id`, `telefone`, `whatsapp`, `createdAt`, `updatedAt`, `endereco_id`, `usuario_id`) VALUES
(4, 0, 2147483647, '2021-07-19 02:09:02', '2021-07-19 02:09:02', 1, 'b6e1f34f-08f9-49b5-922a-ac42740a7bdc');

--
-- Extraindo dados da tabela `endereco`
--

INSERT INTO `endereco` (`id`, `cep`, `logradouro`, `complemento`, `bairro`, `numero`, `estado`, `cidade`, `createdAt`, `updatedAt`) VALUES
(1, 616961, 'Av Guapira', NULL, 'Tucuruvi', '945', 'SP', 'São Paulo', '2021-07-19 02:37:43', '2021-07-19 02:37:43');

--
-- Extraindo dados da tabela `plano`
--

INSERT INTO `plano` (`id`, `nome`, `orcamentos`, `listagem`, `publicidade`, `preco`, `preco_promocional`, `parcelas`, `createdAt`, `updatedAt`) VALUES
(1, 'Parafuso', 1, 0, 0, 550, 550, 12, NULL, NULL),
(2, 'Porca', 1, 1, 0, 680, 680, 12, NULL, NULL),
(3, 'Porca e Parafuso', 1, 1, 1, 800, 800, 12, NULL, NULL);

--
-- Extraindo dados da tabela `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `tipo`) VALUES
(1, 'Administrador'),
(2, 'Fornecedor'),
(3, 'Cliente');

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`, `createdAt`, `updatedAt`, `tipo_usuario_id`) VALUES
('b6e1f34f-08f9-49b5-922a-ac42740a7bdc', 'Victor', 'victoramota@gmail.com', '$2b$10$M0aF5Qj3g.Q/m1CWkLx0Rucb4XNZ4S4NnbfdEM5kXcc1AYhhAB4je', '2021-07-19 01:58:12', '2021-07-19 01:58:12', 3),
('c1e3c9ac-ca8d-42fb-becf-14dcaa57387d', 'admin', 'aporcaeoparafuso@gmail.com', '$2b$10$hLpkr/Z71POeJyBEmVZgsOlsEw4WCLd4N4KH9OV8fC049bfS7hi22', '2021-07-19 01:55:03', '2021-07-19 01:55:03', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
