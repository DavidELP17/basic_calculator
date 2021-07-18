pipeline {
    agent any

    //agent { docker { image 'node:10.19.0' } }

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
        stage ("Install dependencies") {
            steps {
                sh 'npm install'
            }
        }
        
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

        stage('Run static quality tests') {
            steps {
                sh "docker run ${dockerImage.id} npm sonar"
            }
        }
        /*stage('SCM') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'basic_calculator';
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }*/
    }
}