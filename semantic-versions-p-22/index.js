// semantic versioning system
// 1.0.0.1

// major version
// breaking change, e.g rebrand feature set added.

// minor version
// non-breaking noteworthy change, e.g new component, updated styles

// patch version
// small request or bug fix, e.g update or edit existing elements

// example: 4.21.2
// major update will make it 5.00.0
// minor update will make it 4.22.2
// patch update will make it 4.21.3
// best example

// most of the npm packages use semanctuc versioning system or semVer.
// Note: Some Packages like typescript, react-native don't follow

// symbols in dependency versions
// Symbol Meaning Example Resolves To
// ^ (Caret) Minor and patch updates allowed ^4.17.1 4.18.0, not 5.0.0
// ~ (Tilde) Only patch updates allowed ~4.17.1 4.17.2, not 4.18.0
// Exact Fixed version 4.17.1 4.17.1 only
// > Greater than >4.17.1 4.18.0, 5.0.0
// < Less than <4.17.1 4.16.0, not 4.17.1
// >= Greater than or equal to >=4.17.1 4.17.1, 5.0.0
// <= Less than or equal to <=4.17.1 4.17.1, 4.16.0
// * Any version * 4.0.0, 5.0.0, etc.
// Range Acceptable range 4.16.0 - 4.17.1 4.16.0, 4.17.1
// x Wildcard for minor/patch versions 4.x 4.16.0, 4.18.1

// npm commands

// • npm install <package-name>@<version>
// • Examples:
// • npm install express@4.0.0 // ^4.0.0
// • npm install express@4.0.0 --save-exact // To install exact version.
// • npm install express@~4.0.0
// • npm install express@4.2.x
// • You can use any symbols while specifying version.
// • npm outdated
// • It shows outdated packages in your project.
// • Current: The version of the package currently installed in your project.
// • Wanted: The latest version that satisfies the version range defined in your package.json.
// It basically uses the symbols to get it.
// • Latest: Absolute latest version of the package.
// • npm remove <package-name>