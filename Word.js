const { Letter } = require('./Letter')

exports.Word = function(word){
    this.included = []
    this.letters = () =>{
        for (const letter of word){
            this.included.push(new Letter(letter))
        }
    }
    this.strung_together = () =>{
        let word_to_guess = []
        for (const obj of this.included){
            word_to_guess.push(obj.return_char())
        }
        return word_to_guess
    }
    this.test_char = char =>{
        const bucket = []
        for (const obj of this.included){
            const validate = obj.guessing(char)
            if(validate){
                bucket.push(true)
            }
        }
        return bucket.length
    }
}


