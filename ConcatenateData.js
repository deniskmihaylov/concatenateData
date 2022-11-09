function concatenateData(input) {
    let name = input[0]
    let surname = input[1]
    let age = input[2]
    let city = input[3]
    let info = `You are ${name} ${surname}, a ${age}-years old person from ${city}.`
    console.log(info)
}

concatenateData(['Denis', 'Mihaylov', 26, 'Pernik'])