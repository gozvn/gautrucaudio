-- Tạo bảng novels cho ứng dụng
CREATE TABLE IF NOT EXISTS `novels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `author` varchar(255) NOT NULL,
  `content` longtext,
  `status` enum('draft','published','completed') DEFAULT 'draft',
  `view_count` int(11) DEFAULT 0,
  `like_count` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_title` (`title`),
  KEY `idx_author` (`author`),
  KEY `idx_status` (`status`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Thêm dữ liệu mẫu
INSERT INTO `novels` (`title`, `description`, `author`, `content`, `status`) VALUES
('Truyện mẫu 1', 'Mô tả truyện mẫu số 1', 'Tác giả A', 'Nội dung truyện mẫu số 1...', 'published'),
('Truyện mẫu 2', 'Mô tả truyện mẫu số 2', 'Tác giả B', 'Nội dung truyện mẫu số 2...', 'draft'),
('Truyện mẫu 3', 'Mô tả truyện mẫu số 3', 'Tác giả C', 'Nội dung truyện mẫu số 3...', 'completed');