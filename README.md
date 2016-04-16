# TabLocker
A chrome/blink web extension that saves tabs with DOM data, cookies and session information so they can be reloaded at a later time.
# Getting Started
To build TabLocker, first clone and checkout the branch you would like to build. 
```
$ git clone https://github.com/dchao19/tablocker
$ cd tablocker
$ git checkout -b master
```
If you haven't already, you'll need to install webpack and webpack-dev-server globally: 
```
npm install -g webpack webpack-dev-server
```
Then `npm install` the necessary dependencies to build this project.
# Building
## For Browser Testing
Use the command `npm run-script browser-start` which will utilize webpack-dev-server with hot-reload to web-functional components of the extension. This is **not** suitable for testing the extension itself, only parts which would work from a website if it was hosted there.
## For Extension Testing
Use the command `npm run-script extension-start` which will utilize run the command `webpack --watch` to build the extension so it can be installed in Chrome. Live hot-reload is **not** enabled in this mode, and the page/extension must be reloaded in order to utilize new code, `npm` command, however, does not need to be re-run.
## For Developmental Distribution
If you wish to distribute this extension to other users, but do not wish to build for production, run the command `npm run-script dev-build` which will package a `.zip` file in the build folder for distribution to the user.
## For Production
If you wish to distribute the extension to the Chrome Webstore, utilize the command `npm run-script prod-build`, which will create a minified, compressed and obfuscated zip file in the build/release folder for distribution to the webstore.
# Contributions
Contributions are, of course, always welcome. When submitting a pull request or you have been added as a contributor, please follow the following four rules.
1. 4-wide tab indention shall be used by all contributors
2. Contributions in the form of PRs should be brief and consice.
3. Code should be commented when necessary.
4. In general, avoiding editing the `index.html` file in the src/app folder to add scripts and css unless absolutely necessary. 

