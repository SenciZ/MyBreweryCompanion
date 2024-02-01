import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { SecondaryFont } from "../../styles/styles";

export const IntroSectionContainer = styled(Section)``;

export const IntroSectionInnerContainer = styled(MaxBoundaryContainer)`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  justify-content: center;

  @media (${({ theme }) => theme.breakpoints.mdMin}) {
    flex-direction: row;
    justify-items: center;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  @media (${({ theme }) => theme.breakpoints.mdMin}) {
    width: 63%;
  }

    h4 {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 700;
    }

    h1 {
      font-size: 36px;
      ${SecondaryFont}
      font-weight: 700;
      margin-top: 20px;

      @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-size: 70px;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.lightGray1};
      line-height: 22px;
      font-size: .75rem;

      @media (${({ theme }) => theme.breakpoints.smMin}) {
        line-height: 32px;
        font-size: 1rem;
      }
    }

    button {
      background: ${({ theme }) => theme.colors.secondary};
      padding: 10px 50px;
      color: #FFF;
      border: none;
      border-radius: 25px;
      margin-top: 30px;
      width: 300px;
    }
`;
export const ImageContainer = styled.div`
  height: 600px;
  width: 40%;
  background-image: url('https://s3.amazonaws.com/logos.brewerycompanion/homepage-breweries.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 40px;
`;
export const MobileImageContainer = styled.div`
  max-height: 200px;
  height: 25vw;
  width: 100%;
  background-image: url('https://s3.amazonaws.com/logos.brewerycompanion/mobile-brewery.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;