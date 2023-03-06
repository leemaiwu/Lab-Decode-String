// Write your code below this line

function decodeString(code) {
    let decipher = +(code[0])
    let solution = ""
    for (let i = 1; i < code.length; i++) {
      let strValue = code[i].charCodeAt() + decipher
      solution += String.fromCharCode(strValue)
    }
    return solution
  }

  console.log(decodeString('2fcjjm'))



  //---------Jared's Solution----------//

function decoder(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split('')
    let num = +str.match(/^[0-9]+/)
    str = str.replace(str.match(/^[0-9]+/), '')
    let answer = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let charIndex = alphabetArr.indexOf(char)
        let newIndex = (charIndex + num) % 26
        answer += alphabetArr[newIndex]
    }
    return answer
  }

  console.log(decoder('2fcjjm'))