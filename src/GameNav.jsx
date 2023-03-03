import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './styles/game-cards.css';

export default function MediaCard() {
   return (
      <div className='game-options'>
         <div className='game-card'>
            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Competitive
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Compeitive Counting cards is designed to test your abilities against another user.
                  </Typography>
               </CardContent>
               <CardActions>
               <Link to="/game/competitive">
                     <Button size="small">Play</Button>
                  </Link>
               </CardActions>
            </Card>
         </div>
         <div className='game-card'>
            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Practice
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Go at your own pace and go along with the count until you feel comfortable counting.
                  </Typography>
               </CardContent>
               <CardActions>
                  <Link to="/game/practice">
                     <Button size="small">Play</Button>
                  </Link>
               </CardActions>
            </Card>
         </div>
      </div>
   );
}