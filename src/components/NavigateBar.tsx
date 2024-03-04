import React from 'react';
import { styled } from '@mui/material/styles';
import './Components.css';
import { Typography, AppBar, Toolbar, Grid, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { RayashuLogo, BehindDuo, StyledLink, myTheme } from './styles';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['HOME', 'NEWS', 'STORY', 'CHARACTERS', 'COMMUNITY'];

type Anchor = 'top';

function NavigateBar() {

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };


  const DrawerList = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='Drawer'>
      <List>
        {['HOME', 'NEWS', 'STORY', 'CHARACTERS', 'COMMUNITY'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar className='Bar'>
      <Toolbar>
        <Grid>
          <BehindDuo src="/behind-duo.png" alt="Behind Duo" />
        </Grid>
        <Grid xs={10} container className="TitleContainer">
          <Typography className="Title" noWrap>
            Behind Duo
          </Typography>
        </Grid>
        <Grid className='MenuContainer'>
          {navItems.map((item) => (
            <Box key={item} className='Menu'>
              <StyledLink href={`/${item}`} className='MenuItem' theme={myTheme}>{item}</StyledLink>
            </Box>
          ))}
        </Grid>
        <Grid container className='RayashuLogoContainer' >
          <RayashuLogo src="/rayashu.png" />
        </Grid>
        <Box className="Drawer">
          {(['top'] as const).map((anchor) => (
            <React.Fragment key={anchor} >
              <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='Icons' /></Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {DrawerList(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigateBar;