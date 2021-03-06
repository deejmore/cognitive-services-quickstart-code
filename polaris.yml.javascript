version: "1"
project:
  name: ${scm.git.repo}
  branch: ${scm.git.branch}
  revision:
    name: ${scm.git.commit}
    date: ${scm.git.commit.date}
capture:
  fileSystem:
    javascript:
      files:
      - directory: ${project.projectDir}/javascript
      - excludeRegex: node_modules|bower_components|vendor
analyze:
  mode: central
install:
  coverity:
    version: default
serverUrl: https://sipse.polaris.synopsys.com
