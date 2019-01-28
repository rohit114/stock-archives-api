1.SET UP POSTGRES DATABASE

#MacOS
-- Run following command on terminal

Step1: brew install postgresql
Step2: pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
Step3: create database mydb;
-- dump the db-dump.sql , go to location of file in terminal and run the command (step 4):
Step4:  psql mydb < db-dump.sql

Voilla!! database "mydb" user "admin" created having table "data"

-- to open db console 
step5: psql postgres -u admin


#LINUX
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04
--Repeat step: 3,4,5 as above
________________________________________________________________________________________________



2. Install Sails where our backend APIs are written

--Go to "backend-project" folder where package.json is located & Run following Commands:
1. npm install node -g
2. npm install sails -g
3. npm install bunyan -g
4. npm install
5. NODE_PATH=. NODE_ENV=development sails lift --verbose | bunyan

--Voilla!! Sails is running at port: 1337
--http://localhost:1337
________________________________________________________________________________________________


3. Install and Run AngularJS (CLient Side)

--Go to "stock-archives" folder where package.json is located & Run following Commands
1. npm install -g @angular/cli
2. npm install
3.npm start
4.install "CORS" chrome extension & enable/activate it

--Voilla!! Sails is runnding at port:4200
-- visit to explore the web app: http://localhost:4200/







