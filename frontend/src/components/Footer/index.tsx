import React from 'react';
import { FooterContainer } from './styles';

interface IProps {
    classname?: string;
}

export const Footer: React.FC<IProps> = ({ classname='' }) => {
    return (
        <FooterContainer className={ classname }>
            
        </FooterContainer>
    );
};