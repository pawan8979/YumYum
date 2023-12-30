pipeline {
    agent any

    stages {
        stage("Code") {
            steps {
                echo 'Cloning the code'
                git url:"https://github.com/pawan8979/YumYum.git", branch: "main"
            }
        }
        stage("Build") {
            steps {
                echo 'Building the image'
                sh "docker build -t yumyum ."
            }
        }
        stage("Push") {
            steps {
                echo 'Pushing the image to Docker Hub'
                withCredentials([usernamePassword(credentialsId:"docker-hub", passwordVariable:"dockerHubPass", usernameVariable:"dockerHubUser")]){
                    sh "docker tag yumyum ${env.dockerHubUser}/yumyum:latest"
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker push ${env.dockerHubUser}/yumyum:latest"
                }
            }
        }
        stage("Deploy") {
            steps {
                echo 'Deploying the Container'
                sh "docker run --name yumyum-container -d -p 3001:3001 pawan8979/yumyum:latest"
            }
        }
    }
}
