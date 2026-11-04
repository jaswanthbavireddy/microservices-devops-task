# Microservices DevOps Demo

A static demonstration website with User, Product and Order pages.
It uses sample data and has no login or backend APIs.

## Project Files
- index.html: Home page
- UserService.html: Sample users
- ProductService.html: Sample products
- OrderService.html: Sample orders
- style.css: Shared styling
- script.js: Displays the sample data
- data.js: Demo users, products and orders

## DevOps Configuration
- Jenkinsfile: Checks required files and selected secret-file names
- docs/DEPLOYMENT.md: Deployment documentation
- .env.example: Configuration template without real credentials

## Branch Workflow
Feature branches are merged into develop through pull requests.
Release changes are merged from develop into main through a pull request.

