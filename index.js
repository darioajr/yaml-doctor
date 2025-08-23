const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const path = core.getInput('path');
    await exec.exec('npx', ['@darioajr/yaml-doctor', path]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
