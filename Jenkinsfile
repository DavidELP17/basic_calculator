pipeline {
    agent any

    tools {
        nodejs '10.19.0'
    }
    
    options {
        timeout(time: 15, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "davidelp17/calculator:${env.BUILD_NUMBER}"
    }

    stages {       
        stage('Run unit tests') {
            steps {
                script {
                    sh 'echo "Basic Calculator, CI pipeline start"'
                    sh "npm test"
                }
            }
        }

        stage('Run static analysis of code') {
            steps {
                sh "npm run sonar"
            }
        }

        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }

        stage('Publish') {
            steps {
                script {
                    docker.withRegistry("", "DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
