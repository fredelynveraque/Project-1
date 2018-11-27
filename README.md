# Prototype by Code Ninja

The goal of this project is to allow designers to create a quick prototype project with a built in asset compiler and web server. The whole directory structure is designed so that it will be easy to merge with existing projects, that's why html files are stored in the prototype folder and not public, and the main script is prototype.js and not index.js

## How to start on a new project
1. Download [https://github.com/code-ninja/prototype.git] into you new project
2. Run npm install
3. Run bower install
4. Run npm serve, this will start serving all your html files in prototypes to start serving
5. Run gulp build, this will compile initial assets if any
6. Run gulp watch, this will watch for changes in css and js folders

## How to include new front-end libraries
1. Use bower to install new assets as needed
2. Add paths to package.json compile settings as needed
