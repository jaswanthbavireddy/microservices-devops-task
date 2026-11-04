# Deployment Components

## Application
| Component | Purpose |
|---|---|
| index.html | Home page linking to all services |
| UserService.html | User Service: lists users |
| ProductService.html | Product Service: lists products |
| OrderService.html | Order Service: lists orders |
| style.css | Shared styling |
| script.js | Renders data tables |
| data.js | Sample users, products and orders |

## DevOps
| Component | Purpose |
|---|---|
| Jenkinsfile | CI pipeline: Checkout, Validate, Secret Check, Build |
| .gitignore | Blocks secrets such as .env and .pem files |
| .env.example | Template of variables, with no real values |
| GitHub webhook | Triggers Jenkins on every push to main |

## Infrastructure
- Server: AWS EC2 (Ubuntu, t3.small), us-east-1
- Jenkins URL: port 8080
- Repository: https://github.com/jaswanthbavireddy/microservices-devops-task

## Branch Workflow
- main: stable release code
- develop: integration branch
- feature/*: one branch per change, merged by pull request

## Secrets Policy
No passwords, tokens or private keys are stored in the repo.
Real secrets are kept in the Jenkins Credentials store.
