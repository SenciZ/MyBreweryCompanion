import styled from "styled-components";
import { SecondaryFont } from "../../styles/styles";

export const LogoContainer = styled.a`
    display: flex;
    align-items: center;

    .logo-graphic-container {
        width: 30px;
    }
    
    h1 {
        ${SecondaryFont}
        font-weight: 400;
        font-size: 1.35rem;
        align-text: center;

        .logo-brewery {
            color: ${({ theme }) => theme.colors.primary};
        }
        
        .logo-companion {
            color: #FFF;
        }
}`;