# backend-project

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sat Jan 26 2019 23:58:57 GMT+0530 (IST) using Sails v1.1.0.

<!-- Internally, Sails used [`sails-generate@1.16.4`](https://github.com/balderdashy/sails-generate/tree/v1.16.4/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

#1.SET UP POSTGRES DATABASE

MacOS
-- Run following command on terminal

Step1: brew install postgresql

Step2: pg_ctl -D /usr/local/var/postgres start && brew services start postgresql

Step3: create database mydb;

-- dump the db-dump.sql , go to location of file in terminal and run the command (step 4):

Step4:  psql mydb < db-dump.sql

Voilla!! database "mydb" user "admin" created having table "data"

-- to open db console 

step5: psql postgres -U admin -d mydb


LINUX
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04
--Repeat step: 3,4,5 as above
________________________________________________________________________________________________



#2. Install Sails where our backend APIs are written

--clone the repo https://github.com/rohit114/stock-archives-api.git

1. npm install node -g

2. npm install sails -g

3. npm install bunyan -g

4. npm install

5. NODE_PATH=. NODE_ENV=development sails lift --verbose | bunyan

--Voilla!! Sails is running at port: 1337

--http://localhost:1337





