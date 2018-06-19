# docker_sagemode_utility
This is a simple tool used to connect <b>Linux docker host</b> with engine API and do some stuff like 
<ul>
  <li> Scan Docker Environment</li>
  <li> inspect,kill,delete,pause,unpause,start,stop Containers</li>
  <li> Search desired images in repo</li>
</ul>

Only Available in Windows for now.
<B>Dattebayo !</B>

# Pre-Requisites 
```
NodeJS
Docker Engine should be enabled in docker host [https://github.com/frostarun/Docker-deamon]
```

# How to build
```
Open Command Prompt in root directory of Master and Run the following Commands :

npm install electron-packager --save-dev
npm install electron --save-dev
npm install angular-loading-bar --save-dev
npm run package-win

Executable is available in Release-builds Directory.
```

# How to run from source
```
electron docker_utility.js
```

# How to run from Binary Release
```
Run the \docker_utility-win32-ia32\docker_utility.exe
```

# screen shots
Connect and Evaluate<br><br>
![Alt text](/ScreenShots/screen1.JPG?raw=true "Connect") <br>
Fundementals on Containers<br><br>
![Alt text](/ScreenShots/screen2.JPG?raw=true "Connect") <br>
Generate PDF Report<br><br>
![Alt text](/ScreenShots/screen3.JPG?raw=true "Connect") <br>
