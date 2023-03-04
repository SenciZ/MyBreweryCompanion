import styled from 'styled-components'
import { PrimaryFont } from './styles';

export const H1 = styled.h1`
    ${PrimaryFont}
    font-size: 1.75rem;

    @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-size: 2.25rem;
    }
`;