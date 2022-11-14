DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
 id serial PRIMARY KEY,
 picture text,
 quote varchar,
 day_num integer,
 warmup text,
 pushups text,
 situps text,
 run text
)