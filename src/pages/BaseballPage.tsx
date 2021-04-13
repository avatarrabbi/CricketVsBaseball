import { ArrowBackIos } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

interface Props {
    
}
interface State {
    
}

export default class BaseballPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                
                <Box>
                    <Button variant="outlined" component={Link} to="/">
                        <ArrowBackIos /> back
                    </Button>
                </Box>
            </div>
        )
    }
}
