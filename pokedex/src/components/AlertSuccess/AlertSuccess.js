import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';

const AlertSuccess = (props) => {
    //  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ width: '100%' }}>
    <Collapse in={props.alertValue}>
      <Alert 
      variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={props.onClickAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        Pokemon adicionado com sucesso na Pokédex!
      </Alert>
    </Collapse>
  </Box>
  );
}

export default AlertSuccess
