import React, { Component } from "react";
import { withRouter } from "../hooks/withRouter";
import { CategoryModel } from "../model";
import compareData from "../data/compareData";
import { ArrowBackIos } from '@material-ui/icons';
import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  Divider,
  Card,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  params?: any;
}
interface State {
  item: any;
  activated: string;
}

class ComparisonPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      item: null,
      activated: "",
    };
  }

  componentDidMount() {
    const getItem = compareData.find((el) => el.id == this.props.params.id);
    this.setState({ item: getItem });
  }

  _onClickCard(item: string) {
    this.setState({ activated: item });
  }

  _renderCricketCard() {
    const item: CategoryModel = this.state.item;
    return (
      <Card
        onClick={() => this._onClickCard("cricket")}
        component={Paper}
        style={{ width:"90%",
        marginRight:"10px",
        }}
      >
          <CardActionArea>
          <Box
          bgcolor={`${this.state.activated === "cricket" ? "green" : "gray"}`}
          p={1}
        >
          <Typography
            variant="h6"
            component="h3"
            style={{ textAlign: "center", color: "white" }}
          >
            Cricket
          </Typography>
          
        </Box>
         <Box p={1} pt="10px">
            <img src={item.cricket_image} width="100%" />
         </Box>
        </CardActionArea>
      </Card>
    );
  }

  _renderBaseballCard() {
    const item: CategoryModel = this.state.item;
    return (
      <Card
        onClick={() => this._onClickCard("baseball")}
        component={Paper}
        style={{ width:"90%",
        marginLeft:"10px",
        }}
      >
        <CardActionArea>
        <Box
          bgcolor={`${this.state.activated === "baseball" ? "green" : "gray"}`}
          p={1}
        >
          <Typography
            variant="h6"
            component="h3"
            style={{ textAlign: "center", color: "white" }}
          >
            Baseball
          </Typography>
        </Box>
        <Box p={1} pt="10px">
            <img src={item.baseball_image} width="100%" />
         </Box>
        </CardActionArea>
        
      </Card>
    );
  }

  render() {
    const item: CategoryModel = this.state.item;

    if (item) {
      return (
        <Box p={3}>
            <Button variant="outlined" component={Link} to="/">
                <ArrowBackIos /> back
            </Button>
          <Box
            mt="60px"
            pb={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" component="h1">
              {item.title}
            </Typography>
          </Box>
          <Divider />
          <Box
            mt="40px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            {this._renderCricketCard()}
            {this._renderBaseballCard()}
          </Box>
          <Box>
            {this.state.activated === "cricket" ? (
              <Box pt="20px">
              <Typography variant="h6" style={{ textTransform: 'capitalize'}}>
            {this.state.activated} description
          </Typography>
          <Typography variant="body1">{item.cricket_description}</Typography>
          </Box>
            ) : null}

            {this.state.activated === "baseball" ? (
              <Box pt="20px">
                  <Typography variant="h6" style={{ textTransform: 'capitalize'}}>
                {this.state.activated} description
              </Typography>
              <Typography variant="body1">{item.baseball_description}</Typography>
              </Box>
            ) : null}
          </Box>
        </Box>
      );
    } else {
      return (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    }
  }
}

export default withRouter(ComparisonPage);
