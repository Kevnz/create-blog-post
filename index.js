const path = require('path')
const os = require('os')
const exec = require('child_process').execSync
const fs = require('fs-extra')
const npm = require('npm-programmatic')
const { head, foot, extra } = require('./assets')

const install = (root) => {
  return  npm.install([ '@kev_nz/publisher' ], {
    cwd: root,
    saveDev: true,
  })
}

const gitInit = () => {
  exec('git --version', { stdio: 'inherit' })
  exec('git init', { stdio: 'inherit' })
  exec('git add .', { stdio: 'inherit' })
  exec('git commit -am "Initial Commit"', { stdio: 'inherit' })
  return true
}

const create = async (opts = {}) => {
  if (!opts.name) {
    throw new Error('name argument required')
    return
  }

  const dirname = path.resolve(opts.name)
  const name = path.basename(dirname)

  fs.ensureDirSync(name)
  fs.ensureDirSync(path.join(dirname, '.assets'))

  const packageJson = {
    name: name,
    version: '1.0.0',
    private: true,
    scripts: {
      post: 'publisher'
    }
  }

  fs.writeFileSync(
    path.join(dirname, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  )
  fs.writeFileSync(
    path.join(dirname, '.assets', 'head.html'),
    head
  )
  fs.writeFileSync(
    path.join(dirname, '.assets', 'foot.html'),
    foot
  )
  fs.writeFileSync(
    path.join(dirname, '.assets', 'extra.css'),
    extra
  )

  fs.writeFileSync(
    path.join(dirname, 'readme.md'),
    `# ${name} ${os.EOL}${os.EOL}`
  )
  process.chdir(dirname)

  await install(dirname)
  gitInit()

  return
}

module.exports = create
