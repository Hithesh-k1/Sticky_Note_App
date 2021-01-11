pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'Installation...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run test coverage'
            }
        }
        stage('Sonarqube') {
            environment {
                scannerHome = tool 'sonar_scanner'
            }

            steps {
                echo 'Scanning....'
                withSonarQubeEnv('Sonarqube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Production build...'
                sh 'npm run build'
            }
        }
    }
}
