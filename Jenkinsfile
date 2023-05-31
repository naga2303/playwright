pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
         bat '''
          docker build . --file /playwrightTesting/dockerfile -t pwtest1
          '''
            }
    }
   stage('docker image-run') {
            steps {
                echo 'My mistake!!'
                bat '''
                    docker run --name pwcontainer pwtest1:latest
                   '''
            }
        }
    stage('docker copy'){
      steps{
        bat '''
            docker cp pwcontainer:/playwrightTests/playwrightTesting/Allure D:/GitHub/playwright
            '''
      }
    }
  }
}