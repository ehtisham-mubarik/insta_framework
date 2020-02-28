pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        sh 'rm -rf node_modules'
        git 'https://github.com/qalesson/insta_framework/'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npx wdio'
      }
    }      
  }
}