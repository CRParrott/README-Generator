# README-Generator

Description

A developer needs to generate readmes for almost every project they are working on. So a quick and easy method to create a readme file will make for a quick process.

This is an application that runs with Node.js that generates a README.md file based on input about your project. Check out the GeneratedREADME.md in this repo as an example.

Table of Contents
Process
Usage
License
Installation
Steps required to install project and how to get the development environment running:

To generate your own README, first run npm install in order to install inquirer that will prompt you for your inputs
The application itself can be run with node index.

Usage
Instructions and examples:

When you run node index, the application uses the inquirer package to prompt you in the terminal with a series of questions about your GitHub and about your project.

The application then takes your responses From there, the application will generate a README and a table of contents for the README based on your responses to the Inquirer prompts. The README will also include badges for your GitHub repo.

Finally, fs.writeFile is used to generate your project's README.md file. Check out the GeneratedREADME.md in this repo as an example.

License
MIT License
