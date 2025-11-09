pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "harshith1918/jenkins-demo"

        DOCKER_CREDENTIALS = "dockerhub-pass"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/saiharshith1918/devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS", usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                        echo "$PASS" | docker login -u "$USER" --password-stdin
                        docker push $DOCKER_IMAGE:$BUILD_NUMBER
                        docker tag $DOCKER_IMAGE:$BUILD_NUMBER $DOCKER_IMAGE:latest
                        docker push $DOCKER_IMAGE:latest
                    '''
                }
            }
        }
    }
}
