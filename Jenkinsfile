pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
       /* script {
                    def imageName = 'pwtest1'
                    def imageTag = 'tag'
                    def dockerfilePath = './dockerfile'

                    // Build the Docker image
                    docker.build("${imageName}:${imageTag}", "-f ${dockerfilePath} .")
        
      }*/
         bat '''
          docker build . --file dockerfile -t pwtest1
          '''
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
   stage('docker image-run') {
            steps {
                // Archive Playwright report files
                //sh 'ls'
                //archiveArtifacts(artifacts: 'playwrightTests/playwrightTesting/playwright-report/index.html')
                echo 'My mistake!!'
               // sh 'ls'
               // sh 'pwd'
                //sh 'dir'
                //pwd
               /* script {
                 def dockerImage = 'pwtest1:tag'
                  docker.image(dockerImage).run('--name pwcontainer') 
                    }*/
                 
               //sh'docker run -it -d pwtest1:tag /bin/bash'
               bat '''
                    docker run -d -t --name pwcontainer pwtest1:latest
                   '''
            }
        }
      stage('docker start')
      {
        steps {
          bat '''
          docker exec pwcontainer ls -l
          cd playwrightTesting
          npm install
          npx @playwright/test install
          npx playwright install-deps
          npm install allure-playwright
          '''
        }
      }
      stage('docker exec')
      {
        steps {
          bat '''
          npm run triggerheadless
          '''
        }
      }
  }
}