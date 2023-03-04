import styled from "styled-components";
import { SecondaryFont } from "../../styles/styles";

export const LogoContainer = styled.div`
h1 {
    ${SecondaryFont}
    font-weight: 700;
    .logo-brewery {
        color: ${({ theme }) => theme.colors.primary};
    }
    .logo-companion {
        color: #FFF;
    }
}`;