pipeline {
  agent {
    dockerfile{
      filename 'dockerfile'
      dir '.'
    }
  }
  stages {

      }
    }

    stage('run') {
      steps {
       echo 'hello world'
      }
    }

    stage('report') {
      steps {
        emailext(subject: 'playwright', body: 'with report attached', saveOutput: true, to: 'nagaraj2319@gmail.com', attachLog: true, compressLog: true, attachmentsPattern: 'playwrightTesting/playwright-report/index.html')
      }
    }

  }
}