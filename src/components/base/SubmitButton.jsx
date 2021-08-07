import React from 'react'
import styled from 'styled-components'
import Text from './CustomText'
import { COLORS } from '../../styles/colors'

const SubmitButton = ( props ) => {

        return (
                <Button {...props} onPress={props.handler} disabled={props.loading}>
                        {props.loading ?
                                <Loading /> :
                                <Text bold medium center uppercase color={COLORS.WHITE_COFFEE}>{props.text}</Text>}
                </Button>
        )
}

export default SubmitButton


const Button = styled.TouchableOpacity`
         margin: ${props => props.margin ?? 0};
        height: 48px;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.PRIMARY_BUTTON};
        border-radius: 10px;
`;


const Loading = styled.ActivityIndicator.attrs((props) => ({
        color: COLORS.WHITE_COFFEE,
        size: 'small',
}))``;
