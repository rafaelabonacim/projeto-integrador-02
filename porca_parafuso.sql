-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Set-2021 às 22:04
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `area_de_atendimento`
--

CREATE TABLE `area_de_atendimento` (
  `id` int(11) NOT NULL,
  `estado` varchar(2) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `area_de_atendimento`
--

INSERT INTO `area_de_atendimento` (`id`, `estado`) VALUES
(1, 'AC'),
(2, 'AL'),
(3, 'AP'),
(4, 'AM'),
(5, 'BA'),
(6, 'CE'),
(7, 'DF'),
(8, 'ES'),
(9, 'GO'),
(10, 'MA'),
(11, 'MT'),
(12, 'MS'),
(13, 'MG'),
(14, 'PA'),
(15, 'PB'),
(16, 'PR'),
(17, 'PE'),
(18, 'PI'),
(19, 'RJ'),
(20, 'RN'),
(21, 'RS'),
(22, 'RO'),
(23, 'RR'),
(24, 'SC'),
(25, 'SP'),
(26, 'SE'),
(27, 'TO');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `telefone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `whatsapp` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `endereco_id` int(11) NOT NULL,
  `usuario_id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `cep` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `logradouro` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `complemento` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bairro` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `numero` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `cidade` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `endereco`
--

INSERT INTO `endereco` (`id`, `cep`, `logradouro`, `complemento`, `bairro`, `numero`, `estado`, `cidade`, `createdAt`, `updatedAt`) VALUES
(112, '02265005', 'Rua Nova', 'Galpão 500', 'Bairro Novo', '4545', 'SP', 'São Paulo', '2021-08-01 02:31:55', '2021-08-08 17:55:06'),
(113, '05425001', 'Rua Velha', '', 'Pinheiros', '582', 'SP', 'São Paulo', '2021-08-01 22:11:34', '2021-08-08 00:51:49'),
(114, '02265001', 'Av Guapira', 'Casa 3', 'Tucuruvi', '945', 'MG', 'Poços de Caldas', '2021-08-02 23:50:50', '2021-08-09 00:09:28'),
(115, '52024444', 'Rua das Peripercias', 'Casa 100', 'Peri', '1000', 'AL', 'Alagoas', '2021-08-08 13:29:01', '2021-08-09 00:15:22'),
(119, '05698555', 'Rua das Rafildas', '', 'Filda', '68', 'BA', 'Salvador', '2021-08-08 18:22:26', '2021-08-08 18:22:26'),
(120, '02265001', 'Rua Metálica', 'Bomba Atômica', 'Metal', '300', 'CE', 'Fortaleza', '2021-08-09 00:13:36', '2021-08-09 00:13:36'),
(121, '02265001', 'Rua Metálica', 'Bomba Atômica', 'Metal', '300', 'CE', 'Fortaleza', '2021-08-09 00:14:21', '2021-08-09 00:14:21'),
(122, '05500000', 'Rua Porcine', 'Chiqueiro 2', 'Porcolin', '66', 'SC', 'Joinville', '2021-08-14 19:44:26', '2021-08-14 19:45:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `fornecedor`
--

CREATE TABLE `fornecedor` (
  `id` int(11) NOT NULL,
  `telefone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `whatsapp` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cnpj` varchar(14) COLLATE utf8_unicode_ci NOT NULL,
  `endereco_id` int(11) NOT NULL,
  `usuario_id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `fornecedor`
--

INSERT INTO `fornecedor` (`id`, `telefone`, `whatsapp`, `cnpj`, `endereco_id`, `usuario_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(88, '11111111111', '11111111111', '11111111111111', 112, '16395921-06ef-4420-aa73-dace2883923d', '2021-08-01 02:31:55', '2021-08-08 17:55:06', NULL),
(89, '22222222222', '22222222222', '22222222222222', 113, '6c991008-580a-4c21-b574-ecc8623b5aa1', '2021-08-01 22:11:34', '2021-08-08 00:51:49', NULL),
(90, '33333333333', '33333333333', '33333333333333', 114, 'f24b301e-05ed-4705-8cd3-221ca8a88ad4', '2021-08-02 23:50:50', '2021-08-09 00:09:28', NULL),
(91, '44444444444', '44444444444', '44444444444444', 115, '888d00d8-e397-4f06-a502-846882a1262b', '2021-08-08 13:29:01', '2021-08-09 00:15:22', NULL),
(93, '55555555555', '55555555555', '55555555555555', 119, '5c4ad7d7-951d-4aa9-8d0d-67b47af82c87', '2021-08-08 18:22:26', '2021-08-08 18:22:26', NULL),
(94, '66666666666', '66666666666', '66666666666666', 121, 'a01dd9c2-7e20-4306-b66e-e36d77c302b4', '2021-08-09 00:14:21', '2021-08-09 00:14:21', NULL),
(95, '77777777777', '77777777777', '77777777777777', 122, '6c737967-ad56-4308-a99b-c265acac214a', '2021-08-14 19:44:26', '2021-08-14 19:45:25', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fornecedor_has_area`
--

CREATE TABLE `fornecedor_has_area` (
  `fornecedor_id` int(11) NOT NULL,
  `area_de_atendimento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `fornecedor_has_area`
--

INSERT INTO `fornecedor_has_area` (`fornecedor_id`, `area_de_atendimento_id`) VALUES
(88, 1),
(88, 2),
(88, 3),
(88, 4),
(88, 5),
(88, 6),
(88, 7),
(88, 8),
(88, 9),
(88, 10),
(88, 11),
(88, 12),
(88, 13),
(88, 14),
(88, 15),
(88, 16),
(88, 17),
(88, 18),
(88, 19),
(88, 20),
(88, 21),
(88, 22),
(88, 23),
(88, 24),
(88, 25),
(88, 26),
(88, 27),
(89, 3),
(90, 27),
(91, 1),
(93, 5),
(94, 2),
(94, 3),
(94, 6),
(95, 14),
(95, 15),
(95, 16);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fornecedor_has_ramo`
--

CREATE TABLE `fornecedor_has_ramo` (
  `fornecedor_id` int(11) NOT NULL,
  `ramo_atendimento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `fornecedor_has_ramo`
--

INSERT INTO `fornecedor_has_ramo` (`fornecedor_id`, `ramo_atendimento_id`) VALUES
(88, 1),
(88, 2),
(89, 1),
(90, 1),
(91, 1),
(91, 2),
(93, 1),
(93, 2),
(94, 1),
(94, 2),
(95, 1),
(95, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `orcamento`
--

CREATE TABLE `orcamento` (
  `id` int(11) NOT NULL,
  `quantidade` int(10) NOT NULL,
  `prazo` date NOT NULL,
  `materia_prima` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `detalhes` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `fornecedor_id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `plano`
--

CREATE TABLE `plano` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `orcamentos` tinyint(1) NOT NULL,
  `listagem` tinyint(1) NOT NULL,
  `publicidade` tinyint(1) NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `preco_promocional` decimal(10,0) NOT NULL,
  `parcelas` tinyint(2) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `plano`
--

INSERT INTO `plano` (`id`, `nome`, `orcamentos`, `listagem`, `publicidade`, `preco`, `preco_promocional`, `parcelas`, `createdAt`, `updatedAt`) VALUES
(1, 'Parafuso', 1, 0, 0, '550', '550', 12, NULL, NULL),
(2, 'Porca', 1, 1, 0, '680', '680', 12, NULL, NULL),
(3, 'Porca e Parafuso', 1, 1, 1, '800', '800', 12, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plano_fornecedor`
--

CREATE TABLE `plano_fornecedor` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `plano_id` int(11) NOT NULL,
  `fornecedor_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `plano_fornecedor`
--

INSERT INTO `plano_fornecedor` (`id`, `nome`, `preco`, `data_inicio`, `data_fim`, `plano_id`, `fornecedor_id`, `createdAt`, `updatedAt`) VALUES
(7, 'Parafuso', '550', '2021-07-31', '2022-07-31', 1, 88, '2021-08-01 02:31:55', '2021-08-01 02:31:55'),
(8, 'Porca e Parafuso', '800', '2021-08-01', '2022-08-01', 3, 89, '2021-08-01 22:11:34', '2021-08-01 22:11:34'),
(9, 'Parafuso', '550', '2021-08-02', '2022-08-02', 1, 90, '2021-08-02 23:50:50', '2021-08-02 23:50:50'),
(10, 'Parafuso', '550', '2021-08-08', '2022-08-08', 1, 91, '2021-08-08 13:29:01', '2021-08-08 13:29:01'),
(11, 'Parafuso', '550', '2021-08-08', '2022-08-08', 1, 93, '2021-08-08 18:22:26', '2021-08-08 18:22:26'),
(12, 'Porca', '680', '2021-08-08', '2022-08-08', 2, 94, '2021-08-09 00:14:21', '2021-08-09 00:14:21'),
(13, 'Porca', '680', '2021-08-14', '2022-08-14', 2, 95, '2021-08-14 19:44:26', '2021-08-14 19:44:26');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ramo_atendimento`
--

CREATE TABLE `ramo_atendimento` (
  `id` int(11) NOT NULL,
  `ramo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `ramo_atendimento`
--

INSERT INTO `ramo_atendimento` (`id`, `ramo`) VALUES
(1, 'Usinagem'),
(2, 'Micro Usinagem');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `tipo`) VALUES
(1, 'Administrador'),
(2, 'Fornecedor'),
(3, 'Cliente');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `nome` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `senha` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_usuario_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`, `tipo_usuario_id`, `createdAt`, `updatedAt`) VALUES
('16395921-06ef-4420-aa73-dace2883923d', 'Usinagem Nova', 'contato@usinagemnova.com.br', '$2b$10$.jvuIWhyjDgdYUUIBJMgweB.Gvpbnj6jDwkHVtQJ0ER5Czszm5dSC', 2, '2021-08-01 02:31:55', '2021-08-08 17:55:06'),
('5c4ad7d7-951d-4aa9-8d0d-67b47af82c87', 'Usinagem Rafilda', 'rafilda@usinagem.com.br', '$2b$10$v6KrJXRNUlWVJs6u3NoRf.qV.opIj5n3vkPbNaPZ4FGJ3GDMasp6i', 2, '2021-08-08 18:22:26', '2021-08-08 18:22:26'),
('6c737967-ad56-4308-a99b-c265acac214a', 'Empresa Porcolina', 'porca@porcona.com.br', '$2b$10$A/1xOmGg2uv9dXFt0nyCGeKzfEf6GY5SxjQVmBSaN8Fnt6Rh8NVFO', 2, '2021-08-14 19:44:26', '2021-08-14 19:45:25'),
('6c991008-580a-4c21-b574-ecc8623b5aa1', 'Usinagem da Selva', 'contato@usinagemselva.com.br', '$2b$10$bZEna9nvW1YBX03NfNnVJuebt.Lv.CZwrcMvbRjsouWraKEdTxaPO', 2, '2021-08-01 22:11:34', '2021-08-08 00:51:49'),
('888d00d8-e397-4f06-a502-846882a1262b', 'Usinagem da Ginca', 'contato@gincausinagem.com', '$2b$10$Vk12NCfUutCSXzpIbrlphOD.8VF9CflTaYV9UMTkUykO5SVTKgJ4C', 2, '2021-08-08 13:29:01', '2021-08-09 00:15:22'),
('a01dd9c2-7e20-4306-b66e-e36d77c302b4', 'Usinagem Metálica', 'metalica@usinagem.com.br', '$2b$10$tbTmAqt65TMUD6x3IcDa2usi7WkWeLLIdcS9ksD5uO96oz8qRtpem', 2, '2021-08-09 00:14:21', '2021-08-09 00:14:21'),
('ecc8623b5aa1-4c21-b574-580a-6c991008', 'admin', 'aporcaeoparafuso@gmail.com', '$2b$10$Dc.KdIxpFfhGhe07S2ZWeOOjDj3mFEhV.XSEY3zhpyh9GD66KnfF.', 1, '2021-01-01 03:00:00', '2021-01-01 03:00:00'),
('f24b301e-05ed-4705-8cd3-221ca8a88ad4', 'Usinagem do Victor', 'victoramota@gmail.com', '$2b$10$KcgXALf9545jLEOWjILws.VFhdgvHye0Rr6hlBN6iDns81kkfQZ3O', 2, '2021-08-02 23:50:50', '2021-08-09 00:09:28');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `area_de_atendimento`
--
ALTER TABLE `area_de_atendimento`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_cliente_endereco1_idx` (`endereco_id`),
  ADD KEY `fk_cliente_usuario2_idx` (`usuario_id`);

--
-- Índices para tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Índices para tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_fornecedor_endereco1_idx` (`endereco_id`),
  ADD KEY `fk_fornecedor_usuario1_idx` (`usuario_id`);

--
-- Índices para tabela `fornecedor_has_area`
--
ALTER TABLE `fornecedor_has_area`
  ADD PRIMARY KEY (`fornecedor_id`,`area_de_atendimento_id`),
  ADD KEY `fk_fornecedor_has_area_de_atendimento_area_de_atendimento1_idx` (`area_de_atendimento_id`),
  ADD KEY `fk_fornecedor_has_area_de_atendimento_fornecedor1_idx` (`fornecedor_id`);

--
-- Índices para tabela `fornecedor_has_ramo`
--
ALTER TABLE `fornecedor_has_ramo`
  ADD PRIMARY KEY (`fornecedor_id`,`ramo_atendimento_id`),
  ADD KEY `fk_fornecedor_has_ramo_atendimento_ramo_atendimento1_idx` (`ramo_atendimento_id`),
  ADD KEY `fk_fornecedor_has_ramo_atendimento_fornecedor1_idx` (`fornecedor_id`);

--
-- Índices para tabela `orcamento`
--
ALTER TABLE `orcamento`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_orcamento_fornecedor1_idx` (`fornecedor_id`),
  ADD KEY `fk_orcamento_cliente1_idx` (`cliente_id`);

--
-- Índices para tabela `plano`
--
ALTER TABLE `plano`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Índices para tabela `plano_fornecedor`
--
ALTER TABLE `plano_fornecedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_plano_fornecedor_plano1_idx` (`plano_id`),
  ADD KEY `fk_plano_fornecedor_fornecedor1_idx` (`fornecedor_id`);

--
-- Índices para tabela `ramo_atendimento`
--
ALTER TABLE `ramo_atendimento`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_usuario_tipo_usuario1_idx` (`tipo_usuario_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `area_de_atendimento`
--
ALTER TABLE `area_de_atendimento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de tabela `orcamento`
--
ALTER TABLE `orcamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `plano`
--
ALTER TABLE `plano`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `plano_fornecedor`
--
ALTER TABLE `plano_fornecedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `ramo_atendimento`
--
ALTER TABLE `ramo_atendimento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `fk_cliente_endereco1` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cliente_usuario2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD CONSTRAINT `fk_fornecedor_endereco1` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_fornecedor_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `fornecedor_has_area`
--
ALTER TABLE `fornecedor_has_area`
  ADD CONSTRAINT `fk_fornecedor_has_area_de_atendimento_area_de_atendimento1` FOREIGN KEY (`area_de_atendimento_id`) REFERENCES `area_de_atendimento` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_fornecedor_has_area_de_atendimento_fornecedor1` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `fornecedor_has_ramo`
--
ALTER TABLE `fornecedor_has_ramo`
  ADD CONSTRAINT `fk_fornecedor_has_ramo_fornecedor1` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_fornecedor_has_ramo_ramo_atendimento2` FOREIGN KEY (`ramo_atendimento_id`) REFERENCES `ramo_atendimento` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `orcamento`
--
ALTER TABLE `orcamento`
  ADD CONSTRAINT `fk_orcamento_cliente1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orcamento_fornecedor1` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `plano_fornecedor`
--
ALTER TABLE `plano_fornecedor`
  ADD CONSTRAINT `fk_plano_fornecedor_fornecedor1` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_plano_fornecedor_plano1` FOREIGN KEY (`plano_id`) REFERENCES `plano` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_tipo_usuario1` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipo_usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
