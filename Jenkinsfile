pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
        script {
                    def imageName = 'pwtest1'
                    def imageTag = 'tag'
                    def dockerfilePath = './dockerfile'

                    // Build the Docker image
                    docker.build("${imageName}:${imageTag}", "-f ${dockerfilePath} .")
        
      }
    }
    }
  /*  stage('docker run build')
    {
      steps{
        script {
                  docker.run("-it -d --name pwtestContainer pwtest1 /bin/bash") 
        
      }
    }
    }*/
   stage('Publish Report') {
            steps {
                // Archive Playwright report files
                //sh 'ls'
                //archiveArtifacts(artifacts: 'playwrightTests/playwrightTesting/playwright-report/index.html')
                echo 'My mistake!!'                
                sh 'pwd'
                pwd
               // docker run -it -d pwtest1:tag
               //sh'docker run -it -d pwtest1:tag /bin/bash'
            }
        }
  }
}