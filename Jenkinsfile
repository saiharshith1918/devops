pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "your_dockerhub_username/jenkins-demo"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/yourusername/jenkins-docker-k8s-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKER_HUB_PASS')]) {
                    sh """
                    echo $DOCKER_HUB_PASS | docker login -u your_dockerhub_username --password-stdin
                    docker push $DOCKER_IMAGE:$BUILD_NUMBER
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}



