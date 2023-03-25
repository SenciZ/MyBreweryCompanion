import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { SecondaryFont } from "../../styles/styles";

export const IntroSectionContainer = styled(Section)``;

export const IntroSectionInnerContainer = styled(MaxBoundaryContainer)`
  display: flex;
  justify-items: space-between;
  justify-content: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 63%;

    h4 {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 700;
    }

    h1 {
      ${SecondaryFont}
      font-weight: 600;
      font-size: 70px;
      margin-top: 20px;
    }

    p {
      color: ${({ theme }) => theme.colors.lightGray1};
      line-height: 32px;
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
  background-repeat: no-repeat;
  margin-left: 40px;
`;