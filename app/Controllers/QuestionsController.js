import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"



function drawQuestions() {
    let questions = ProxyState.questions
    let template = ''


    questions.forEach(question => {
        template += /*html*/`
        <div>
            <h3>${question.question}</h3>
        
        
        </div>
    `
    })
}

function drawAnswers() {
    let Answers = []
    ProxyState.question
}

export class QuestionsController {
    constructor() {
        ProxyState.on('questions', drawQuestions)
    }

    getQuestions() {
        try {
            triviaService.getQuestions()
        } catch (error) {

        }
    }
}