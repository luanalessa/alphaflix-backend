# <p align = "center"> Alphaflix </p>

<p align = "center">
<img src="https://img.shields.io/badge/author-luanalessa-4dae71?style=flat-square" />
 <img src="https://img.shields.io/github/languages/count/luanalessa/alphaflix-backend?color=4dae71&style=flat-square" />

</br> 
</br>

  # ➡️ Schema 

<img src="https://user-images.githubusercontent.com/72531277/136672944-b7c78c67-6bc1-43de-8f78-22c35c4e8c02.png" />


# 💻 Documentation
</br>


🔻 <strong>CREATE TABLE</strong> will create a new, initially empty table in the current database.
```javascript
CREATE TABLE public.customer (
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	phone varchar(11) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	password varchar(36) NOT NULL,
	state varchar(2) NOT NULL,
	city varchar(20) NOT NULL,
	address varchar(100) NOT NULL,
	created_date TIMESTAMP NOT NULL DEFAULT 'now()',
	updated_date TIMESTAMP,
	deleted_date TIMESTAMP,
	CONSTRAINT customer_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);
```

</br>

🔻 <strong>INSERT</strong> inserts new rows into a table. One can insert one or more rows specified by value expressions.

```javascript
INSERT into public.genre
	 (name, title, created_date)
VALUES
	 ('action','Ação', NOW())
	,('comedy','Comédia', NOW())	 
	,('documentary','Documentário', NOW())	 
	,('drama','Drama', NOW())
	,('family','Familia', NOW())
	,('horror','Terror', NOW());
```

</br>

🔻 <strong>DROP TABLE</strong> removes tables from the database

```javascript
DROP TABLE movie CASCADE
```
CASCADE will remove a dependent view entirely, but in the foreign-key case it will only remove the foreign-key constraint, not the other table entirely.

</br>

🔻 <strong>TRUNCATE</strong> quickly removes all rows from a set of tables. It has the same effect as an unqualified DELETE on each table, but since it does not actually scan the tables it is faster.

```javascript
TRUNCATE movie 
```

</br>

🔻 <strong>SELECT</strong> and the <strong>FROM</strong> clause create a new table and fill it with data computed by a query.

```javascript
SELECT * FROM public.movie;
```

</br>

🔻 The optional <strong>WHERE</strong> clause specify a pipeline of successive transformations performed on the table derived in the FROM clause.
	
```javascript
SELECT * FROM public.movie;
	WHERE movie.genre = 5;

SELECT * FROM public.movie
	WHERE title IN ('Bruce');
	
SELECT * FROM public.genre
	WHERE name NOT IN ('action');

SELECT * FROM public.user
	WHERE name LIKE 'V%' and email LIKE 'sv%';
	
SELECT * FROM order-service
	WHERE created_date BETWEEN '11:30:00' AND '12:30:00';
```

</br>

🔻 The optional <strong>JOIN</strong> condition determines which rows from the two source tables are considered to “match”.
	
```javascript

```

</br>

🔻 The optional <strong>JOIN</strong> rows of a table
	
```javascript
UPDATE public.user SET name = 'Luana Lessa' WHERE id = 15
```

</br>

🔻<strong>CREATE INDEX</strong> is used to speed up the performance of queries.
	
```javascript
CREATE INDEX idx_userr
ON public.user (name);

CREATE INDEX idx_movie 
ON public.movie (title,genre);
```

</br>

🔻<strong>CREATE VIEW</strong> defines a view of a query. The view is not physically materialized. Instead, the query is run every time the view is referenced in a query.
	
```javascript

```

</br>

🔻<strong>GROUP BY</strong> is used to arrange identical data into groups with the help of some functions.
	
```javascript

```
</br>
</br>
# 🏁 Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you need to install [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) first, in order to test the project.

Then, clone the repository with:

```
git clone https://github.com/luanalessa/alphaflix-backend.git
```

So, in the project directory, you can run:

```
npm install
```
to install the dependencies.

Then, run

```
npm start
```

to run the server.

:stop_sign: Don't forget to repeat the steps above with the [frontend repository](https://github.com/luanalessa/alphaflix-frontend.git) to fully test the project
