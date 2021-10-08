CREATE TABLE public.user (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	phone varchar(11) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	password varchar(36) NOT NULL,
	created_date TIMESTAMP NOT NULL,
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT user_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.movie (
	id serial NOT NULL,
	genre_id int,
	title varchar(255) NOT NULL,
	runtime varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	director varchar(255) NOT NULL,
	poster varchar(255) NOT NULL,
	favorite bool NOT NULL,
	created_date TIMESTAMP NOT NULL,
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT movie_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.genre (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	created_date TIMESTAMP NOT NULL,
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT genre_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.order_service (
	id serial NOT NULL,
	user_id int NOT NULL,
	movie_id int NOT NULL,
	created_date TIMESTAMP NOT NULL,
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT order_service_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.favorites (
	id serial NOT NULL,
	user_id int NOT NULL,
	movie_id int NOT NULL,
	created_date TIMESTAMP NOT NULL,
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT favorites_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);




ALTER TABLE movie ADD CONSTRAINT movie_fk0 FOREIGN KEY (genre_id) REFERENCES genre(id);


ALTER TABLE order_service ADD CONSTRAINT order_service_fk0 FOREIGN KEY (user_id) REFERENCES public.user(id);
ALTER TABLE order_service ADD CONSTRAINT order_service_fk1 FOREIGN KEY (movie_id) REFERENCES movie(id);

ALTER TABLE favorites ADD CONSTRAINT favorites_fk0 FOREIGN KEY (user_id) REFERENCES public.user(id);
ALTER TABLE favorites ADD CONSTRAINT favorites_fk1 FOREIGN KEY (movie_id) REFERENCES movie(id);





