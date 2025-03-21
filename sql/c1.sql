-- c1.sql 建立用户消费记录表的脚本
-- 字段用蟒蛇命名法(首三字母) aaa_bbb_ccc
-- 表明用笛卡尔法

CREATE TABLE IF NOT EXISTS UserConsumptionRecords (
    rec_id INT PRIMARY KEY AUTO_INCREMENT, -- 消费记录ID
    use_id INT NOT NULL,                     -- 用户ID
    amo DECIMAL(10, 2) NOT NULL,          -- 消费金额
    con_dat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 消费日期，默认当前时间
    des VARCHAR(255) DEFAULT NULL         -- 消费描述
);