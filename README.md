# Craigslist_Redesign

# The Problem:
Craigslist's frontend stayed in the early 2000s. We need to give it a modern twist.

# The Solution:
Flat Design is very popular today and is highly desired in today's web apps. Let's add either one of the following: Bootstrap V4, MaterializeCSS, or SemaniticUI. Either framework will be able to revamp Craigslist UI.

# The Stack:
This will be a complete UI rehaul, including the TECHStack. So, currently Craigslist is written in PERL, more specifically mod_perl and a little jQuery sprinkled in to taste. Furthermore, Craigslist stuck to a standard LAMP stack (Linux Apache MySQL PHP(but in this case, PERL)), but they maaaybe porting their data from a MySQL DB to MongoDB according to stackshare.io. So, I plan to use a few technologies:

# Frontend
-HTML5, CSS3 (with a possibility of Angular, React, or Vue in the future)

# Backend
-Nodejs, Express, and Ejs(for my template engine)

# DB
-MongoDB, although the rumors of DB's being dropped scares me...
-Mongoose for my object data mapper

# RESTful
I will try my best to follow REST

# TODOS:
          1. - [x] Install packages
              1. -[x] Set up require statements
          2. -[x] Create dev server
          3. Create mongodb schema
              1. -[x] User schema
              2. -[] Likes schema
              3. -[] Item schema
          4. -[] Create RESTful API/Routes
          5. -[] Style landing pages
          6. -[] More to come...
          7. - [X] Add testing framework
               1. - [] mocha config
               2. - [] chai config

# To Run Application
          1. Git clone this repo
          2. Run `npm init`
          3. Run `npm start`
