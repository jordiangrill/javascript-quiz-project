class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
        
    moveToNextQuestion() {
        return this.currentQuestionIndex++
    }

    shuffleQuestions() {
        return this.questions.sort(() => Math.random() -0.5)
    }

    checkAnswer(answer) {
        if (this.getQuestion().answer === answer) {
            this.correctAnswers++
        }
    }
    // 6. hasEnded()
}