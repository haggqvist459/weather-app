import React from 'react'
import { StyleSheet, Text } from 'react-native'
import styled from 'styled-components'

const ListHeader = () => {
        return (
                <Background>
                        <Text style={styles.text}>Saved Cities: </Text>
                </Background>
        )
}

export default ListHeader

const Background = styled.View`
        background-color: #7c7a7a;
        min-width: 100%;
`;

const styles = StyleSheet.create({
        background: {
                backgroundColor: '#adadad',
                minWidth: '100%'
        },
        text: {
                fontSize: 24
        }
})
