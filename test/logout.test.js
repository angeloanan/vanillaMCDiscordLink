/* eslint-env jest */

const { logoutParser } = require('../regex')

describe('Logout Message', () => {
  it('Sample message 1', () => {
    const message = 'Anthonymous left the game'
    expect(logoutParser.exec(message)).toEqual(expect.arrayContaining(['Anthonymous']))
  })

  it('Sample message 2', () => {
    const message = 'Angelo_UwU left the game'
    expect(logoutParser.exec(message)).toEqual(expect.arrayContaining(['Angelo_UwU']))
  })
})
