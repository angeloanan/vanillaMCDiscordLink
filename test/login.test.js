/* eslint-env jest */
const { loginParser } = require('../regex')

describe('Login Parsing', () => {
  it('Sample login message ', () => {
    const message = 'Username[/123.123.123.123:42069] logged in with entity id 123456 at (0, 0.0, 0)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['Username']))
  })

  it('Username with underscores', () => {
    const message = 'User_name[/123.123.123.123:42069] logged in with entity id 123456 at (0, 0.0, 0)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['User_name']))
  })

  it('Random coordinate (Positive)', () => {
    const message = 'Username[/123.123.123.123:42069] logged in with entity id 123456 at (123, 64.0, 288477)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['Username']))
  })

  it('Random coordinate (Negative)', () => {
    const message = 'Username[/123.123.123.123:42069] logged in with entity id 123456 at (-123, 64.0, -288477)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['Username']))
  })
})

describe('Real-world message', () => {
  it('Message 1', () => {
    const message = 'Jojolooe[/139.0.45.120:53264] logged in with entity id 158708 at (946.207984234107, 64.0, -268.15027982730146)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['Jojolooe']))
  })

  it('Message 2', () => {
    const message = 'Jojolooe[/139.0.45.120:53625] logged in with entity id 209689 at (-770.4481029141763, 71.0, -3195.487500011921)'
    expect(loginParser.exec(message)).toEqual(expect.arrayContaining(['Jojolooe']))
  })
})
