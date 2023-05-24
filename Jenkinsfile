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
    stage('docker cmd')
    {
      steps{
        sh 'echo pass 1'
      }
    }
  }
}