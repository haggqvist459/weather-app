import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'

const TextInput = ({ ...props }) => {
        return (
                <CustomInput {...props} />
        )
}

export default TextInput


const CustomInput = styled.TextInput`

        border-bottom-width: ${props => props.borderBottomWidth ?? '0.5px'}; 
        border-bottom-color: ${props => props.color ?? COLORS.PRIMARY_TEXT};    
        color: ${props => props.color ?? COLORS.PRIMARY_TEXT};
        padding: ${props => props.padding ?? 0};
        margin: ${props => props.margin ?? 0};
        height: ${props => props.height ?? '42px'};
        width: ${props => props.width ?? '100%'};


        ${({ title, large, mediumLarge, medium, small, tiny }) => {
                switch (true) {
                        case title:
                                return `font-size: 32px;`;

                        case large:
                                return `font-size: 24px;`;

                        case mediumLarge:
                                return `font-size: 20px`;

                        case medium:
                                return `font-size: 16px;`;

                        case small:
                                return `font-size: 13px;`;

                        case tiny:
                                return `font-size: 11px;`;

                        default:
                                return `font-size: 14px;`;
                }
        }}

        ${({ heavy, bold, semi, light }) => {
                switch (true) {
                        case heavy:
                                return `font-weight: 700;`;

                        case bold:
                                return `font-weight: 600;`;

                        case semi:
                                return `font-weight: 300;`;

                        case light:
                                return `font-weight: 200;`;

                        default:
                                return `font-weight: 400;`;
                }
        }}

        ${({ underline, lineThrough }) => {
                switch (true) {
                        case underline:
                                return `text-decoration: underline;`;

                        case lineThrough:
                                return `text-decoration: line-through;`;

                        default:
                                return `text-decoration: none;`;
                }
        }}

        ${({ uppercase, lowercase, capitalize }) => {
                switch (true) {
                        case uppercase:
                                return `text-transform: uppercase;`;
                        case lowercase:
                                return `text-transform: uppercase;`;
                        case capitalize:
                                return `text-transform: uppercase;`;
                        default:
                                return `text-transform: none`;
                }
        }}


`;


/*
border-bottom-color: #8C8B8B;
border-bottom-width: 0.5px;
height: 48px;
*/