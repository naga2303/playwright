pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
      dir '.'
    }
  }
  stages{
    stage('docker image build')
    {
      sh 'docker build -t pwImage:tag'
    }
    stage('docker cmd')
    {
      sh 'echo pass 1'
    }
  }
}