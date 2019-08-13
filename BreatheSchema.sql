CREATE TABLE Schedule (
	event_id INTEGER NOT NULL,
	Title VARCHAR(20) NOT NULL,
	Duration INTEGER,
	Location VARCHAR(20) NOT NULL,
	Type VARCHAR(20) NOT NULL,
	Description VARCHAR(1024) NOT NULL,
	PRIMARY KEY(event_id)
);

CREATE TABLE Users (
	user_id INTEGER NOT NULL,
	fullname VARCHAR(40) NOT NULL,
	email VARCHAR(40) NOT NULL,
	PRIMARY KEY(user_id)
);

CREATE TABLE My_Schedule (
	schedule_id INTEGER,
	favorites VARCHAR(1024),
	PRIMARY KEY(schedule_id),
	FOREIGN KEY(favorites) REFERENCES Schedule(event_id) ON UPDATE CASCADE ON DELETE CASCADE
);

