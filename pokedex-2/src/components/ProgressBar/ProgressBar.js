import React, { useState, useEffect } from "react";
import { Progress } from "@mantine/core";
import { ContainerProgressBar } from "./styled";
import Typography from '@mui/material/Typography';

const ProgressBar = (props) => {
  const [color, setColor] = useState("gray")

  const typeColor = () => {
    switch (props.statText) {
      case 'hp':
        return setColor("green")
      case 'attack':
        return setColor("orange")
      case 'defense':
        return setColor("cyan")
      case 'special-attack':
        return setColor("red")
      case 'special-defense':
        return setColor("indigo")
      case 'speed':
        return setColor("yellow")

      default:
        return setColor("gray")
    }
  }
  useEffect(() => {
    typeColor()
  }, [])

  return (
    <ContainerProgressBar>
      <Typography sx={{ mb: '0.5rem' }}>
        {props.statText && props.statText.charAt(0).toUpperCase() + props.statText.slice(1)}: {props.label}
      </Typography>
      <div>
        <Progress color={color} value={props.value} size="lg" />
      </div>
    </ContainerProgressBar>
  );
};

export default ProgressBar;
