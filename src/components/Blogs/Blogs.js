import React from 'react';

const Blogs = () => {
    return (
        <div className='container bg-info'>
            <h2>This Blog Part</h2>
            <div>
            <h3>Difference between javascript and nodejs</h3>
            <p><strong>JavaScript</strong> is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <p><strong>Node.js</strong> also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same.</p>
            </div>
            <div>
                <h3>When should you use nodejs and when should you use mongodb</h3>
                <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. </p>
            </div>
            <div>
                <h3>Differences between sql and nosql databases.</h3>
                <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Sql</th>
      <th scope="col">Nosql</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SQL databases are relational</td>
      <td>NoSQL databases are non-relational.</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SQL databases use structured query language and have a predefined schema.</td>
      <td>NoSQL databases have dynamic schemas for unstructured data.</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>SQL databases are vertically scalable</td>
    <td>while NoSQL databases are horizontally scalable.</td>
    </tr>
  </tbody>
</table>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>A JWT is cryptographically signed (but not encrypted, hence using HTTPS is mandatory when storing user data in the JWT), so there is a guarantee we can trust it when we receive it, as no middleman can intercept and modify it, or the data it holds, without invalidating it.
That said, JWTs are often criticized for their overuse, and especially for them being used when less problematic solutions can be used.

</p>
            </div>
        </div>
    );
};

export default Blogs;