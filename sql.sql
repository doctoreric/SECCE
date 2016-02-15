-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 04, 2016 at 09:09 PM
-- Server version: 10.0.21-MariaDB
-- PHP Version: 5.6.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SECCE`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `gases` ()  begin
	declare id INT;
    declare co2 decimal(5,2);
    declare co  decimal(5,2);
    declare nox decimal(5,2);
    declare cal decimal(5,2);
    declare i INT;
    declare j INT;
	set i = 1;
    set j = 1;
	while i < 50 do
		set co2 = 245.12 + (i * 10)/ 4 ;
		set co = 56.57 + (i * 10)/ 4 ;
		set nox = 7.2 + (i * 10)/ 4 ;
		set cal = 291.12 + (i * 10)/ 4 ;
        set j = 1;
		while j < 100 do
			set @sq = concat("INSERT INTO `SECCE`.`gases` (`estf_id`, `gses_co2`, `gses_co`, `gses_nox`, `gses_calidad`, `gses_fecha`) VALUES ('",i,"', '",co2,"', '",co,"', '",nox,"', '",cal,"', now());");
			prepare ins from @sq;
			execute ins;
            set co2 = co2 + 0.86 + i / 10;
            set co = co + 1.12 + i /10;
            set nox = nox + 0.09 + i /10;
            set cal = cal + 1.2 + i /10;
            set j = j + 1;
		end while;
        set i = i + 1;
	end while;
    while i < 100 do
		set co2 = 295.12 + (i * 10)/ 4 ;
		set co = 116.57 + (i * 10)/ 4 ;
		set nox = 17.2 + (i * 10)/ 4 ;
		set cal = 351.12 + (i * 10)/ 4 ;
        set j = 1;
		while j < 50 do
			set @sq = concat("INSERT INTO `SECCE`.`gases` (`estf_id`, `gses_co2`, `gses_co`, `gses_nox`, `gses_calidad`, `gses_fecha`) VALUES ('",i,"', '",co2,"', '",co,"', '",nox,"', '",cal,"', now());");
			prepare ins from @sq;
			execute ins;
            set co2 = co2 - 0.86 + i / 10;
            set co = co - 1.12 + i /10;
            set nox = nox - 0.09 + i /10;
            set cal = cal - 1.2 + i /10;
            set j = j + 1;
		end while;
        set i = i + 1;
	end while;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `humedad` ()  begin
	declare i INT;
    declare hum int;
    declare a int;
    set i = 1;
	while i < 200 do
		set a = 1;
		while a < 50 do
			set @sq = concat("INSERT INTO `secce`.`humedad` (`estf_id`, `hmda_relativa`, `hmda_fecha`) VALUES ('",i,"', round( 20 + rand()* 60,2), now() + rand() * 1000);");
			prepare ins from @sq;
			execute ins;
			set a = a + 1;
         end while;
	     set i = i + 1 ;
	end while;
end$$

CREATE DEFINER=`admin`@`%` PROCEDURE `temperatura` ()  begin
	declare i INT;
    declare a,b,c DOUBLE;
	set i = 1;
    set a = 13.50;
    set b = 12.50;
    set c = 12.70;
	while i < 10 do
		set @sq = concat("INSERT INTO `SECCE`.`temperatura` (`estf_id`, `tmpr_ambiente`, `tmpr_caledera_1`, `tmpr_caldera_2`, `tmpr_fecha`) VALUES ('1', '",a,"','",b,"','",c,"', now()); ");
        prepare ins from @sq;
        execute ins;
        set i = i +1;
        set a = a + (i * 0.20);
        set b = b + (i * 0,50);
        set c = c + (i * 0,70);
	end while;
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `combustible`
--

CREATE TABLE `combustible` (
  `cmbs_id` int(11) NOT NULL,
  `estf_id` int(11) NOT NULL,
  `cmbs_tipo` text NOT NULL,
  `cmbs_gasto` int(11) NOT NULL,
  `cmbs_peso` int(11) NOT NULL,
  `cmbs_fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `combustible`
--

INSERT INTO `combustible` (`cmbs_id`, `estf_id`, `cmbs_tipo`, `cmbs_gasto`, `cmbs_peso`, `cmbs_fecha`) VALUES
(1, 1, 'Lenga', 3450, 5, '2015-11-01'),
(2, 1, 'Lenga', 3450, 5, '2015-11-04'),
(3, 3, 'Pino', 2000, 12, '2015-11-01');

-- --------------------------------------------------------

--
-- Table structure for table `estufa`
--

