import React from 'react';
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