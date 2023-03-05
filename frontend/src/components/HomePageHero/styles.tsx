import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";

export const HeroSectionContainer = styled(Section)`
    position: relative;
    padding: 30px 0;
    height: 95vh;
    background-color: ${({ theme }) => theme.colors.primary};
    clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 0);
    background-image: url('https://res.cloudinary.com/dhvypalmy/image/upload/v1678038060/BreweryCompanion/beer-background_zfnc5l.png');
    background-positon: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;
`

export const HeroSectionInner = styled(MaxBoundaryContainer)`

`