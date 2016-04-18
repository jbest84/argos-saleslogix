node {
  dir('products/argos-saleslogix') {
    stage 'Checkout'
    git 'https://github.com/jbest84/argos-saleslogix.git'

    stage 'npm install'
    bat 'npm install'

    stage 'Build'
    bat 'build\\release.cmd'

    stage 'Archive'
    archive 'deploy/**/*.*'
  }
}