CREATE TABLE `estufa` (
  `estf_id` int(11) NOT NULL,
  `estf_nombre` varchar(45) DEFAULT NULL,
  `estf_modelo` varchar(45) DEFAULT NULL,
  `estf_ip` varchar(45) DEFAULT NULL,
  `estf_mac` varchar(45) DEFAULT NULL,
  `estf_comentarios` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estufa`
--

INSERT INTO `estufa` (`estf_id`, `estf_nombre`, `estf_modelo`, `estf_ip`, `estf_mac`, `estf_comentarios`) VALUES
(1, 'Calefactor 1 ', ' Modelo SECCE', '10.20.20.1', 'ff:ff:ff:01', 'estufa ok'),
(2, 'Calefactor 2 ', ' Modelo SECCE', '10.20.20.2', 'ff:ff:ff:02', 'error'),
(3, 'Calefactor 3 ', ' Modelo SECCE', '10.20.20.3', 'ff:ff:ff:03', 'estufa ok');

CREATE TABLE `gases` (
  `gses_id` int(11) NOT NULL,
  `estf_id` int(11) NOT NULL,
  `gses_co2` decimal(5,2) DEFAULT NULL,
  `gses_co` decimal(5,2) DEFAULT NULL,
  `gses_nox` decimal(5,2) DEFAULT NULL,
  `gses_calidad` decimal(5,2) DEFAULT NULL,
  `gses_fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gases`
--

INSERT INTO `gases` (`gses_id`, `estf_id`, `gses_co2`, `gses_co`, `gses_nox`, `gses_calidad`, `gses_fecha`) VALUES
(1, 1, '247.62', '59.07', '9.70', '293.62', '2015-01-02 22:18:06'),
(2, 1, '248.58', '60.29', '9.89', '294.92', '2015-01-15 22:18:06');

-- Table structure for table `humedad`
--

CREATE TABLE `humedad` (
  `hmda_id` int(11) NOT NULL,
  `estf_id` int(11) NOT NULL,
  `hmda_relativa` decimal(5,2) DEFAULT NULL,
  `hmda_fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `humedad`
--

INSERT INTO `humedad` (`hmda_id`, `estf_id`, `hmda_relativa`, `hmda_fecha`) VALUES
(1, 1, '39.72', '2015-10-16 22:47:22'),
(2, 1, '27.57', '2015-10-16 22:37:26');

-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `usro_id` int(11) NOT NULL,
  `estf_id` int(11) NOT NULL,
  `usro_nombre` varchar(45) DEFAULT NULL,
  `usro_password` varchar(45) DEFAULT NULL,
  `usro_comentarios` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usro_id`, `estf_id`, `usro_nombre`, `usro_password`, `usro_comentarios`) VALUES
(1, 1, 'Admin', 'abc.123', 'Administrador'),
(2, 2, 'esaavedra', 'abc.321', 'Usuario Normal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `combustible`
--
ALTER TABLE `combustible`
  ADD PRIMARY KEY (`cmbs_id`);

--
-- Indexes for table `estufa`
--
ALTER TABLE `estufa`
  ADD PRIMARY KEY (`estf_id`);

--
-- Indexes for table `gases`
--
ALTER TABLE `gases`
  ADD PRIMARY KEY (`gses_id`),
  ADD KEY `fk_gases_estufa1_idx` (`estf_id`);

--
-- Indexes for table `humedad`
--
ALTER TABLE `humedad`
  ADD PRIMARY KEY (`hmda_id`),
  ADD KEY `fk_humedad_estufa_idx` (`estf_id`);

--
-- Indexes for table `temperatura`
--
ALTER TABLE `temperatura`
  ADD PRIMARY KEY (`tmpr_id`),
  ADD KEY `fk_temperatura_estufa1_idx` (`estf_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usro_id`),
  ADD UNIQUE KEY `usro_nombre_UNIQUE` (`usro_nombre`),
  ADD KEY `fk_usuarios_estufa1_idx` (`estf_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `combustible`
--
ALTER TABLE `combustible`
  MODIFY `cmbs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `estufa`
--
ALTER TABLE `estufa`
  MODIFY `estf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;
--
-- AUTO_INCREMENT for table `gases`
--
ALTER TABLE `gases`
  MODIFY `gses_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7302;
--
-- AUTO_INCREMENT for table `humedad`
--
ALTER TABLE `humedad`
  MODIFY `hmda_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9752;
--
-- AUTO_INCREMENT for table `temperatura`
--
ALTER TABLE `temperatura`
  MODIFY `tmpr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `gases`
--
ALTER TABLE `gases`
  ADD CONSTRAINT `fk_gases_estufa1` FOREIGN KEY (`estf_id`) REFERENCES `estufa` (`estf_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `humedad`
--
ALTER TABLE `humedad`
  ADD CONSTRAINT `fk_humedad_estufa` FOREIGN KEY (`estf_id`) REFERENCES `estufa` (`estf_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `temperatura`
--
ALTER TABLE `temperatura`
  ADD CONSTRAINT `fk_temperatura_estufa1` FOREIGN KEY (`estf_id`) REFERENCES `estufa` (`estf_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_estufa1` FOREIGN KEY (`estf_id`) REFERENCES `estufa` (`estf_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
