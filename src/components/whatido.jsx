import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ExperienceCard = ({ experience }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };

  return (
    <Box sx={{ maxWidth: 545, boxShadow: 3, transition: 'box-shadow 0.3s' }} 
         onMouseEnter={handleButtonHover} 
         onMouseLeave={handleButtonHover}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
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
            {experience.technologiesUsed.join(", ")} 
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            style={{ backgroundColor: isButtonHovered ? 'green' : 'red' }}
          >
            Live Demo
          </Button>
          <Button 
            size="small" 
            style={{ backgroundColor: isButtonHovered ? 'green' : 'red' }}
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ExperienceCard;
