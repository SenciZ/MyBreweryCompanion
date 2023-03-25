import styled from 'styled-components'
import { PrimaryFont } from './styles';

export const H1 = styled.h1`
    ${PrimaryFont}
    font-size: 1.75rem;

    @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-weight: 800;
        font-size: 2.25rem;
    }
`;

export const H2 = styled.h2`
    ${PrimaryFont}
    font-size: 1.25rem;

    @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-weight: 800;
        font-size: 1.75rem;
    }
`;

export const H3 = styled.h3`
    ${PrimaryFont}
    font-size: 1rem;

    @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-weight: 800;
        font-size: 1.5rem;
    }
`;

export const H4 = styled.h4`
    ${PrimaryFont}
    font-size: .75rem;

    @media (${({ theme }) => theme.breakpoints.smMin}) {
        font-weight: 800;
        font-size: 1rem;
    }
`;