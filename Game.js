const keypress = require('keypress')
const { prompt } = require('inquirer')
const { Word } = require('./Word')
const { return_quest } = require('./Questions')


/*
    Things I need to do for a new game:
      * set default words
      * randomly select word
      * create new Word object with random word
      * display placeholders for word to guess
      * initialize keypress events
      * call on functions from `Words.js` on keypress
      * update user when all leters have been selected
      * ask user if they would like to play again or quit
*/


exports.Game = function() {
    this.words = ['nodejs','javascript','yanie','laurel', 'express', 'hoisting', 'currying']
    this.current_word = {}
    this.req_correct = 0
    this.actual_correct = 0
    this.guessed = []

    this.init = function(){
        this.init_new_word()
        console.log(this.disp_placeholders())
        keypress(process.stdin); // Begin listening for keypress events
        process.stdin.on('keypress', (ch, key)=> this.check_input(ch, key)) 
        process.stdin.setRawMode(true);
        process.stdin.resume();  
    }
    
    this.stop_keypress = () => process.stdin.pause() // stop listening for keypress events

    this.check_input = function(ch, key){
        if (key && key.ctrl && key.name == 'c') { // Stop listening for keypress events
            process.stdin.pause();                // if user presses `ctrl`+`c`
        } else if (key !== undefined){
            const validation = this.current_word.test_char(key.name)
            this.actual_correct += validation
            if(this.actual_correct === this.req_correct){

                this.stop_keypress()
                console.log(`\n\nYou won!\n\n`)
                setTimeout(this.user_interface, 500)

            } else if(this.guessed.includes(key.name)){
                console.log('\nalready guessed that one\n')

            } else if(validation && this.actual_correct !== this.req_correct){
                this.guessed.push(key.name)
                console.log(`\nNice going!\n`)

            } else if(!validation && this.actual_correct !== this.req_correct) {
                this.guessed.push(key.name)
                console.log(`\nWhoops.. not that one!\n`)
            }
            console.log(this.disp_placeholders())
        }
    }
    
    this.init_new_word = function(){ // sets random word for new round
        const rand_num = Math.floor(Math.random() * this.words.length)
        const new_word = new Word(this.words[rand_num])
        new_word.letters()
        this.current_word = new_word
        this.req_correct = new_word.strung_together().length
    }

    this.disp_placeholders = function(){ // returns underscores for each letter
        return this.current_word.strung_together().join(' ')
    }
    this.user_interface = function(){
        prompt(return_quest).then(function(resp){
            return new Game().init()
        })
    }
}

