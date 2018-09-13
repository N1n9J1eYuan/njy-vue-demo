export default class Hello {
  constructor () {
  }
  init () {
    this.data = {
      name: '333'
    }
    this.hello()
  }
  hello () {
    if (this.name === '333')
      console.log(this.name)
    else
      console.log(999)
  }
}