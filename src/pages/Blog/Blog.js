import React from "react";
import "./Blog.css"

const Blog = () => {
  return (
    <div className="blog-aria">
      <div className="blog">
        <h1>My Blog</h1>
        <h4>1 : What is the difference between javascript and nodejs ?</h4>
        <small>
          JavaScript is a scripting language upon which most websites are based.
          It is often used in combination with HTML and CSS to render web pages,
          as JavaScript can be used to dynamically update HTML elements. It
          allows you to automatically refresh the page to update data, display
          information using cool visuals, and create interactive elements.
        </small>
        <small>
          Node.js is an environment that can run JavaScript code without a
          browser. It is built on Chrome s V8 JavaScript engine. The Node.js
          environment can be run on OS X, Windows, and Linux. It also includes a
          multitude of JavaScript libraries, which allow developers to leverage
          open source components and tools to get their applications built
          faster.
        </small>
      </div>
      <div className="blog">
        
        <h4>2 : What is the differences between SQL and NOSQL databases?</h4>
        <small>
        SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
        </small>
        <small>
        NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Storage in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
        </small>
      </div>
      <div className="blog">
        <h4>3 : What is the purpose of JWT and how does it work?</h4>
        <small>
        JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.
        </small>
      </div>
    </div>
  );
};

export default Blog;
