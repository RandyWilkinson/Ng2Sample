# Ng2Sample
This repository holds a Visual Studio 2015, Asp.net Core version of the TypeScript source code of the 
[angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),the foundation for most of
the Angular 2 documentation samples and potentially a good starting point for your application. This is 
basically a update of this [Typescript Asp.net Core tutorial](http://www.typescriptlang.org/docs/handbook/asp-net-core.html)
to use the most recent libraries and quickstart code.

## Create a new project based on this QuickStart Template

Clone this repo into new project folder (e.g., `my-proj`).

## Install npm packages

Install the npm packages described in the `package.json`. Normally this is done for you by visual studio
when you open the solution. But visual studio NPM tool has a difficult time resolving the packages and so the
initial install needs to be done from the command line in the 'src\Ng2Sample' folder. 

Note: The folder path length can become an issue with some of the nested modules, this issue has been addressed in
the newer version of NPM. I would recommend using this [tool](https://github.com/felixrieseberg/npm-windows-upgrade) to
upgrade to a version of NPM > 3.0. I would also highly recommend this [npm task runner](https://github.com/madskristensen/NpmTaskRunner) extension.

```bash
npm install
```
### Gulp Scripts

These scripts move the neccesary angular 2 node_modules into the wwwroot/lib directory, this allows for you to work with the Angular 
2 documentation samples. Also I added a seperate folder in wwwroot folder for the global styles, component specific styles belong next to the components based 
on the angular 2 style guidelines. The node module dependencies are moved in a gulp task started by an npm post install event. You can right click on the 'gulpfile.js' 
and open the Task Runner Explorer to see these tasks. I have also added a webserver gulp task that will start a simple http server on port 8000 in the wwwroot directory
with a browserlink websocket that causes the browser to refresh when there are changes. Simply start the webserver task, then as you save changes in the wwwroot directory it
causes a refresh. This is a great method for doing rapid development and not having to wait for kestrel to start.

### Usage

After installing the npm packages, open the .sln file in Visual Studio 2015 with the latest version of 
the Typscript tools for Visual Studio (at the time of this writing it is version 2.0.3). 
Next just build the application and use the Ng2Sample command to launch kestrel and navigate to http://localhost:5000. 

Another option is to use the dotnet CLI from the command line in the 'src\Ng2Sample' folder to build and launch the application:
```bash
npm install
npm run tsc
dotnet restore
dotnet build
dotnet run
```

### TypeScript Unit Tests

Getting this jasmine based angular 2 quickstart unit test working with chutzpah proved to be difficult and the final solution is based on 
this fabulous [project](https://github.com/GeorgDangl/NetCoreHeroes). To run unit tests for Angular 2 components, get the
[Chutzpah Test Adapter for Visual Studio](https://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe).
The Angular 2 tests should then be available in the Visual Studio Test Explorer after a rebuild.

Enjoy!

### Dependencies
* Visual Studio 2015 update 3
* [Chutzpah Test Adapter for Visual Studio](https://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe)
* [.NET Core 1.1.0 SDK Preview 2.1 build 3177](https://github.com/dotnet/core/blob/master/release-notes/download-archives/1.1-preview2.1-download.md)
* Typescript for Visual Studio version 2.0.3
* Node version 6.9.5
* NPM version 4.0.0 (optional, but recommended)
* [NPM Task Runner Extension](https://github.com/madskristensen/NpmTaskRunner) (Optional, but recommende)
