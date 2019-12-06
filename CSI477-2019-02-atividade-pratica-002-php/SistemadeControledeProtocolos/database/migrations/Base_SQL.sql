drop schema if exists protocols;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `protocols` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER IF NOT EXISTS `sistemaweb`@`localhost` identified by "123456";
GRANT ALL PRIVILEGES ON protocols.* TO `sistemaweb`@`localhost`;

USE protocols;

COMMIT;