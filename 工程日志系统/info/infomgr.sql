/*
Navicat MySQL Data Transfer

Source Server         : 47.88.171.215_3306
Source Server Version : 50728
Source Host           : 47.88.171.215:3306
Source Database       : infomgr

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2020-06-19 08:49:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `auths`
-- ----------------------------
DROP TABLE IF EXISTS `auths`;
CREATE TABLE `auths` (
  `authName` varchar(255) NOT NULL,
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) NOT NULL,
  `roleIndex` varchar(255) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auths
-- ----------------------------
INSERT INTO `auths` VALUES ('产值管理', '1', '0', '100');
INSERT INTO `auths` VALUES ('产值删除', '2', '1', '101');
INSERT INTO `auths` VALUES ('产值新增', '3', '1', '102');
INSERT INTO `auths` VALUES ('产值编辑', '4', '1', '103');
INSERT INTO `auths` VALUES ('营业额', '19', '0', '200');
INSERT INTO `auths` VALUES ('营业额删除', '20', '19', '201');
INSERT INTO `auths` VALUES ('营业额新增', '21', '19', '202');
INSERT INTO `auths` VALUES ('营业额编辑', '22', '19', '203');
INSERT INTO `auths` VALUES ('营业额提交', '23', '19', '205');
INSERT INTO `auths` VALUES ('产值提交', '14', '1', '105');
INSERT INTO `auths` VALUES ('产值停用', '15', '1', '106');
INSERT INTO `auths` VALUES ('产值驳回', '16', '1', '107');
INSERT INTO `auths` VALUES ('产值撤销', '17', '1', '108');
INSERT INTO `auths` VALUES ('产值通过', '18', '1', '109');
INSERT INTO `auths` VALUES ('营业额停用', '24', '19', '206');
INSERT INTO `auths` VALUES ('营业额驳回', '25', '19', '207');
INSERT INTO `auths` VALUES ('营业额撤销', '26', '19', '208');
INSERT INTO `auths` VALUES ('营业额通过', '27', '19', '209');
INSERT INTO `auths` VALUES ('利润管理', '28', '0', '300');
INSERT INTO `auths` VALUES ('利润删除', '29', '28', '301');
INSERT INTO `auths` VALUES ('利润新增', '30', '28', '302');
INSERT INTO `auths` VALUES ('利润编辑', '31', '28', '303');
INSERT INTO `auths` VALUES ('利润提交', '32', '28', '305');
INSERT INTO `auths` VALUES ('利润停用', '33', '28', '306');
INSERT INTO `auths` VALUES ('利润驳回', '34', '28', '307');
INSERT INTO `auths` VALUES ('利润撤销', '35', '28', '308');
INSERT INTO `auths` VALUES ('利润通过', '36', '28', '309');
INSERT INTO `auths` VALUES ('产值设置', '37', '1', '110');
INSERT INTO `auths` VALUES ('营业额设置', '38', '19', '210');
INSERT INTO `auths` VALUES ('利润设置', '39', '28', '310');
INSERT INTO `auths` VALUES ('图表', '40', '0', '400');
INSERT INTO `auths` VALUES ('两金', '41', '0', '500');
INSERT INTO `auths` VALUES ('两金删除', '42', '41', '501');
INSERT INTO `auths` VALUES ('两金新增', '43', '41', '502');
INSERT INTO `auths` VALUES ('两金编辑', '44', '41', '503');
INSERT INTO `auths` VALUES ('两金提交', '45', '41', '505');
INSERT INTO `auths` VALUES ('两金停用', '46', '41', '506');
INSERT INTO `auths` VALUES ('两金驳回', '47', '41', '507');
INSERT INTO `auths` VALUES ('两金撤销', '48', '41', '508');
INSERT INTO `auths` VALUES ('两金通过', '49', '41', '509');
INSERT INTO `auths` VALUES ('两金设置', '50', '41', '510');

-- ----------------------------
-- Table structure for `jls`
-- ----------------------------
DROP TABLE IF EXISTS `jls`;
CREATE TABLE `jls` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `col1` varchar(255) NOT NULL,
  `col4` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of jls
-- ----------------------------

-- ----------------------------
-- Table structure for `ljs`
-- ----------------------------
DROP TABLE IF EXISTS `ljs`;
CREATE TABLE `ljs` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `monthOutPut` varchar(255) NOT NULL,
  `monthNextOutPut` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ljs
-- ----------------------------
INSERT INTO `ljs` VALUES ('3', '已审核', '3', '第一季度', '2020', '1', '321', '321', '3');
INSERT INTO `ljs` VALUES ('5', '已审核', '7', '第一季度', '2020', '1', '123', '213', '11');
INSERT INTO `ljs` VALUES ('6', '已审核', '7', '第一季度', '2020', '2', '156', '165', '11');
INSERT INTO `ljs` VALUES ('7', '已审核', '7', '第一季度', '2020', '3', '456', '1236', '11');

-- ----------------------------
-- Table structure for `outputs`
-- ----------------------------
DROP TABLE IF EXISTS `outputs`;
CREATE TABLE `outputs` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `monthOutPut` varchar(255) NOT NULL,
  `monthNextOutPut` varchar(255) NOT NULL,
  `monthLowerOutPut` varchar(255) DEFAULT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of outputs
-- ----------------------------
INSERT INTO `outputs` VALUES ('1', '停用', '3', '第一季度', '2020', '1', '100', '200', '200', '3');
INSERT INTO `outputs` VALUES ('2', '停用', '3', '第一季度', '2020', '3', '222', '22', '22', '3');
INSERT INTO `outputs` VALUES ('8', '草稿', '3', '第一季度', '2020', '2', '200', '300', '', '3');
INSERT INTO `outputs` VALUES ('9', '草稿', '3', '第二季度', '2020', '5', '22', '22', '2222', '3');
INSERT INTO `outputs` VALUES ('10', '草稿', '3', '第一季度', '2019', '2', '20', '321', '2121', '3');
INSERT INTO `outputs` VALUES ('13', '停用', '7', '第一季度', '2020', '1', '1238.82', '1236', '1000', '12');
INSERT INTO `outputs` VALUES ('15', '已审核', '7', '第一季度', '2020', '2', '5', '4', '3', '12');
INSERT INTO `outputs` VALUES ('16', '已审核', '7', '第一季度', '2020', '3', '1363', '1200', '1100', '12');
INSERT INTO `outputs` VALUES ('17', '停用', '7', '第二季度', '2020', '4', '1236', '1300', '1100', '12');
INSERT INTO `outputs` VALUES ('18', '已审核', '7', '第二季度', '2020', '5', '3421', '2100', '1100', '12');
INSERT INTO `outputs` VALUES ('20', '已审核', '8', '第三季度', '2020', '7', '500', '600', '400', '11');
INSERT INTO `outputs` VALUES ('21', '已审核', '8', '第三季度', '2020', '8', '700', '500', '300', '11');
INSERT INTO `outputs` VALUES ('22', '已审核', '8', '第二季度', '2020', '6', '0', '1659', '1488', '11');
INSERT INTO `outputs` VALUES ('24', '已审核', '8', '第四季度', '2020', '10', '1954', '1683', '1465', '11');
INSERT INTO `outputs` VALUES ('25', '已审核', '8', '第三季度', '2020', '9', '1598', '1632', '1411', '11');
INSERT INTO `outputs` VALUES ('27', '停用', '12', '第二季度', '2021', '4', '345678', '123456', '', '13');
INSERT INTO `outputs` VALUES ('28', '已审核', '7', '第二季度', '2020', '6', '2425', '2425', '', '12');
INSERT INTO `outputs` VALUES ('29', '已审核', '7', '第二季度', '2020', '4', '1000', '2000', '', '12');
INSERT INTO `outputs` VALUES ('30', '已审核', '7', '第三季度', '2020', '7', '2000', '2000', '', '12');
INSERT INTO `outputs` VALUES ('31', '已审核', '7', '第三季度', '2020', '8', '2000', '2000', '', '12');
INSERT INTO `outputs` VALUES ('32', '已审核', '7', '第三季度', '2020', '9', '2000', '2000', '', '12');
INSERT INTO `outputs` VALUES ('33', '已审核', '7', '第四季度', '2020', '10', '2000', '2000', '2000', '12');
INSERT INTO `outputs` VALUES ('34', '已审核', '7', '第四季度', '2020', '11', '2000', '2000', '1500', '12');
INSERT INTO `outputs` VALUES ('35', '已审核', '7', '第四季度', '2020', '12', '2000', '2000', '1800', '12');
INSERT INTO `outputs` VALUES ('36', '已审核', '12', '第一季度', '2020', '1', '123', '123', '', '13');
INSERT INTO `outputs` VALUES ('37', '已审核', '12', '第一季度', '2020', '2', '124', '124', '', '13');
INSERT INTO `outputs` VALUES ('38', '已审核', '12', '第一季度', '2020', '3', '123', '123', '', '13');
INSERT INTO `outputs` VALUES ('39', '已审核', '12', '第二季度', '2020', '4', '123', '133', '', '13');
INSERT INTO `outputs` VALUES ('40', '已审核', '12', '第二季度', '2020', '5', '121', '122', '', '13');
INSERT INTO `outputs` VALUES ('41', '已审核', '12', '第二季度', '2020', '6', '121', '111', '', '13');
INSERT INTO `outputs` VALUES ('42', '已审核', '12', '第三季度', '2020', '7', '111', '111', '', '13');
INSERT INTO `outputs` VALUES ('43', '已审核', '12', '第三季度', '2020', '8', '111', '111', '', '13');
INSERT INTO `outputs` VALUES ('44', '已审核', '12', '第三季度', '2020', '9', '111', '111', '', '13');
INSERT INTO `outputs` VALUES ('45', '已审核', '12', '第四季度', '2020', '10', '212', '222', '', '13');
INSERT INTO `outputs` VALUES ('46', '已审核', '12', '第四季度', '2020', '11', '121', '121', '', '13');
INSERT INTO `outputs` VALUES ('47', '已审核', '12', '第四季度', '2020', '12', '121', '111', '', '13');

-- ----------------------------
-- Table structure for `profits`
-- ----------------------------
DROP TABLE IF EXISTS `profits`;
CREATE TABLE `profits` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `monthOutPut` varchar(255) NOT NULL,
  `monthNextOutPut` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of profits
-- ----------------------------
INSERT INTO `profits` VALUES ('1', '已审核', '3', '第三季度', '2020', '8', '213', '3213', '3');
INSERT INTO `profits` VALUES ('2', '已审核', '7', '第一季度', '2020', '1', '1253', '1130', '11');
INSERT INTO `profits` VALUES ('3', '已审核', '7', '第一季度', '2020', '2', '2300', '2600', '11');
INSERT INTO `profits` VALUES ('4', '已审核', '8', '第三季度', '2020', '7', '1264', '1300', '11');
INSERT INTO `profits` VALUES ('5', '已审核', '8', '第三季度', '2020', '8', '1839', '1658', '11');
INSERT INTO `profits` VALUES ('6', '已审核', '8', '第三季度', '2020', '9', '1645', '1324', '11');
INSERT INTO `profits` VALUES ('7', '已审核', '8', '第四季度', '2020', '10', '1659', '1700', '11');
INSERT INTO `profits` VALUES ('8', '已审核', '8', '第二季度', '2020', '6', '0', '1362', '11');
INSERT INTO `profits` VALUES ('9', '草稿', '3', '第二季度', '2021', '4', '321', '321', '3');
INSERT INTO `profits` VALUES ('10', '已审核', '7', '第一季度', '2020', '3', '1265', '1632', '11');
INSERT INTO `profits` VALUES ('11', '已审核', '12', '第一季度', '2020', '1', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('12', '已审核', '12', '第一季度', '2020', '2', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('13', '已审核', '12', '第一季度', '2020', '3', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('14', '已审核', '12', '第二季度', '2020', '4', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('15', '已审核', '12', '第二季度', '2020', '4', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('16', '已审核', '12', '第二季度', '2020', '5', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('17', '已审核', '12', '第二季度', '2020', '6', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('18', '已审核', '12', '第三季度', '2020', '7', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('19', '已审核', '12', '第三季度', '2020', '8', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('20', '已审核', '12', '第三季度', '2020', '9', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('21', '已审核', '12', '第四季度', '2020', '10', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('22', '已审核', '12', '第四季度', '2020', '11', '47888', '47888', '13');
INSERT INTO `profits` VALUES ('23', '已审核', '12', '第四季度', '2020', '12', '47888', '47888', '13');

-- ----------------------------
-- Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `rname` varchar(255) NOT NULL,
  `authArr` varchar(255) NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', '系统管理员', '*', '1', '1');
INSERT INTO `roles` VALUES ('2', 'a', '100,105,109,200,205,209,300,305,309', '1', '1');
INSERT INTO `roles` VALUES ('3', '录入', '100,101,102,103,105,106,108,110,200,201,202,203,205,206,208,210,300,301,302,303,305,306,308,310,400', '3', '1');
INSERT INTO `roles` VALUES ('4', '审核', '100,106,107,109,200,206,207,209,300,306,307,309,400', '4', '1');
INSERT INTO `roles` VALUES ('5', '查看', '100,106,200,206,300,306,400,500,506', '5', '1');

-- ----------------------------
-- Table structure for `turnovers`
-- ----------------------------
DROP TABLE IF EXISTS `turnovers`;
CREATE TABLE `turnovers` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `monthOutPut` varchar(255) NOT NULL,
  `monthNextOutPut` varchar(255) NOT NULL,
  `monthLowerOutPut` varchar(255) DEFAULT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of turnovers
-- ----------------------------
INSERT INTO `turnovers` VALUES ('1', '已审核', '3', '第一季度', '2020', '1', '200', '222', '222', '3');
INSERT INTO `turnovers` VALUES ('2', '已审核', '7', '第一季度', '2020', '1', '4554.2', '4000', '1000', '12');
INSERT INTO `turnovers` VALUES ('3', '已审核', '7', '第一季度', '2020', '2', '3828.83', '3635.78', '2390', '12');
INSERT INTO `turnovers` VALUES ('4', '已审核', '7', '第一季度', '2020', '3', '3', '4', '3', '12');
INSERT INTO `turnovers` VALUES ('5', '已审核', '7', '第四季度', '2020', '12', '21', '321', '321', '11');
INSERT INTO `turnovers` VALUES ('6', '已审核', '7', '第三季度', '2020', '9', '10000', '20000', '3000', '11');
INSERT INTO `turnovers` VALUES ('7', '已审核', '8', '第三季度', '2020', '7', '1200', '1600', '1000', '11');
INSERT INTO `turnovers` VALUES ('8', '已审核', '8', '第二季度', '2020', '6', '0', '1327', '1645', '11');
INSERT INTO `turnovers` VALUES ('9', '已审核', '8', '第三季度', '2020', '8', '1432', '1245', '1130', '11');
INSERT INTO `turnovers` VALUES ('10', '已审核', '8', '第三季度', '2020', '9', '1892', '1698', '1652', '11');
INSERT INTO `turnovers` VALUES ('11', '已审核', '8', '第四季度', '2020', '10', '1965', '1864', '1796', '11');
INSERT INTO `turnovers` VALUES ('14', '已审核', '12', '第一季度', '2020', '1', '212', '212', '', '13');
INSERT INTO `turnovers` VALUES ('15', '已审核', '12', '第一季度', '2020', '2', '12', '12', '', '13');
INSERT INTO `turnovers` VALUES ('16', '已审核', '12', '第一季度', '2020', '3', '2112', '2121', '', '13');
INSERT INTO `turnovers` VALUES ('17', '已审核', '12', '第一季度', '2020', '3', '1212', '1212', '', '13');
INSERT INTO `turnovers` VALUES ('18', '已审核', '12', '第一季度', '2020', '3', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('19', '已审核', '12', '第二季度', '2020', '4', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('20', '已审核', '12', '第二季度', '2020', '5', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('21', '已审核', '12', '第二季度', '2020', '6', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('22', '已审核', '12', '第三季度', '2020', '7', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('23', '已审核', '12', '第三季度', '2020', '8', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('24', '已审核', '12', '第三季度', '2020', '9', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('25', '已审核', '12', '第四季度', '2020', '10', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('26', '已审核', '12', '第四季度', '2020', '12', '171215', '171215', '', '13');
INSERT INTO `turnovers` VALUES ('27', '已审核', '12', '第四季度', '2020', '11', '171215', '171215', '', '13');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `mobileNo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rid` int(11) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('3', '13635967675', '$2b$10$ODAFNBkzF26z5R2hI4cS.eZLhfVFLe8y/KV8o6ZhHWmOy017j8k66', '开发账号', 'http://47.88.171.215/upload/1586617913625.gif', '1');
INSERT INTO `users` VALUES ('11', '15797703504', '$2b$10$PqrAHhBDYXZfyjHo5EjzbO5GeJ9SSjB5p6DT2ENWISX0yM2Pz650S', '徐康', '', '1');
INSERT INTO `users` VALUES ('12', '17680242882', '$2b$10$1xMtfXZ8Xgo7n0gFfsGb3O6OpCPPe/7VjENfjWNuYxG.2if5vtHdm', '王海鑫', '', '3');
INSERT INTO `users` VALUES ('13', '18222152257', '$2b$10$KcfOpoBqgsDTItLFkNCuQOx8jkbzGQsJSRJu3OU.XbZMBw/.5AeFW', '杨钒', '', '3');
INSERT INTO `users` VALUES ('16', '18601362390', '$2b$10$shQNmJHqQIhnP4o5k6.ZJOkQNUK.o78y6JDyuVqlcCVv7uoIt/Ztq', '王总', '', '1');
INSERT INTO `users` VALUES ('17', '13814958754', '$2b$10$rd.1fhIqZjeERgwJFAAg3uw4/ewPkS4aqW2rcx.8iZJQNTLh9do/C', '测试2', '', '5');
INSERT INTO `users` VALUES ('18', '18356896592', '$2b$10$K8KsDKJcuMao0gSxg2dbm.7dGwoFKUdbSy.2AvjpBaOPoLV7xUgyS', '赵亚杰', '', '3');

-- ----------------------------
-- Table structure for `xmInfoJds`
-- ----------------------------
DROP TABLE IF EXISTS `xmInfoJds`;
CREATE TABLE `xmInfoJds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `infoId` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `jd` varchar(255) NOT NULL,
  `jdNext` varchar(255) DEFAULT NULL,
  `jdLower` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of xmInfoJds
-- ----------------------------
INSERT INTO `xmInfoJds` VALUES ('2', '5', '3', '第一季度', '231', '3213');
INSERT INTO `xmInfoJds` VALUES ('3', '5', '3', '第二季度', '21', '3213');
INSERT INTO `xmInfoJds` VALUES ('4', '16', '6', '第一季度', '321', '3213');
INSERT INTO `xmInfoJds` VALUES ('5', '17', '3', '第四季度', '321', '3213');
INSERT INTO `xmInfoJds` VALUES ('6', '18', '3', '第一季度', '3211', '321');
INSERT INTO `xmInfoJds` VALUES ('7', '18', '3', '第二季度', '321', '332');
INSERT INTO `xmInfoJds` VALUES ('8', '9', '3', '第一季度', '4562', '1263');
INSERT INTO `xmInfoJds` VALUES ('9', '9', '3', '第二季度', '1369', '1275');
INSERT INTO `xmInfoJds` VALUES ('10', '2', '3', '第一季度', '1111', '2222');
INSERT INTO `xmInfoJds` VALUES ('11', '7', '3', '第一季度', '100', '2000');
INSERT INTO `xmInfoJds` VALUES ('12', '18', '3', '第三季度', '213', '321');
INSERT INTO `xmInfoJds` VALUES ('13', '18', '3', '第四季度', '2132', '3213');
INSERT INTO `xmInfoJds` VALUES ('14', '9', '3', '第三季度', '312', '321');
INSERT INTO `xmInfoJds` VALUES ('15', '5', '3', '第三季度', '21', '312');
INSERT INTO `xmInfoJds` VALUES ('16', '6', '7', '第一季度', '12345', '1324');
INSERT INTO `xmInfoJds` VALUES ('17', '6', '7', '第二季度', '6000', '6000');
INSERT INTO `xmInfoJds` VALUES ('18', '6', '7', '第三季度', '4347', '6502');
INSERT INTO `xmInfoJds` VALUES ('19', '6', '7', '第四季度', '8435', '6000');
INSERT INTO `xmInfoJds` VALUES ('20', '20', '12', '第一季度', '21321312', '12321321');
INSERT INTO `xmInfoJds` VALUES ('21', '20', '12', '第二季度', '312321', '21321321');
INSERT INTO `xmInfoJds` VALUES ('22', '20', '12', '第三季度', '3123213', '1232132');
INSERT INTO `xmInfoJds` VALUES ('23', '20', '12', '第四季度', '213213', '123213');
INSERT INTO `xmInfoJds` VALUES ('24', '25', '7', '第四季度', '123213213', '123213213');
INSERT INTO `xmInfoJds` VALUES ('25', '26', '12', '第一季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('26', '26', '12', '第二季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('27', '26', '12', '第三季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('28', '26', '12', '第四季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('29', '27', '12', '第一季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('30', '27', '12', '第二季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('31', '27', '12', '第三季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('32', '27', '12', '第四季度', '12122', '12122');
INSERT INTO `xmInfoJds` VALUES ('33', '28', '12', '第四季度', '12122', '12122');

-- ----------------------------
-- Table structure for `xmInfos`
-- ----------------------------
DROP TABLE IF EXISTS `xmInfos`;
CREATE TABLE `xmInfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` varchar(255) NOT NULL,
  `eid` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `yearPlan` varchar(255) NOT NULL,
  `yearIndex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of xmInfos
-- ----------------------------
INSERT INTO `xmInfos` VALUES ('2', '2021', '3', 'turnover', '213132', '21111');
INSERT INTO `xmInfos` VALUES ('5', '2020', '3', 'output', '200', '300');
INSERT INTO `xmInfos` VALUES ('6', '2020', '7', 'output', '2020', '2000');
INSERT INTO `xmInfos` VALUES ('7', '2020', '3', 'turnover', '21', '3213');
INSERT INTO `xmInfos` VALUES ('8', '2020', '7', 'turnover', '32324', '33234');
INSERT INTO `xmInfos` VALUES ('9', '2020', '3', 'profit', '9000', '5000');
INSERT INTO `xmInfos` VALUES ('10', '2020', '7', 'profit', '9600', '5000');
INSERT INTO `xmInfos` VALUES ('11', '2020', '8', 'output', '3000', '2000');
INSERT INTO `xmInfos` VALUES ('12', '2020', '8', 'turnover', '3000', '3000');
INSERT INTO `xmInfos` VALUES ('13', '2020', '8', 'profit', '1000', '800');
INSERT INTO `xmInfos` VALUES ('16', '2020', '6', 'output', '231', '3213');
INSERT INTO `xmInfos` VALUES ('17', '2019', '3', 'output', '21', '321');
INSERT INTO `xmInfos` VALUES ('18', '2020', '3', 'lj', '321', '3213');
INSERT INTO `xmInfos` VALUES ('19', '2020', '7', 'lj', '21', '321');
INSERT INTO `xmInfos` VALUES ('20', '2020', '12', 'output', '1122', '');
INSERT INTO `xmInfos` VALUES ('21', '2022', '3', 'turnover', '123', '31231');
INSERT INTO `xmInfos` VALUES ('23', '2021', '3', 'profit', '213', '321');
INSERT INTO `xmInfos` VALUES ('24', '2021', '3', 'lj', '321', '321');
INSERT INTO `xmInfos` VALUES ('25', '2019', '7', 'output', '3123213', '21321312');
INSERT INTO `xmInfos` VALUES ('26', '2020', '12', 'turnover', '12122', '2121');
INSERT INTO `xmInfos` VALUES ('27', '2020', '12', 'profit', '12122', '12122');
INSERT INTO `xmInfos` VALUES ('28', '2019', '12', 'profit', '12122', '12122');
INSERT INTO `xmInfos` VALUES ('29', '2019', '12', 'turnover', '12122', '12122');

-- ----------------------------
-- Table structure for `xmMgrs`
-- ----------------------------
DROP TABLE IF EXISTS `xmMgrs`;
CREATE TABLE `xmMgrs` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `entryName` varchar(255) NOT NULL,
  `contract` varchar(255) NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of xmMgrs
-- ----------------------------
INSERT INTO `xmMgrs` VALUES ('3', '测试', '122');
INSERT INTO `xmMgrs` VALUES ('6', '。。。。。', 'sd');
INSERT INTO `xmMgrs` VALUES ('7', '华丽机电', '100000000');
INSERT INTO `xmMgrs` VALUES ('8', '舟山储备中转粮库项目', '4900');
INSERT INTO `xmMgrs` VALUES ('12', '黄骅管廊项目', '1000000000');

-- ----------------------------
-- Table structure for `xUsers`
-- ----------------------------
DROP TABLE IF EXISTS `xUsers`;
CREATE TABLE `xUsers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of xUsers
-- ----------------------------
INSERT INTO `xUsers` VALUES ('9', '7', '12');
INSERT INTO `xUsers` VALUES ('10', '7', '13');
INSERT INTO `xUsers` VALUES ('12', '8', '18');
INSERT INTO `xUsers` VALUES ('13', '8', '13');
INSERT INTO `xUsers` VALUES ('14', '12', '13');
