pipeline {
    agent any

    tools {
        nodejs '10.19.0'
    }
    
    options {
        timeout(time: 5, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "calculator:${env.BUILD_NUMBER}"
    }

    stages {       
        stage('Build') {
            steps {
                script {
                    sh 'echo "Basic Calculator, CI pipeline start"'
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }

        stage('Run unit tests') {
            steps {
                sh "docker run ${dockerImage.id} npm test"
            }
        }

        stage('Run static analysis of code') {
            steps {
                sh "docker run ${dockerImage.id} npm run sonar"
            }
        }
    }
}