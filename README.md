***
</br>

<div align="left">
  <a href="https://newvalue.es/" target="_blank">
  <img height="90" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/new-value-readme-logo.png" alt="New Value's Logo">
  </a>

  <a href="https://factoriaf5.org/aprende/" target="_blank">
  <img height="90" align="right" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/logo-factoriaf5.png" alt="Factoria F5 Logo">
  </a> 
  </br>
  </br>
  <h2 align="center">Welcome to New Value Blog</h2>

<p>
<strong>This is the final project of our web development bootcamp, created in collaboration with New Value.</strong>
</br>Throughout May, we've developed a dynamic and modern News Blog for New Value to share quality content with their audience.
This project has been a rewarding challenge, allowing us to refine our fullstack development skills while building an intuitive, efficient,
and visually appealing platform using the latest technologies and best practices.
</p>
</div>

<!-- ABOUT -->
<h2 align="center"> <img height="20" src="https://github.com/mariandrean/NewValue-Blog/blob/main/client/public/new-value.png"> About </h2>

This project features two roles: admin and news moderators. While everyone can access the blog and read the news, moderators have the ability to create, edit, and delete articles.

The admin has all these capabilities plus the ability to register new users (moderators).
User sessions are securely encrypted with usernames and passwords to ensure data protection.
<!-- END OF DESCRIPTION-->

***

<!-- PROJECT CONFIG -->
<details open>
  
<summary><h2> Project Configuration⚙ </h2></summary>

### Clone the Repository
 ```bash
git clone https://github.com/mariandrean/NewValue-Blog
```
##### To enter the repository folder
```bash
cd NewValueNews
```

----

<details>
  
<summary> <h3>For the Frontend, you have to follow the next steps: </h3></summary>

##### First enter into the folder
```bash
cd client
```

##### For install all dependencies of Frontend, copy the next line
 ```bash
npm i
```

##### Make the server run
```bash
npm run dev
```

##### This will start the server __http://localhost:5173__ using Vite with React.
</details>

<details>
  
<summary> <h3>For the Backend, you have to follow the next steps: </h3></summary>

### .env:
* First create the file __.env__ located in the folder _server_.
* Copy the information placed on _.env_example_ and fill it with your personal data.

### Database Connection:

No need to set up a local database because our database is hosted on a server. This allows anyone to upload news articles without needing a local DB.

### Getting Started:

#### First, navigate to the server folder
```bash
cd server
```

##### For install all dependencies of Backend, copy the next line
 ```bash
npm i
```

##### This will have the config for run the DB on Cloud.
</details>
</details>
<!-- END OF PROJECT CONFIG -->

***

<!-- TEST -->
<details open>
  
<summary><h2> Test🧪</h2></summary>

### For this part you have to follow the next steps:
##### First enter into the folder
```bash
cd server
```

##### For install all Test dependencies, copy the next line
 ```bash
npm i
```

##### Copy code to start the Jest Server
```bash
npm run test
```

##### This will run the tests.
</details>
<!-- END OF TEST -->

***

<!-- POSTMAN --> 
<details open>
<summary><h2> Postman <img height="25" alt="POSTMAN" src="https://github.com/devicons/devicon/blob/master/icons/postman/postman-original.svg"></h2></summary>
Click on this link to obtain our Postman information about the CRUD methods.
</br>You can view, add, edit, and delete the articles of our website on it.
</br>
<a href="https://acortar.link/postman-newvalue-project"> Link for Postman Documentation </a>
</details>
<!-- END OF POSTMAN -->

***

