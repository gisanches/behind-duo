import styled, { css } from "styled-components";
import { Link } from '@mui/material';
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const RayashuLogo = styled.img`
    width: 3rem;
    display: block;
`;

export const BehindDuo = styled.img`
    width: 2.5rem;
    margin: 0rem 1rem 0rem 0rem;
`;

export const myTheme = createTheme({
    palette: {
        primary: {
            main: grey[500],
        },
    },
});

export const StyledLink = styled(Link)`
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
})};

    &:hover {
    transform: scale(1.3);
    }
`;