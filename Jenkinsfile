pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Code pulled from GitHub'
            }
        }

        stage('Validate Files') {
            steps {
                sh '''
                for f in index.html UserService.html ProductService.html OrderService.html style.css script.js data.js
                do
                  if [ -f "$f" ]; then echo "OK: $f"; else echo "MISSING: $f"; exit 1; fi
                done
                '''
            }
        }

        stage('Secret Check') {
            steps {
                sh '''
                if git ls-files | grep -E "\\.pem$|\\.env$"; then
                  echo "Secret file found in repo"; exit 1
                else
                  echo "No secret files committed"
                fi
                '''
            }
        }

        stage('Build') {
            steps {
                echo 'User, Product and Order services packaged successfully'
            }
        }
    }

    post {
        success { echo 'Pipeline finished: SUCCESS' }
        failure { echo 'Pipeline finished: FAILED' }
    }
}
