
exports.start_quest = [
    {
        type: 'list',
        message: 'Would you like to play a game? O_o',
        name: 'play_game',
        choices: [
            'yes',
            'no'
        ]
    }
]

exports.return_quest = [
    {
        type: 'list',
        message: 'Would you like to play again?',
        name: 'play_game',
        choices: [
            'yes',
            'no'
        ]
    }
]