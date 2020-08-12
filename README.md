<p align="center">
  <img src="./mobile/assets/icon.png" width="150"/>
</p>  

## Proffy

The Proffy is an application that giver the opportunite to teachers registrate and offer services of private classes. And people who needs any kind of classes to search the teacher who will supplies your class needs

The application consists in a web page where is possible the user search several teachers by the selected filters and a register to teachers who whants to show your profile to give class 

Besides that, counts with a mobile APP with Android and IOS versions, where the people can choose the teachers who wants to study and filters of day of the week, the subject and hour who the student prefer. If the student have liked the teacher finded, he have the possibility to add the teacher in your favorites, and consultes he profile to solicitate classes any time he whant.

<!--
## Screenshots of project
<div align="center">
  <h3> Mobile </h3>
 </div>
<p align="center">  
  <img src="./ScreenShots App/Mobile Load screen.PNG" width="250">
  <img src="./ScreenShots App/Mobile Cases.PNG" width="250">
  <img src="./ScreenShots App/Mobile Details.PNG" width="250">
  <img src="./ScreenShots App/Mobile-Gif.gif" width="250">
</p>  
<div align="center">
  <h3> Web </h3>
 </div>
<p align="center">  
  <img src="./ScreenShots App/Web Logon.png" width="400">
  <img src="./ScreenShots App/Web Cases.png" width="400">
  <img src="./ScreenShots App/Web New Incidents.png" width="400">
</p>  -->
 
## Technologies

We use the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [React-icons](https://react-icons.netlify.com/)
- [React-dom](https://reactjs.org/docs/react-dom.html)
- [React-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlitetutorial.net/)
- [VS Code](https://code.visualstudio.com/)

## Running the application

### Prerequisites

To run the app, you need the following programs:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/) v12.0 or better

### Server

First, clone the repository of github and start the backend.

```bash
# to clone repository
git clone https://github.com/andre-euz/nlw-Proffy.git

# go to "server" folder. 
cd nlw-Proffy/server

# Starting the backend 
npm start
```

### Frontend

```bash
# In a new tab of terminal, start the frontend in "web" folder.
cd web
npm start
```

### Mobile

The application was developed using the Expo, who is a free/open source tool that it works to facilitate the process of run/test the applications developed in React Native. [Clique here](https://expo.io/learn) to know more about Expo. 

To execute the application in your device, you need to change the ip configuration in the source code.

[api.js](https://github.com/nlw-Proffy/mobile/src/services/api.ts)
```typescript
  baseURL: 'http://192.168.0.10:3333',
```
Replace 192.168.0.10 with your computer IP.

With all working, run the application.

```bash

# to run the app, open a new terminal, go to mobile folder of application and execute
npm start
```

Expo will open in your browser, now just scan the QRcode of page with smartphone cam and wait the app load.

> The application was developed and tested in a iPhone 7, iOS 13.3.1 

Made with :heart: and :coffee: by André R. Euzébio
