CREATE `courtKeeper`;
USE `courtKeeper`;

CREATE TABLE IF NOT EXISTS `USER`(
    `user_id` INT(11) AUTO_INCREMENT,
    `username` VARCHAR(45),
    `email` VARCHAR(45),
    `password` VARCHAR(45),
    `qr_code` VARCHAR(20),
    `created_at` DATETIME,
    `fname` VARCHAR(45),
    `lname` VARCHAR(45),
    `grade_of_year` INT(10),
    `address` VARCHAR(45),
    `on_campus` TINYINT,
    PRIMARY KEY(`user_id`)
);

CREATE TABLE IF NOT EXISTS `EVENTS`(
    `event_id` INT(11) AUTO_INCREMENT,
    `event_name` VARCHAR(45),
    `time` DATETIME,
    `location` VARCHAR(45),
    `on_campus` TINYINT,
    `owner_id` INT(11),
    `created_at` DATETIME,
    `event_type` INT(11),
    PRIMARY KEY(`event_id`),
    FOREIGN KEY(`owner_id`) REFERENCES `USER` (`user_id`),
    FOREIGN KEY(`event_type`) REFERENCES `EVENT_TYPE`(`event_type_id`)
);

CREATE TABLE IF NOT EXISTS `TEAMS`(
    `team_id` INT(11) AUTO_INCREMENT,
    `team_name` VARCHAR(45),
    `created_at` DATETIME,
    `owner_id` INT(11),
    `sport_id` INT(11),
    PRIMARY KEY (`team_id`),
    FOREIGN KEY(`owner_id`) REFERENCES `USER` (`user_id`),
    FOREIGN KEY(`sport_id`) REFERENCES `SPORT_TYPE` (`sport_id`)
);

CREATE TABLE IF NOT EXISTS `ATTENDEES`(
    `attendence_id` INT(11) AUTO_INCREMENT,
    `event_id` INT(11),
    `user_id` INT (11),
    PRIMARY KEY (`attendence_id`),
    FOREIGN KEY (`owner_id`) REFERENCES `USER` (`user_id`),
    FOREIGN KEY (`event_id`) REFERENCES `EVENTS` (`event_id`)

);

CREATE TABLE IF NOT EXISTS `TEAM_PLAYERS`(
    `membership_id` INT(11) AUTO_INCREMENT,
    `team_id` INT(11),
    `user_id` INT (11),
    PRIMARY KEY (`membership_id`),
    FOREIGN KEY (`team_id`) REFERENCES `TEAMS` (`team_id`),
    FOREIGN KEY (`user_id`) REFERENCES `USER` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `SPORT_TYPE`(
    `sport_id` INT(11) AUTO_INCREMENT,
    `sport_name` VARCHAR(45),
    PRIMARY KEY(`sport_id`)
);

CREATE TABLE IF NOT EXISTS `EVENT_TYPE`(
    `event_type_id` INT(11) AUTO_INCREMENT,
    `event_type` VARCHAR(45),
    PRIMARY KEY (`event_type_id`)
);