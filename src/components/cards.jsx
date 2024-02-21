import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experienceData } from './Experience/Experience-data'; 

export default function MediaCard() {
  return (
    <>
    {experienceData.map((experience, index) =>(
        <Card sx={{ maxWidth: 545 }} key={index}>
        <CardMedia
          sx={{ height: 140, }}
          image={experience.imageUrl}
          title={experience.projectName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {experience.projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {experience.description}
          </Typography>
          <Typography variant="body3" color="text.secondary">
          {experience.technologiesUsed.join(', ')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Live Demo</Button>
          <Button size="small">Github</Button>
        </CardActions>
      </Card>
    ))}
    
    </>
  );
}