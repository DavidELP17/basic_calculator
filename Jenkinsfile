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
                    sh "docker login -u davidelp17 -p 8285c652-9e8d-42ba-b1f3-802ae818cbbb"
                    docker.withRegistry("", "DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
