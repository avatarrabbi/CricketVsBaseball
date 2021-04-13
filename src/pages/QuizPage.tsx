import { Box, Typography, Divider, Button } from '@material-ui/core'
import React, { Component } from 'react'
import {quizDisplay} from '../model'
import quizdata from '../data/quizdata'
import { QuestionCard } from '../components/QuestionCard'
import {QestionCorrectCard} from '../components/QestionCorrectCard'
import {QuestionWrongCard} from '../components/QuestionWrongCard'
import {QestionResultCard} from '../components/QestionResultCard'
import { ArrowBackIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
interface Props {
    
}
interface State {
    display: string
    question: number
    answered: number
}

export default class QuizPage extends Component<Props, State> {

    constructor(props: Props){
        super(props)
        this.state = {
            display: '',
        question: 0,
        answered: 0
        }
        this.onPressQuestionOption = this.onPressQuestionOption.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    handleReset(){
        this.setState({
            display: '',
        question: 0,
        answered: 0
        })
    }

    onPressQuestionOption(ans: string){
        if(quizdata[this.state.question].correct_answer === ans){
            this.setState({display: quizDisplay.CORRECT_SCREEN_DISPLAY, answered: this.state.answered+1})
        } else {
            this.setState({display: quizDisplay.WRONG_SCREEN_DISPLAY})
        }

    }

    onClickHandler(value: string){
        if(value === "next"){
            this.setState({display: '', question: this.state.question + 1})
            
        } else {
            this.setState({display: quizDisplay.SCORE_SCREEN_DISPLAY})
        }
    }

    _renderScreenDisplay(){
        switch (this.state.display) {
            case quizDisplay.CORRECT_SCREEN_DISPLAY:
                return <QestionCorrectCard onClick={this.onClickHandler} question={this.state.question} />
            case quizDisplay.WRONG_SCREEN_DISPLAY:
                return <QuestionWrongCard onClick={this.onClickHandler} question={this.state.question} />
            case quizDisplay.SCORE_SCREEN_DISPLAY:
                return <QestionResultCard answered={this.state.answered} />
            default:
                return <QuestionCard question={this.state.question} onSetAns={this.onPressQuestionOption} />
                break;
        }
    }

    render() {
        return (
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">    
                    <Button variant="outlined" component={Link} to="/">
                        <ArrowBackIos /> back
                    </Button>
                    <Button variant="outlined" onClick={this.handleReset.bind(this)}>
                        <RotateLeftIcon /> Reset
                    </Button>

                </Box>
                {this._renderScreenDisplay()}
            </Box>
        )
    }
}
