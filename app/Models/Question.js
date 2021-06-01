
export class Question {
    constructor(data) {
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }
}












// {"category":"General Knowledge",
// "type":"multiple",
// "difficulty":"easy",
// "question":"Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
// "correct_answer":"Richard Branson",
// "incorrect_answers":
// ["Alan Sugar","Donald Trump","Bill Gates"]},

// {"category":"General Knowledge",
// "type":"multiple",
// "difficulty":"easy",
// "question":"What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
// "correct_answer":"Demolition",
// "incorrect_answers":["The Dream Team","The Bushwhackers","The British Bulldogs"]},