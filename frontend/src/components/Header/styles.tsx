import styled from "styled-components";
import * as Theme from "../../styles/theme";
import * as Style from '../../styles/styles';
import * as Fonts from '../../styles/fonts'

const { Breakpoints, Colors } = Theme


export const NavBarContainer = styled.div`
    ${Style.BasicContainer2}
    ${Fonts.PrimaryFont}
    height: 50px;
    background: ${Colors.blue};

    @media (${Breakpoints.smMin}) {
        background: black;
    }
`;