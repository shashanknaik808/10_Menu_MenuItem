import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

  return (
    <div>
      <Button variant='contained' onClick={handleClick}>Open Menu</Button>
      <Button onClick={handleClick}>Open Menu Again</Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )

export default Test;