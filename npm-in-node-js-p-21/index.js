// introduction in node.js
// npm is a popular pakage manager which comes bundled with node.js
// if is a CLI tool used to install update and remove external packages.
// you can also create your own packages and publish it on npmjs.com registry where most of the 
// packages of node.js are saved
// there are alternative node.js package managers registry like JSR, which we will discuss in future

// fun facts:
// npm should'nt be written in capitialized form unless you have everything as capitial.
// npm doesn;t stand for node package manager even though many people refrt to id
// as that it is a recrusive acronymic abbreviation for 'npm is not an acronym'

// npm commands
// before following these commands make sure you initialized your project.
// npm install <package-name>
// alternatively you can use npm i
// after installation you will notice node_modules folder and package-lock.json
// node_modules is what stores all the installed packages it's usually heavy, so make
// sure to include it in .gitignore so that of won't get pushed on version control and 
// aviod it while sharing with others.
// you will notice that these are some packages which you did't install it's becuase 
// the package that you installed depend on those thrid-party packages.
// sire to prevent breaking changes in newer versions package
// noe, you can use the package by importing normally as you do with core modules.
// while importing. first node.js checks for core modules. then files or folders, and at last
// looks inside node_modules

// npm install
// even is you delete node_modules, you can use command to install
// all of them again. it uses version specified in packages-lock.json 
// or package.json

// npm list
// because of symbols the version spscified in package.json might not
// be installed
// to see the exact versions of all packages installed in you project
// use -a flag to see whole list

// npm view <package-name>
// to see details of a packages that you installed incliding version, license
// author, and so on.

// npm view <pakage-name> <package.json-property>
// Example npm view express version
// you can use it to view any property from package.json of a package
// that you install

// npm view <package-name> versions
// you can use it to see all versions of a package