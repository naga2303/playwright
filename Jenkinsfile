pipeline {
  agent {
    docker {
      filename 'dockerfile'
      dir '.'
    }
  }
  stages{
    stage('docker image build')
    {
      steps{
        sh 'docker build -t pwImage:tag'
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