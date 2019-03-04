#!/usr/bin/env node

const path = require('path')
const meow = require('meow')
const create = require('../index')

const cli = meow(
  `
  Usage

    $ npm init blog-post my-post

`,
  {
    booleanDefault: undefined,
    flags: {
      version: {
        type: 'boolean',
        alias: 'v',
      },
    },
  }
)

const [name] = cli.input

if (!name) {
  cli.showHelp(0)
}

const root = path.resolve(name)

create({
  name,
})
.then(()=> {
  console.info('Created')
  process.exit(0)
})
.catch(()=> {
  console.info('Failed')
  process.exit(1)
})