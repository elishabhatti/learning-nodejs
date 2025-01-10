// Global packages

// • Up until now, we have been installing packages locally.
// • To install package globally,
// • npm install -g npm-check-updates
// • On Linux, and macOS, you might have to prefix it with sudo
// • This package gets installed globally, and you can access from anywhere.
// • You can try running npm-check-updates command anywhere in any projects without using npx.
// • npm-check-updates also have an alias named ncu, which you can also use.

// • Fun fact: npm is itself a global package which means if you need to update npm, you
// will do: npm install -g npm

// • npm outdated -g
// • To see outdated global packages.
// • npm update –g <package-name>
// • npm remove -g <package-name>

// Development dependency

// • Development dependencies are the packages that aren’t needed for
// functioning of your project in production.
// • This can be for formatting, linting, testing, and so on.
// • If you use npm install --production, those packages won’t be installed,
// but they will be installed if you don’t use production flag.
// • npm install -D eslint
// • This will install eslint as a development dependency.
// • You will see it in separate property inside package.json named
// “devDependencies”