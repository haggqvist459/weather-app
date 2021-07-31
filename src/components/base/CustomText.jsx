import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors'

const Text = ({ ...props }) => {
        return (
                <CustomText {...props}>{props.children}</CustomText>
        )
}

export default Text

const CustomText = styled.Text`
        color: ${props => props.color ?? COLORS.PRIMARY_TEXT};
        margin: ${props => props.margin ?? 0};
        padding: ${props => props.padding ?? 0};
        text-decoration-color: ${props => props.color ?? COLORS.CARROT_ORANGE};

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

        ${({ heavy, bold, semi, light, thin }) => {
                switch (true) {
                        case heavy:
                                return `font-weight: 900;`;

                        case bold:
                                return `font-weight: 700;`;

                        case semi: 
                                return `font-weight: 500;`;

                        case light:
                                return `font-weight: 300;`;

                        case thin:
                                return `font-weight: 100;`;

                        default:
                                return `font-weight: 400;`;
                }
        }}

        ${({ center, right, justify }) => {
                switch (true) {
                        case center:
                                return `text-align: center;`;

                        case right:
                                return `text-align: right;`;
                        
                        case justify: 
                                return `text-align: justify`;

                        default:
                                return `text-align: left;`;
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

