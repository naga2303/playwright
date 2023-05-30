pipeline {
  agent any
   
  stages{
    stage('docker image build')
    {
      steps{
         bat '''
          docker build . --file dockerfile -t pwtest1
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
  }
}