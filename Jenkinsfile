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
                sh 'npm run test:coverage'
            }
        }
        stage('Sonarqube-Quality_Gate') {
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

        stage('Upload to aws S3') {
            steps {
                echo 'Uploading...'
                dir('/home/nineleaps/.jenkins/workspace/Sticky_Note_App/') {
                    pwd() //Log current directory
                    //credentials is the id name for
                    withAWS(region:'us-east-2', credentials:'AWS_CREDENTIALS') {
                        //  def identity=awsIdentity();//Log AWS credentials
                        // Upload files from working directory 'dist' in your project workspace
                        s3Upload(bucket:'sticky-note-app', workingDir:'build', includePathPattern:'**/*')
                    }
                }
            }
        }
    }
}
