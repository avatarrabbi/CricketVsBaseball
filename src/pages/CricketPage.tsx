import { ArrowBackIos } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import {
  Theme,
  createStyles,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CategoryModel } from "../model";
import InfoPageData from "../data/InfoPageData";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

interface Props {
  classes: any;
}
interface State {
    expanded: string
}

class CricketPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        expanded: 'Intro'
    };
  }

  handleOnChangeAccordion = (panel: string) => {
    this.setState({expanded: panel})
  };

  renderItem() {

    return InfoPageData.map((item) => {
      return (
        <Accordion key={Math.random()} expanded={this.state.expanded === item.title} onChange={() => this.handleOnChangeAccordion(item.title)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <img src={item.cricket_image} alt="" />
            <Typography variant="body1" style={{paddingLeft: "10px"}}>
              {item.cricket_description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Box>
          <Button variant="outlined" component={Link} to="/">
            <ArrowBackIos /> back
          </Button>
        </Box>
        <Box
          pl="20px"
          pr="20px"
          mb={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Welcome to Cricket Page</h1>
          <p style={{ textAlign: "center", paddingTop: "10px" }}>
            Learn What is Cricket and How To Play This Amazing Sports
          </p>
          {/* <img src="./assets/cricket_baseball_homepage_image.gif" style={{ width: '60%', paddingTop: '30px'}} /> */}
        </Box>
        {this.renderItem()}
      </div>

      // <div>

      //

      //         <Box mb={3} display="flex" justifyContent="center" mt={3} p={1} color="white" bgcolor="gray">
      //             <Typography variant="h6">Introduction</Typography>
      //         </Box>

      //         <Box mb={3} display="flex" justifyContent="center" mt={3} p={1} color="white" bgcolor="gray">
      //             <Typography variant="h6">Balling</Typography>
      //         </Box>

      // </div>
    );
  }
}

export default withStyles(styles)(CricketPage);
