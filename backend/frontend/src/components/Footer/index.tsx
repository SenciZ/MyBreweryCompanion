import React from 'react';
import { AppLogo } from '../Logo';
import { FooterContainer, FooterContainerInner } from './styles';

interface IProps {
    classname?: string;
}

export const Footer: React.FC<IProps> = ({ classname='' }) => {
    return (
        <FooterContainer className={ classname }>
            <FooterContainerInner>
                <AppLogo />
            </FooterContainerInner>
        </FooterContainer>
    );
};