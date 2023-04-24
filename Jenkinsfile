pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            sh 'cd playwrightTesting'
          }
        }

        stage('error') {
          steps {
            sh '''ls
cd playwrightTesting
npm install'''
          }
        }

      }
    }

    stage('run') {
      steps {
        sh '''ls
cd playwrightTesting
ls
npm install
npx playwright test'''
      }
    }

    stage('report') {
      steps {
        emailext(subject: 'playwright', body: 'without report attached', saveOutput: true, to: 'nagaraj2319@gmail.com', attachLog: true, compressLog: true, attachmentsPattern: 'playwrightTesting/playwright-report/index.html)
      }
    }

  }
}
