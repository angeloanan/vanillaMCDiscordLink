/* eslint-env jest */
const { messageParser } = require('../regex')

describe('Message Parsing', () => {
  it('1 word message', () => {
    const message = '<YourUsername> YourMessage'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['YourUsername', 'YourMessage']))
  })

  it('Message containing spaces', () => {
    const message = '<YourUsername> Your Message'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['YourUsername', 'Your Message']))
  })

  it('Message containing numbers', () => {
    const message = '<YourUsername> 123'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['YourUsername', '123']))
  })

  it('Message containing unicode characters', () => {
    const message = '<YourUsername> ☠☮☯♠Ω♤♣♧♥♡'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['YourUsername', '☠☮☯♠Ω♤♣♧♥♡']))
  })
})

describe('Real-world Message', () => {
  it('Message 1', () => {
    const message = '<Anthonymous> yo'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['Anthonymous', 'yo']))
  })

  it('Message 2', () => {
    const message = '<Anthonymous> kt gpunya mending'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['Anthonymous', 'kt gpunya mending']))
  })

  it('Message 3', () => {
    const message = '<Jojolooe> ga pergi ke acara keluarga?'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['Jojolooe', 'ga pergi ke acara keluarga?']))
  })

  it('Message 4', () => {
    const message = '<Anthonymous> nanti'
    expect(messageParser.exec(message)).toEqual(expect.arrayContaining(['Anthonymous', 'nanti']))
  })
})
