import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link as RouteLink} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      margin:'10px', 
      flex: "0 1 calc(20% - 8px)"
    },
    media: {
      height: 140,
    },
  });

interface Props {
    title: string
    description?:string
    image?: string
    href?: string
}

const defuatImage = "https://i.pinimg.com/originals/b7/10/8d/b7108d38ed25d974807f835c6e8d68b4.gif"

export const CategoryCard = ({title, description, image, href}: Props) => {
    const classes = useStyles();
    return (
    <Card className={classes.root} >
      <CardActionArea component={RouteLink} to={`${href}`}>
        <CardMedia
          className={classes.media}
          image={image ? image : defuatImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
