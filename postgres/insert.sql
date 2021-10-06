-- USER

SELECT * FROM public.user;

INSERT into public.user
	 (name, phone, email, password, created_date)
VALUES
	 ('Luana Lessa Sena', '99999999999', 'lessa@gmail.com','123', NOW() )
	,('Isa Dora Nogueira', '88888888888', 'isa@gmail.com','123', NOW() );

-- GENRE

SELECT * FROM public.genre;

INSERT into public.genre
	 (name, title, created_date)
VALUES
	 ('action','Ação', NOW())
	,('comedy','Comédia', NOW())	 
	,('documentary','Documentário', NOW())	 
	,('drama','Drama', NOW())
	,('family','Familia', NOW())
	,('horror','Terror', NOW());

-- MOVIE

SELECT * FROM public.movie;

INSERT into public.movie
	 (genre_id, title, runtime, description, director, poster, status, created_date)
VALUES
 	 ('1','Underdog', '84 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Frederik Du Chau', 'https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg', True , NOW())
	,('1','Honest Thief', '99 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Mark Williams', 'https://m.media-amazon.com/images/M/MV5BZjEwNjYyMTMtODc5Yi00NTg5LTkwMzAtZTkyOTcyNTFkMGIyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg', True , NOW())
	,('1','Star Wars: Episode III - Revenge of the Sith', '140 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'George Lucas', 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg', True , NOW())
	,('2','Bruce Almighty', '101 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Tom Shadyac', 'https://m.media-amazon.com/images/M/MV5BNzMyZDhiZDUtYWUyMi00ZDQxLWE4NDQtMWFlMjI1YjVjMjZiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', True , NOW())
	,('2','Bad Boys for Life', '124 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Adil El Arbi, Bilall Fallah', 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', True , NOW())
	,('2','Sausage Party', '89 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Greg Tiernan, Conrad Vernon', 'https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@._V1_SX300.jpg', True , NOW())
	,('3','Apollo 11', '93 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Mark Williams', 'ttps://m.media-amazon.com/images/M/MV5BMTYyMzEzNjI4M15BMl5BanBnXkFtZTgwODgxOTgyNzM@._V1_SX300.jpg', True , NOW())
	,('3','Kiss the Ground', '84 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Joshua Tickell, Rebecca Harrell Tickell', 'https://m.media-amazon.com/images/M/MV5BNmJkOWRhZWUtZmNlZC00NWYwLThiMmEtZjZkMTI4N2Y1NDMxXkEyXkFqcGdeQXVyMTE5NTc0NzY@._V1_SX300.jpg', True , NOW())
	,('3','The Game Changers', '86 min', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ,'Louie Psihoyos', 'https://m.media-amazon.com/images/M/MV5BMzg4ZjMzOWEtZjBhZi00MzgxLWEzNmItYjVlYjY0MGQ5ZmM5XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SX300.jpg', True , NOW());
