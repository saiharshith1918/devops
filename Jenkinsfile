pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "saiharshith1918/jenkins-demo"   // 👈 your Docker Hub repo
        DOCKER_CREDENTIALS = "dockerhub-pass"           // 👈 Jenkins credential ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/saiharshith1918/devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                }
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

        // Uncomment this stage once Kubernetes is configured
        // stage('Deploy to Kubernetes') {
        //     steps {
        //         sh 'kubectl apply -f k8s-deployment.yaml'
        //     }
        // }
    }
}
