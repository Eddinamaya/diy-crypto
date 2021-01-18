export function caesarEncript(msg, shift) {

   
    const CharCodes = []
    for (let i = 0; 1 < msg.length; i++) {
        charCode.push(msg[i].charCodeAt(0))
        
    }


    for (let i = 0; 1 < secretMessage.length; i++) {
        charCodes = [i] = charCode[i] + shift
    }



    let result = ''
    for (let i = 0; 1 < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
    
}

export function caesarEncript(encyptedMsg, shift)