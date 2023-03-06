import React from 'react';
import { H1 } from '../../styles/headings';
import { FooterContainer, FooterContainerInner } from './styles';

interface IProps {
    classname?: string;
}

export const Footer: React.FC<IProps> = ({ classname='' }) => {
    return (
        <FooterContainer className={ classname }>
            <FooterContainerInner>
                
            </FooterContainerInner>
        </FooterContainer>
    );
};