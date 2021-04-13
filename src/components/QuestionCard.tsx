import { Box, Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import quizdata from '../data/quizdata'

interface Props {
    question: number
    onSetAns: any
}

export const QuestionCard = (props: Props) => {
    return (
        <Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h6">Question</Typography>
            </Box>
            <Divider />
            <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
               <Typography variant="subtitle1">{quizdata[props.question].question}</Typography>
               <img src={quizdata[props.question].image} style={{ paddingTop: 10}} />
            </Box>
            <Box p={2} display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => props.onSetAns(quizdata[props.question].option1)} size="large" style={{ marginRight: 20}} variant="contained" color="primary">{quizdata[props.question].option1}</Button>
                <Button onClick={() => props.onSetAns(quizdata[props.question].option2)} size="large" style={{ marginLeft: 20}} variant="contained" color="secondary">{quizdata[props.question].option2}</Button>
            </Box>
        </Box>
    )
}
