import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ text, link }) {
  const styles = {
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '10px 30px', // Adjust the padding as needed
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
  };

  return (
    <Button
      href={link}
      size="large"
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: "15px",
        bgcolor: "black",
        '&:hover': {
          backgroundColor: "darkslategray", // Customize hover color if needed
        },
        
      }}

      style={styles}
    >
      {text}
    </Button>
  );
}
