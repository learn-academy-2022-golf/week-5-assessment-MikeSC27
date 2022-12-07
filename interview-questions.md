# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Super is used to get the classes property.

Researched answer: The Super in Ruby calls the method by the same name anywhere above that class all the way to the parent class.  This Super call implicitly sends all arguments to the parent class. However you cant call the Super(explicitly) because you will get an error stating something about how you had the wrong number of arguments, perhaps given 0, when 1 or 2 were expected.  

2. What is a gem?

Your answer: A gem is a ruby library.

Researched answer: A Gem is a library or Ruby packaging system helping to share installations of many different Gems each based diffently for different platforms even based on CPUs and Operating Systems. They should contain Code that even includes tests and support utilities, some documentation and specifications on the Gem Package.  The structure should be overall the same in each Gem with directories for the Code, Test or Spec.  A Rakefile which automate teh tests and code to perform various tasks. the bin directory and a nice ReadME.   

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a collection of data all related to a similar thing. 

Researched answer: A relational database is a collection of data with items organized in a table or set of tables in columns and rows. Each has primary keys each with unique identifiers and no null values. There are other types of databases such as:
- Hierarchical Databases structured with items linked to each other in parent child relationships via a tree type structure. 
- Network Databases allows each record to have mulitple parent and child records.
- Object-Oriented Databases with data represented in the from of objects.
- Relational Databases
- NoSQL databases which are non tabular databases

4. What are primary keys? Why are they important?

Your answer: The primary keys are the heading for the stored values or data in a database, much like a key value pair. 

Researched answer: Primary Keys are a unique identifier for the columns of the data base. They are needed to extract or input data in the database and keep each row also uniquely identified. Not only do they have to have unique identifiers but they also can't be a Null value.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Create, Read, Update, Delete the four main things we do, sort of a developers philosophy.  The HTTP verbs are get and put and delete, there are more I will have to get back to you more on the other verbs, however they all correspond to the CRUD acronmy. 

Researched answer: The HTTP verbs are:
- Get which is a reqeust to read or display data and maps to Read from CRUD.
- Post is used for adding new content and maps to Create from CRUD.
- Put used to replace content in a database and maps to Update in CRUD.
- Patch is used to replace pieces of content and maps to Update in CRUD.
- Delete removes content and maps to Delete in CRUD 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Thought this was the API routes but it seems it is the mapping of data between the HTTP Get, Post, Put, Patch, Delete, and the CRUD for API's.

2. Ruby on Rails: Affectionatly known as Rails, its an open source web development framework written in the Ruby language.  Its mainly used for back end work, single page apps but can still be used for full stack development.  Companies such as AirBnB, Disney, Hulu, GitHub, and Shopify to name a few big names use Rails.

3. Database migrations: That is the movement of data from one database to another or mulitiple others. 

4. Params: Parameters within Rails or Params you can use to access form and URL query data.  Params seem to act a lot like a hash.  All values in Params are strings even if you typed in an integer it will be a string. These values are nested like a hash. 

5. ERB: Embedded Ruby is a template system for combining plain text with Ruby code and they can be opened in any text editing program with any text along with the ERB code. 
