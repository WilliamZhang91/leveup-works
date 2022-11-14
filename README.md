# LEVEL UP WORKS #
 
 Work in progress Student management system using: 
 
 - React, 
 - Java Spring Boot, 
 - MySQL, and 
 - Auth0;
 
User can login and register using email and password through Auth0, however Auth0 is not connected to local database as it requires exposing ip publically. 

Also includes an upload functionality that allows students to submit images of projects they've completed to the database.

Permissions are set depending on whether the user is a student/teacher.

Additional testing to be added.

Demo accounts:
student 1: bobbybrown@email.com  password: Password123!@#
teacher 1: teacher1@levelupworks.com password: Password123!@#

![levelup-works-screenshot](https://user-images.githubusercontent.com/84298284/188531977-7ccca060-a1c4-41cd-847e-59955a07fbb0.png)

Requires set up of auth0 application.


# How to get started: #

Frontend:
1. Clone or download repsoitory and cd into levelup-works folder. Add ".env" file: 

```
HTTPS=true
HOST='webapp.com'
PORT=<PORT>
REACT_APP_DOMAIN=<Auth0_DOMAIN>
REACT_APP_CLIENTID=<AUTH0_CLIENT_ID>
REACT_APP_AUDIENCE=<AUTH0_AUDIENCE>
REACT_APP_ID_TOKEN=<Auth0_ID_TOKEN>
REACT_APP_FETCH_PROJECT_LIBRARY=<PROJECT_LIBRARY_ENDPOINT>
REACT_APP_FETCH_PROGRESS_HISTORY=<PROGRESS_HISTORY_ENDPOINT>
REACT_APP_FETCH_ALL_STUDENTS=<STUDENTS_ENDPOINT>
```
2. In the current folder run npm install


Backend (may require different IDE):

3. cd into sms\src\main\ and create a resources folder. In the resources folder add file "application.properties":

```
#configuration
server.port=8090
spring.datasource.url=jdbc:mysql://localhost:3306/levelup?createDatabaseIfNotExist=true&useSSL=true
spring.datasource.username=<MYSQL_USERNAME>
spring.datasource.password=<MYSQL_PASSWORD>
auth0.audience=<AUTH0_AUDIENCE>
spring.security.oauth2.resourceserver.jwt.issuer-uri=<SPRING_SECURITY_ISSUER_URI> 
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.servlet.multipart.max-file-size=3MB
spring.servlet.multipart.max-request-size=3MB
spring.jpa.hibernate.ddl-auto=update
debug=enabled
```

4. Install Spring dependencies

