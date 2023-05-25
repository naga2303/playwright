pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
        script {
                    def imageName = 'pwtest'
                    def imageTag = 'tag'
                    def dockerfilePath = './dockerfile'

                    // Build the Docker image
                    docker.build("${imageName}:${imageTag}", "-f ${dockerfilePath} .")
        
      }
    }
    }
    stage('docker run build')
    {
      steps{
        script {
                  docker run -it -d --name pwtestContainer pwtest
        
      }
    }
    }
   stage('Publish Report') {
            steps {
                // Archive Playwright report files
                sh 'ls'
                archiveArtifacts(artifacts: 'playwrightTests/playwrightTesting/playwright-report/index.html')
            }
        }
  }
}