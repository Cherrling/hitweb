-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2023-12-14 23:52:22
-- 服务器版本： 8.0.31
-- PHP 版本： 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `db001`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `show` int NOT NULL DEFAULT '1',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`ID`, `author`, `content`, `show`, `timestamp`) VALUES
(4, 'admin', '    <div class=\"image_box\" id=\"img_1\">\r\n      <div><img src=\"./image/不义之财_01.jpg\" alt=\"\" /></div>\r\n      <div>\r\n        去看那个在冬天死去的城市，看巨大的烟囱无力地吐出白烟。<br />\r\n        看路上的行人徒劳地朝双手哈气，温热被冻僵的掌心。 <br />\r\n        看一场大雪从天空落下，掩盖惨淡的白日与无望的黑夜。 <br />\r\n        看一句冲到嘴边的叹息，变成铳口的一缕白烟，消失在寒冷的空气。\r\n        <br />\r\n      </div>\r\n    </div>', 1, '2023-12-14 20:51:32'),
(3, 'admin', '    <div class=\"image_box\" id=\"img_0\">\r\n      <div><img src=\"./image/纷争演绎_01.png\" alt=\"\" /></div>\r\n      <div>\r\n        <p>\r\n          重构实境，踏入消逝的战火<br />\r\n          穿过残垣，冲破硝烟与悲鸣 <br />\r\n          层层推演，因地制宜，不断向战场核心迈进 <br />\r\n          以鏖战熔铸意志，以纷争淬砺使命 <br />\r\n          跨越燃烧的终点，我们已做好准备\r\n        </p>\r\n      </div>\r\n    </div>', 1, '2023-12-14 20:33:49'),
(9, '123456', '<h2 style=\"text-align: start;\">wangEditor 的优势</h2><p style=\"text-align: start;\">一个产品的价值，就在于解决用户的问题，提高效率、降低成本、增加稳定性和扩展性。</p><p style=\"text-align: start;\">wangEditor 不是为了做而做，也不是单纯的模仿谁，而是经过上述问题分析之后，给出一个系统的解决方案。旨在真正去解决用户的问题，产出自己的价值。</p>', 1, '2023-12-14 23:22:42'),
(10, '123456', '<h1 style=\"text-align: start;\">jQuery <span style=\"color: rgb(100, 133, 76);\">教程</span></h1><p><br></p><p>jQuery 是一个 JavaScript 库。</p><p>jQuery 极大地简化了 JavaScript 编程。</p><p>jQuery 很容易学习。</p>', 1, '2023-12-14 23:24:28'),
(11, 'admin', '<h2 style=\"text-align: start;\">jQuery 语法</h2><p style=\"text-align: start;\">jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。</p><p style=\"text-align: start;\">基础语法： <em><strong>$(selector).action()</strong></em></p><ul><li style=\"text-align: start;\">美元符号定义 jQuery</li><li style=\"text-align: start;\">选择符（selector）\"查询\"和\"查找\" HTML 元素</li><li style=\"text-align: start;\">jQuery 的 action() 执行对元素的操作</li></ul><p style=\"text-align: start;\">实例:</p><ul><li style=\"text-align: start;\">$(this).hide() - 隐藏当前元素</li><li style=\"text-align: start;\">$(\"p\").hide() - 隐藏所有 &lt;p&gt; 元素</li><li style=\"text-align: start;\">$(\"p.test\").hide() - 隐藏所有 class=\"test\" 的 &lt;p&gt; 元素</li><li style=\"text-align: start;\">$(\"#test\").hide() - 隐藏 id=\"test\" 的元素</li></ul>', 1, '2023-12-14 23:24:56'),
(1, 'admin', '    <div class=\"image_box\" id=\"img_4\">\r\n      <div><img src=\"./image/蚀刻章套组_探索者的银凇止境.png\" alt=\"\" /></div>\r\n      <div>\r\n        记录一段北地科考历程的蚀刻章套组。<br />\r\n        抓住极寒中任何一线生机，挪步追寻无尽冰原的尽头。 <br />\r\n        无论命运多么严苛，领受它，向前走。\r\n        <br />\r\n      </div>\r\n    </div>', 1, '2023-12-11 23:19:17'),
(12, 'admin', '    <div class=\"image_box\" id=\"img_3\">\r\n      <div><img src=\"./image/探索者的银凇止境.png\" alt=\"\" /></div>\r\n      <div>\r\n        物资准备齐整，人员集结完毕。<br />\r\n        你与探险者们离开萨米南疆的城市，向北方进发。 <br />\r\n        行过萨米，穿过冰原，未知的面纱终将被揭开。\r\n        <br />\r\n      </div>\r\n    </div>', 1, '2023-12-12 23:25:17'),
(13, 'admin', '<h3 style=\"text-align: start;\">完全圆锥形 NAT/Full Cone NAT</h3><p style=\"text-align: start;\">完全圆锥型 NAT 将一个来自内部 IP 地址和端口的所有请求，始终映射到相同的公网 IP 地址和端口；同时，任意外部主机向映射的公网 IP 地址和端口发送报文，都可以实现和内网主机进行通信，就像一个向外开口的圆锥形一样，故得名。</p><p style=\"text-align: start;\">这种模式很宽松，限制小，只要内网主机的 IP 地址和端口与公网 IP 地址和端口建立映射关系，所有互联网上的主机都可以访问该 NAT 之后的内网主机。</p>', 1, '2023-12-14 23:40:49'),
(14, 'admin', '<h3 style=\"text-align: start;\">地址限制式圆锥形 NAT/Address Restricted Cone NAT</h3><p style=\"text-align: start;\">地址限制式圆锥形 NAT 同样将一个来自内部 IP 地址和端口的所有请求，始终映射到相同的公网 IP 地址和端口；与完全圆锥型 NAT 不同的是，当内网主机向某公网主机发送过报文后，只有该公网主机才能向内网主机发送报文，故得名。</p><p style=\"text-align: start;\">相比完全圆锥形 NAT，地址限制式圆锥形 NAT 增加了地址限制，也就是 IP 受限，而端口不受限。</p>', 1, '2023-12-14 23:40:58'),
(15, 'admin', '<h3 style=\"text-align: start;\">端口限制式圆锥形 NAT/Port Restricted Cone NAT</h3><p style=\"text-align: start;\">端口限制式圆锥形 NAT 更加严格，在上述条件下，只有该公网主机该端口才能向内网主机发送报文，故得名。</p><p style=\"text-align: start;\">相比地址限制式圆锥形 NAT，端口限制式圆锥形 NAT 又增加了端口限制，也就是说 IP、端口都受限。</p>', 1, '2023-12-14 23:41:08'),
(16, '12345678', '<h3 style=\"text-align: start;\">对称式 NAT/Symmetric NAT</h3><p style=\"text-align: start;\">对称式 NAT 将内网 IP 和端口到相同目的地址和端口的所有请求，都映射到同一个公网地址和端口；同一个内网主机，用相同的内网 IP 和端口向另外一个目的地址发送报文，则会用不同的映射（比如映射到不同的端口）。</p><p style=\"text-align: start;\">和端口限制式 NAT 不同的是，端口限制式 NAT 是所有请求映射到相同的公网 IP 地址和端口，而对称式 NAT 是为不同的请求建立不同的映射。它具有端口受限锥型的受限特性，内部地址每一次请求一个特定的外部地址，都可能会绑定到一个新的端口号。也就是请求不同的外部地址映射的端口号是可能不同的。</p><p style=\"text-align: start;\">了解了四种 NAT 类型，我们不难发现，对于 BT 这种使用模式，只有完全圆锥形 NAT/Full Cone NAT 可以尝试穿越。不同 Peer 客户端的 IP 不同，如果限制 IP 地址，Peer 就无法进行连接。</p>', 1, '2023-12-14 23:43:37');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `op` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`ID`, `username`, `password`, `op`) VALUES
(11, 'admin', '$2a$10$1WujPHwILZDiW6N8xwz4k.kgxQGA5KKs/JAFcfR8Wn92LycYiABea', 3),
(12, '123213', '$2a$10$249endzQyARx8QqLnO0Zt.TXCpNALJnyD6a7Eg1nz8V/g/Hr5LjKy', 0),
(13, '12345678', '$2a$10$sYy5Oq7ZjL8LP8RwKaVrF.TY8DZM1gPOjc6m4HCMT4SNyJA3UIDNe', 0),
(14, '123123123', '$2a$10$a16JvWC62RTJmZYJjo5eh.FiqE3YuYldlRZkZ7s0E1M0MACWhf6Vq', 0),
(9, '123456', '$2a$10$vppSFawJglqkMawy9f4yAuUPt0PBbZymTC9yftL5GInIQcGHnJtja', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
