pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/hermawanhantanto/edspert-final-project', branch: 'main')
      }
    }

    stage('Error') {
      steps {
        sh 'ls -la'
      }
    }

  }
}