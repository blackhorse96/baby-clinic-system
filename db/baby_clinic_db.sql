-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2023 at 08:56 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baby_clinic_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `birthday` date NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `nic`, `birthday`, `phone_number`, `email`, `address`, `user_id`) VALUES
(1, 'Super', '123456789V', '1990-01-01', '1234567890', 'super@example.com', 'Colombo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `babies`
--

CREATE TABLE `babies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `birth_time` time NOT NULL,
  `birth_weight` float NOT NULL,
  `birth_height` float NOT NULL,
  `gender` varchar(10) NOT NULL,
  `register_date` date NOT NULL,
  `moh_division` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL,
  `apgar_score` int(11) NOT NULL,
  `hospital` varchar(100) NOT NULL,
  `health_division` varchar(255) NOT NULL,
  `mother_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `babies_height_weight`
--

CREATE TABLE `babies_height_weight` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `height` float NOT NULL,
  `weight` float NOT NULL,
  `baby_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `babies_vaccines`
--

CREATE TABLE `babies_vaccines` (
  `id` int(11) NOT NULL,
  `age` varchar(100) NOT NULL,
  `vaccine` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `baby_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `midwives`
--

CREATE TABLE `midwives` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `birthday` date NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `hospital` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mothers`
--

CREATE TABLE `mothers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `husband_name` varchar(100) NOT NULL,
  `husband_phone_number` varchar(15) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mothers`
--

INSERT INTO `mothers` (`id`, `name`, `nic`, `birthday`, `email`, `phone_number`, `address`, `husband_name`, `husband_phone_number`, `user_id`) VALUES
(1, 'mother 1', '7874545V', '0000-00-00', 'test@emk.com', '1234567890', 'colombo', 'husband1', '123456789', 2),
(2, 'vsdsv', 'dvsdfsdfsdf', '2023-08-11', 'sdfsdf@sd.gn', 'dsfsfsdfsdf', 'sdfsfgdfg', 'fdgdfgdf', 'ggdfgdfg', 3),
(3, 'fsfsd', 'fsdfsdf', '2023-08-09', 'sdfsdf@ere.nm', 'f456465456', '45645645grdgh', 'hfdghfgh', 'fghfhfghdgh', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users_credentials`
--

CREATE TABLE `users_credentials` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('SuperAdmin','Admin','Midwife','Mother') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_credentials`
--

INSERT INTO `users_credentials` (`id`, `username`, `password`, `role`) VALUES
(1, 'superadmin', '$2y$10$tWDbZOsGLoGu/mQlnBkj8O/xJ4sMspgA9kb692Rr8oF8VszZ8CjWO', 'SuperAdmin'),
(2, 'mother1', '$2y$10$h6BQyi9IDb8VpJYEbSHPDeuGEJG77cdYQ0c4ORSPR9lIklcHRz2Uu', 'Mother'),
(3, 'dgfdgdfg', '$2y$10$gC5JZfAi9iotILVjVmhgqurSmsNiWJfteYAaiCPhC9t4QxMLTXQVy', 'Mother'),
(4, 'gdghdgh', '$2y$10$BXiB/UWpq9aYPtiWNyln/.N.f74.McAqDCJL1MJWejdnA74bEg3Ru', 'Mother');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `babies`
--
ALTER TABLE `babies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mother_id` (`mother_id`);

--
-- Indexes for table `babies_height_weight`
--
ALTER TABLE `babies_height_weight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `baby_id` (`baby_id`);

--
-- Indexes for table `babies_vaccines`
--
ALTER TABLE `babies_vaccines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `baby_id` (`baby_id`);

--
-- Indexes for table `midwives`
--
ALTER TABLE `midwives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `mothers`
--
ALTER TABLE `mothers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users_credentials`
--
ALTER TABLE `users_credentials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `babies`
--
ALTER TABLE `babies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `babies_height_weight`
--
ALTER TABLE `babies_height_weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `babies_vaccines`
--
ALTER TABLE `babies_vaccines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `midwives`
--
ALTER TABLE `midwives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mothers`
--
ALTER TABLE `mothers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users_credentials`
--
ALTER TABLE `users_credentials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_credentials` (`id`);

--
-- Constraints for table `babies`
--
ALTER TABLE `babies`
  ADD CONSTRAINT `babies_ibfk_1` FOREIGN KEY (`mother_id`) REFERENCES `mothers` (`id`);

--
-- Constraints for table `babies_height_weight`
--
ALTER TABLE `babies_height_weight`
  ADD CONSTRAINT `babies_height_weight_ibfk_1` FOREIGN KEY (`baby_id`) REFERENCES `babies` (`id`);

--
-- Constraints for table `babies_vaccines`
--
ALTER TABLE `babies_vaccines`
  ADD CONSTRAINT `babies_vaccines_ibfk_1` FOREIGN KEY (`baby_id`) REFERENCES `babies` (`id`);

--
-- Constraints for table `midwives`
--
ALTER TABLE `midwives`
  ADD CONSTRAINT `midwives_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_credentials` (`id`);

--
-- Constraints for table `mothers`
--
ALTER TABLE `mothers`
  ADD CONSTRAINT `mothers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_credentials` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
