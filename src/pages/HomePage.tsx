import { Box, Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/CategoryCard'
import compareData from '../data/compareData'

interface Props {
    
}
interface State {
    
}

export default class HomePage extends Component<Props, State> {
    state = {}


    renderCategoriesItem = () => {
        return compareData.map((item) => {
            return <CategoryCard key={item.id} title={item.title} image={item.image} href={`/compare/${item.id}`} />
        })
    }

    render() {
        return (
            <div>
                <Box pl="20px" pr="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <h1>Welcome to Cricket VS Baseball</h1>
                    <p style={{ textAlign: 'center', paddingTop: '10px'}}>The Characteristics and Rules of Playing cricket compared side by side against Baseball!</p>
                    <img src="./assets/cricket_baseball_homepage_image.gif" style={{ width: '60%', paddingTop: '30px'}} />
                </Box>
                <Box display="flex" justifyContent="center" mt={3} mb={3} p={1} color="white" bgcolor="gray">
                    <Typography variant="h5">Learn About the Sports!</Typography>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button variant="outlined" component={Link} to="/cricket" size="large" style={{ marginRight: 20}} color="primary"> Cricket </Button>
                    <Button variant="outlined" component={Link} to="/baseball" size="large" style={{ marginRight: 20}} color="secondary"> Baseball </Button>
                </Box>
                <Box mb={3} display="flex" justifyContent="center" mt={3} p={1} color="white" bgcolor="gray">
                    <Typography variant="h6">Start Comparing</Typography>
                </Box>
                <div style={{ width: '100%',   height: 'auto', display: 'flex', flexFlow: 'row wrap', position: 'relative', justifyContent: 'center', paddingBottom: '50px'}}>
                    {this.renderCategoriesItem()}
                </div>
            </div>
        )
    }
}
