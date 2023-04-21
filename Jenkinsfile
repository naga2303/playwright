pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            sh 'rm package-lock.json'
          }
        }

        stage('error') {
          steps {
            sh '''ls
npm install'''
          }
        }

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