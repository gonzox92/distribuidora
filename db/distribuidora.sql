-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: localhost    Database: distribuidora
-- ------------------------------------------------------
-- Server version	5.6.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS distribuidora;
CREATE DATABASE IF NOT EXISTS distribuidora;
USE distribuidora;

--
-- Table structure for table `asignar_carro`
--

DROP TABLE IF EXISTS `asignar_carro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asignar_carro` (
  `cod_asignar_carro` int(5) NOT NULL,
  `cod_chofer` int(5) NOT NULL,
  `cod_carros` int(5) NOT NULL,
  `fecha_asignacion` date NOT NULL,
  PRIMARY KEY (`cod_asignar_carro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignar_carro`
--

LOCK TABLES `asignar_carro` WRITE;
/*!40000 ALTER TABLE `asignar_carro` DISABLE KEYS */;
/*!40000 ALTER TABLE `asignar_carro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carros`
--

DROP TABLE IF EXISTS `carros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carros` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CodCarro` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Placa` varchar(7) COLLATE utf8mb4_spanish_ci NOT NULL,
  `NumeroChasis` varchar(17) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Marca` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Modelo` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Color` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carros`
--

LOCK TABLES `carros` WRITE;
/*!40000 ALTER TABLE `carros` DISABLE KEYS */;
INSERT INTO `carros` VALUES (1,'c002','abc-001','123','Suzuki','4x4','Negro'),(2,'003','abc-002','132','Ford','Mustang','Verde');
/*!40000 ALTER TABLE `carros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cds`
--

DROP TABLE IF EXISTS `cds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cds` (
  `titel` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `interpret` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `jahr` int(11) DEFAULT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cds`
--

LOCK TABLES `cds` WRITE;
/*!40000 ALTER TABLE `cds` DISABLE KEYS */;
INSERT INTO `cds` VALUES ('Beauty','Ryuichi Sakamoto',1990,1),('Goodbye Country (Hello Nightclub)','Groove Armada',2001,4),('Glee','Bran Van 3000',1997,5);
/*!40000 ALTER TABLE `cds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choferes`
--

DROP TABLE IF EXISTS `choferes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choferes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CodChofer` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ApellidoPaterno` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ApellidoMaterno` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Celular` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `CI` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Licencia` varchar(1) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choferes`
--

LOCK TABLES `choferes` WRITE;
/*!40000 ALTER TABLE `choferes` DISABLE KEYS */;
/*!40000 ALTER TABLE `choferes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CodCliente` int(5) NOT NULL,
  `CodZona` int(5) NOT NULL,
  `CodTipoCliente` int(5) NOT NULL,
  `Nombre` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ApellidoPaterno` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ApellidoMaterno` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Direccion` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Telefono` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Celular` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  `CI` varchar(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (32,0,0,0,'Le pufasdas','la','peste','','123','456','4548'),(33,0,0,0,'master','1231','4654','56456','456','789','13212cba'),(34,0,0,0,'Gonzalo','Aguayo','Velez','C. San Lorenzo','4645','456','8035108'),(35,0,0,0,'Miguel','Goda','','Beni','456456','9879','161231'),(36,0,0,0,'aaa','aaa','aaa','aaa','123','123','000'),(37,0,0,0,'1231','2313','2131','23123','123','123','23123');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_cliente`
--

DROP TABLE IF EXISTS `tipo_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_cliente` (
  `cod_tipo_cliente` int(5) NOT NULL,
  `nombre_tipo_cliente` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_tipo_cliente` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descuento` int(2) NOT NULL,
  PRIMARY KEY (`cod_tipo_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_cliente`
--

LOCK TABLES `tipo_cliente` WRITE;
/*!40000 ALTER TABLE `tipo_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `cod_usuario` int(5) NOT NULL,
  `nombre_usuario` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ap_paterno_usuario` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ap_materno_usuario` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `log` varchar(6) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(7) COLLATE utf8mb4_spanish_ci NOT NULL,
  `tipo_cuenta` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `celular` int(7) NOT NULL,
  `CI` int(7) NOT NULL,
  PRIMARY KEY (`cod_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zonas`
--

DROP TABLE IF EXISTS `zonas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zonas` (
  `cod_zona` int(5) NOT NULL,
  `nombre_zona` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_zona` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`cod_zona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zonas`
--

LOCK TABLES `zonas` WRITE;
/*!40000 ALTER TABLE `zonas` DISABLE KEYS */;
/*!40000 ALTER TABLE `zonas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-21 22:01:47
