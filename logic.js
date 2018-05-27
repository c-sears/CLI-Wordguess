
const { prompt } = require('inquirer')
const events = require('events')
const { Game } = require('./Game')
const { start_quest } = require('./Questions')



const start_new_game = ()=>{
    prompt(start_quest).then(({ play_game }) =>{
        if(play_game === 'yes'){
            return new Game().init()
        }
    })
}


start_new_game()