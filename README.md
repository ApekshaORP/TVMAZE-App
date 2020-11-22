
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To install app dependency
```
npm install
```
### Run your app
```
npm run start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run test app
```
npm run test
```
### To see test coverage
```
npm run test -- --coverage
```
### Compiles and minifies for production
```
npm run build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
 
### Project details-----
1)This is TV apllication  that allows users to view a few lists(preferable horizontal list) of TV shows based on different genres (drama, comedy, sports, etc.).
2)After clicking on show card it will open show details page where user can see rating, language, summary ,episode and cast list.
3)User can able to search shows by name.
4)This application is responsive web app.

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : NavBar.js, getShows(), showDetails etc..

### Project dependencies-----
1. react:
  Used "ReactJs" Library as it uses virtual dom instead of real dom that increase performance and we can use reusable component.
  Please refer below url for more details:
  https://reactjs.org/docs/getting-started.html

2. react-scroll-to-top:
   Used "react-scroll-to-top" package for scroll scrren at top.
   Please refer below command for install package:
   "npm install react-scroll-to-top"
 
3. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios 

4. react-slick:
   React-slick is used to give carousel effect.
   Please refer below url for more details:
   https://www.npmjs.com/package/react-slick



## Git clone

The git clone command copies your repository from GitHub to your local computer.
git clone url(git url)

## .gitignore
Specifies intentionally untracked files that Git should ignore.
example: nodemodules

## git init
This command turns a directory into an empty Git repository. This is the first step in creating a repository. After running git init, adding and committing files/directories is possible.

## git add
Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). There are a few different ways to use git add, by adding entire directories, specific files, or all unstaged files.

## git commit
Record the changes made to the files to a local repository.
It’s best practice to include a message with each commit explaining the changes made in a commit. Adding a commit message helps to find a particular change or understanding the changes.

git commit -m "Commit message in quotes"

## git pull
To get the latest version of a repository run git pull. This pulls the changes from the remote repository to the local computer.

git pull <branch_name> <remote_URL/remote_name>

## git push
Sends local commits to the remote repository

git push <remote_URL/remote_name> <branch>



"# TVMAZE-App" 
