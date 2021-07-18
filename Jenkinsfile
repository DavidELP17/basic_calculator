
pipeline {
    agent any
/*
    tools {
        nodejs '10.19.0'
    }

    //agent { docker { image 'node:10.19.0' } }
*/
    options {
        timeout(time: 5, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "./:${env.BUILD_NUMBER}"
    }

    stages {
        /*stage ("Install dependencies") {
            steps {
                sh '/usr/bin/npm --version'
                sh '/usr/bin/npm install'
            }
        }*/

        stage('build') {
            steps {
                sh 'echo "Basic Calculator, CI pipeline start"'
                //dockerImage = docker.build "${env.ARTIFACT_ID}"
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
                //sh "docker run ${dockerImage.id} npm test"
            }
        }
    }
}