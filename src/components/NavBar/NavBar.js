import {
    AppBar,
    Toolbar,
    IconButton,
    createTheme,
    alpha,
    getContrastRatio,
    ThemeProvider,
    Typography,
    Button
} from '@mui/material';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import './NavBar.css';
import Box from "@mui/material/Box";

const violetBase = '#520396';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
    palette: {
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.8),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});
const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="violet">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <NoCrashIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="h6"
                                    component="a"
                                    // href="#app-bar-with-responsive-menu"
                        >
                            WOW CAR RENTAL
                        </Typography>
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </ThemeProvider>

    )
}

export default NavBar;