pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
         bat '''
          docker build . -f playwrightTesting\\dockerfile -t pwtest1
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
            docker cp pwcontainer:/playwrightTests/playwrightTesting/playwright-report/index.html %WORKSPACE%
            '''
      }
    }
    stage('publish report'){
      steps{
          publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: '.', reportFiles: 'index.html', reportName: 'UI HTML Report', reportTitles: ''])

      }
    }
  }
}