<!-- PROJECT STRUCTURE -->
<div style="text-align: center;">
<details open>
  <summary><h2>Project Structure📂 </h2></summary>

  <p>We have built the folder ecosystem for our project in the Front-end and Back-end in an orderly and methodical way. We have divided the project into two main folders called <em>client</em> and <em>server</em>, and we have organized the files in each one correctly for proper behavior and understanding of the repository.</p>

  <strong>Here are the most important ones:</strong>

  <!-- Client Folder Table -->
  <table align="center" style="margin: 0 auto;">
    <h4 align="center">Client Folder</h4>
    <tr>
      <th>Folder</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>node_modules</td>
      <td>Contains all the dependencies of your project. When you install packages using npm, they are stored here.</td>
    </tr>
    <tr>
      <td>db_server</td>
      <td>Plays a crucial role in ensuring the proper functioning and security of the database server.</td>
    </tr>
    <tr>
      <td>src</td>
      <td>This is where the source code of your React application resides. It typically contains the following subfolders:
        <ul>
          <li>components: Contains reusable React components that make up our application's UI.</li>
          <li>pages: Contains React components that represent different pages of our application.</li>
          <li>assets: Holds static assets like images, fonts, or other media files used in your application.</li>
          <li>services: Contains modules for interacting with external services or APIs.</li>
          <li>context: Contains information about the context or environment in which the application operates.</li>
          <li>routes: Defines the various routes or endpoints available in the application's API or web server.</li>
        </ul>
      </td>
    </tr>
  </table>

  <!-- Server Folder Table -->
  <table align="center" style="margin: 20px auto;">
    <h4 align="center" >Server Folder</h4>
    <tr>
      <th>Folder</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>__test__</td>
      <td>Contains all the test files.</td>
    </tr>
    <tr>
      <td>controllers</td>
      <td>Handles HTTP requests.</td>
    </tr>
    <tr>
      <td>database</td>
      <td>Configuration of connections with the database.</td>
    </tr>
    <tr>
      <td>helpers</td>
      <td>Contains import and export validations from express-validator.</td>
    </tr>
    <tr>
      <td>interfaces</td>
      <td>Defines data structures for consistent communication.</td>
    </tr>
    <tr>
      <td>middlewares</td>
      <td>Handles request processing and control flow.</td>
    </tr>
    <tr>
      <td>models</td>
      <td>Contains the models of the News and User.</td>
    </tr>
    <tr>
      <td>utils</td>
      <td>Provides reusable functionalities.</td>
    </tr>
    <tr>
      <td>validators</td>
      <td>Contains the validations of the News and User.</td>
    </tr>
    <tr>
      <td>routes</td>
      <td>Organizes API endpoint definitions.</td>
    </tr>
  </table>
</div>
</details>
<!-- END OF PROJECT STRUCTURE -->

***

<!-- TECHNOLOGIES -->
<details open>
<summary><h2> Technologies🌐 </h2></summary>

## 🖥️ Front-end
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

## 🗄Back-end
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## 📚 Tools & Organization
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
</details>
<!-- END OF TECHNOLOGIES -->

***

<!-- TEAM -->
<details open>
<summary> <h2>👩🏻‍🤝‍👩🏽FEMCODERS💜</h2> </summary>

<table align='center'>
  <tr>
  <td align='center'>
      <div >
        <a href="https://github.com/mariandrean" target="_blank" rel="author">
          <img alt="Maria" width="110" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/foto-maria-readme-crop%20-%20Copy.png"/>
        </a>
        <a href="https://github.com/mariandrean" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Maria Andrea An</br><small>Scrum & GitHub Master</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/mariandrean" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/mariandrean/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    
  <td align='center'>
      <div >
        <a href="https://github.com/krisneiras" target="_blank" rel="author">
          <img alt="Kris" width="110" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/foto-kris-readme-crop%20-%20Copy.png"/>
        </a>
        <a href="https://github.com/krisneiras" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Kris Neiras</br><small>Product Owner</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/krisneiras" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/krisneiras/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    
   <td align='center'>
      <div >
        <a href="https://github.com/leiteway" target="_blank" rel="author">
          <img alt="Leite" width="110" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/leite-foto-readme.png"/>
        </a>
        <a href="https://github.com/leiteway" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Leite L</br><small>Developer</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/leiteway" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/leite-dev/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>

  <td align='center'>
      <div >
        <a href="https://github.com/RaquelLores" target="_blank" rel="author">
          <img alt="Raquel" width="110" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/foto-raquel-readme-crop.png"/>
        </a>
        <a href="https://github.com/RaquelLores" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Raquel Lores</br><small>Front-End | Tester(Front)</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/RaquelLores" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/raquellores/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>

  <td align='center'>
      <div >
        <a href="https://github.com/LuHeRiver" target="_blank" rel="author">
          <img alt="Lucero" width="110" src="https://github.com/mariandrean/NewValue-Blog/blob/dev/client/src/assets/readme-img/foto-lucero-readme-crop%20-%20Copy.png"/>
        </a>
        <a href="https://github.com/LuHeRiver" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Lucero Riveros</br><small>Front-End</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/LuHeRiver" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/lucero-hernandez-desarrollo-web-fullstack-js-marketing/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
  </tr>
</table>
</details>
<!-- END OF TEAM -->
</br>

***

<details open>
<summary><h3>➕ Contributions</h3></summary>
Contributions are welcome! If you find any problems or have suggestions for improvement,
</br>Fork this repo and create an issue or make a pull request.
</details>
  </br> 
<h4>Made with 💜 by every member of the team, thanks.</h4>
