pipeline {
    agent { docker { image 'node:16' } }

    environment {
        APP_DIR   = "app"
        BUILD_ZIP = "build.zip"
    }

    stages {
        stage("Checkout Code") {
            steps {
                git branch: 'main', url: 'https://github.com/Koushik-shet/Devops.git'
            }
        }

        stage("Install Dependencies") {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage("Run Unit Tests") {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm test'
                }
            }
        }

        stage("Build Artifact") {
            steps {
                sh "zip -r ${BUILD_ZIP} ${APP_DIR}"
            }
        }

        stage("Archive Artifact") {
            steps {
                archiveArtifacts artifacts: "${BUILD_ZIP}", fingerprint: true
            }
        }
    }
}
