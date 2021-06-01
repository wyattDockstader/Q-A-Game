import { Question } from "../Models/Question.js"
import { ProxyState } from "../AppState.js"


class TriviaService {
    async getQuestions() {
        let res = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        let data = await res.json()
        ProxyState.questions = data.results.map(question => new Question(question))
        console.log(ProxyState.questions)

    }
}
export const triviaService = new TriviaService()