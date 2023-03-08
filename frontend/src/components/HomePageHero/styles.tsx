import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { FlexCenter, FlexColCenter, PrimaryFont } from "../../styles/styles";

export const HeroSectionContainer = styled(Section)`
    ${PrimaryFont}
    position: relative;
    padding: 30px 0;
    height: 80vh;
    background-color: ${({ theme }) => theme.colors.primary};
    clip-path: polygon(100% 0, 100% 90%, 0 100%, 0 0);
    background-image: url('https://res.cloudinary.com/dhvypalmy/image/upload/v1678229304/BreweryCompanion/beer_mrx9gm.jpg');
    background-positon: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;
`

export const HeroSectionInner = styled(MaxBoundaryContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeroSectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    width: 90%;
    text-align: center;

    .hero-section-title {
        color: #FFF;
        font-size: 3.5rem;
        line-height: 4rem;
    }

    h3 {
      margin: 20px 0 40px;
    }
`;