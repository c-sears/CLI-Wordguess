exports.Letter = function (char) {
    this.char = char
    this.guessed = false
    this.return_char = () =>{
        if (!this.guessed){
            return `_`
        } else {
            return this.char
        }
    }
    this.guessing = test_char =>{
        if(test_char===this.char && !this.guessed){
            return this.guessed = true
        } else {
            return false
        }
    }
}



/*

Planning out what I will need to do

ToDo -- Create constructor taking a character as an argument
ToDo -- Store a string value of the char
ToDo -- Store a Boolean indicating whether the argument char is in the current word
ToDo -- Method that returns placeholder if char has not been chosen and string if it has
ToDo -- Method with a character as an argument determining if `this.char === param` and updates `this.boolean` if true
ToDo -- 
ToDo -- 
ToDo -- 
ToDo -- 
ToDo -- 
ToDo -- 
ToDo -- 




*/