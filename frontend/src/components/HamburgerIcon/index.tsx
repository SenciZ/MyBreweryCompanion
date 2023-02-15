import React from 'react'
import { HamburgerIconContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    classname?: string;
}

export const HamburgerIcon: React.FC<IProps> = ({ classname= '' }) => {
    return (
        <HamburgerIconContainer>
            <FontAwesomeIcon icon={faBars} className='hamburger' inverse />
        </HamburgerIconContainer>
    )
}