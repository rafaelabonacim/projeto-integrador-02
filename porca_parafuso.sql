-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jul-2021 às 03:11
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
(100, '02265001', 'Av Guapira', 'Casa 3', 'Tucuruvi', '945', 'SP', 'São Paulo', '2021-07-25 16:45:26', '2021-07-25 16:45:26'),
(102, '05425001', 'Rua da Selva', 'Galpão 1000', 'Jungle', '4', 'AM', 'Manaus', '2021-07-25 17:00:16', '2021-07-25 17:00:16'),
(104, '55555555', 'Rua Forever', 'Para Sempre', 'Forever', '658', 'DF', 'Brasilia', '2021-07-26 01:08:03', '2021-07-26 01:08:03');

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
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `fornecedor`
--

INSERT INTO `fornecedor` (`id`, `telefone`, `whatsapp`, `cnpj`, `endereco_id`, `usuario_id`, `createdAt`, `updatedAt`) VALUES
(78, '11111111111', '11111111111', '11111111111111', 100, '2a893f30-a786-4d87-8902-eb78fe8e2090', '2021-07-25 16:45:26', '2021-07-25 16:45:26'),
(80, '22222222222', '22222222222', '22222222222222', 102, '2a4a6c3d-0f99-402c-bfe1-bca19f0b283a', '2021-07-25 17:00:16', '2021-07-25 17:00:16'),
(82, '33333333333', '33333333333', '33333333333333', 104, '8410aa15-4e9b-45da-8e71-009dfe956730', '2021-07-26 01:08:03', '2021-07-26 01:08:03');

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
(78, 25),
(80, 1),
(80, 2),
(80, 3),
(80, 4),
(80, 5),
(80, 6),
(80, 7),
(80, 8),
(80, 9),
(80, 10),
(80, 11),
(80, 12),
(80, 13),
(80, 14),
(80, 15),
(80, 16),
(80, 17),
(80, 18),
(80, 19),
(80, 20),
(80, 21),
(80, 22),
(80, 23),
(80, 24),
(80, 25),
(80, 26),
(80, 27),
(82, 2),
(82, 3),
(82, 4);

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
(78, 1),
(80, 2),
(82, 1),
(82, 2);

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
(1, 'Porca e Parafuso', '800', '2021-07-25', '2022-07-25', 3, 78, '2021-07-25 16:45:26', '2021-07-25 16:45:26'),
(2, 'Parafuso', '550', '2021-07-25', '2022-07-25', 1, 80, '2021-07-25 17:00:16', '2021-07-25 17:00:16'),
(3, 'Porca e Parafuso', '800', '2021-07-25', '2022-07-25', 3, 82, '2021-07-26 01:08:03', '2021-07-26 01:08:03');

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
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
('2a4a6c3d-0f99-402c-bfe1-bca19f0b283a', 'Usinagem da Selva', 'contato@usinadaselva.com.br', '$2b$10$w3w57GE8fvnVY0NMUfp5Quvo50GzkOtaQjQdS44CqFtMR9ObczDku', 2, '2021-07-25 17:00:16', '2021-07-25 17:00:16'),
('2a893f30-a786-4d87-8902-eb78fe8e2090', 'Usinagem Bombástica', 'contato@bombastica.com.br', '$2b$10$37JLdOQugi7y1.DTVg0gUO9Vq1KgUojPK8HLrqj/H1aw4.W0s8NUO', 2, '2021-07-25 16:45:26', '2021-07-25 16:45:26'),
('8410aa15-4e9b-45da-8e71-009dfe956730', 'Usinagem Forever', 'contato@forever.com.br', '$2b$10$0PGxY04jxnRzTNZ4u1OGrOS5k6pOJIE.rb.W/Kq3WCaHiTRhkzQxG', 2, '2021-07-26 01:08:03', '2021-07-26 01:08:03');

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
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
