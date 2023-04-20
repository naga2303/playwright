pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm init'
      }
    }

    stage('run') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('report') {
      steps {
        emailext(subject: 'playwright', body: 'without report attached', saveOutput: true, to: 'nagaraj2319@gmail.com', attachLog: true, compressLog: true)
      }
    }

  }
}