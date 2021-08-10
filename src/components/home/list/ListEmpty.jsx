import React from 'react'
import styled from 'styled-components'
import { Text } from '../../base'
import { COLORS } from '../../../styles/colors'

const ListEmpty = () => {
        return (
                <Container>
                        <Text mediumLarge bold>You have no saved locations!</Text>
                        <Wrapper>
                                <Text medium semiBold center color={COLORS.DARK_GRAY}>Use the search function to add locations to your list</Text>
                        </Wrapper>
                </Container>
        )
}

export default ListEmpty

const Container = styled.View`
        align-items: center;
        margin-top: 30px;
`;

const Wrapper = styled.View`
        width: 60%;
`;

