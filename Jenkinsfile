
pipeline {
    agent any
    //agent { docker { image 'node:10.19.0' } }
/*
    options {
        timeout(time: 5, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "./:${env.BUILD_NUMBER}"
    }
*/
    stages {
        stage('build') {
            steps {
                sh 'npm run start'
                sh 'echo "Basic Calculator, CI pipeline start"'
                //dockerImage = docker.build "${env.ARTIFACT_ID}"
            }
        }

        stage('Run tests') {
            steps {
                //sh "docker run ${dockerImage.id} npm test"
            }
        }
    }
}