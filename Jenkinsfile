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
        sh 'ls'
        sh 'npm i'
        sh 'ls'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npx wdio'
      }
    }      
  }
}