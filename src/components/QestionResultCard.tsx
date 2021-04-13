import { Box, Button, Divider, Typography } from '@material-ui/core'
import React from 'react'


interface Props {
    answered: number
}

export const QestionResultCard = (props: Props) => {
    return (
        <Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h5">Your Result is: </Typography>
            </Box>
            <Divider />
            <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
               {/* <Typography variant="subtitle1">{quizdata[props.question].question}</Typography> */}
               {/* <img src="https://i.gifer.com/F8H3.gif" style={{ paddingTop: 10}} /> */}
               <Typography variant="h5">You have answered Correctly {props.answered}</Typography>
            </Box>
            <Box p={2} display="flex" justifyContent="center" alignItems="center">
                {/* {props.question < quizdata.length ? (<Button onClick={() => props.onClick('next')} size="large" style={{ marginRight: 20}} variant="contained" color="primary">Next Question</Button>) : null}
                <Button onClick={() => props.onClick('finish')} size="large" style={{ marginLeft: 20}} variant="contained" color="secondary">Finish</Button> */}
            </Box>
        </Box>
    )
}