import React from 'react'
import styled from 'styled-components'
import { Text } from '../components/base'

const TextTest = () => {
        return (
                <Main>
                        <Text title black margin={'5px'}> Source Sans Pro</Text>
                        <Text mediumLarge extraLight margin={'5px'}>extra-light 200</Text>
                        <Text mediumLarge extraLightItalic margin={'5px'}>extra-light 200 italic</Text>
                        <Text mediumLarge light margin={'5px'}>light 300</Text>
                        <Text mediumLarge lightItalic margin={'5px'}>light 300 italic</Text>
                        <Text mediumLarge margin={'5px'}>regular 400</Text>
                        <Text mediumLarge italic margin={'5px'}>regular 400 italic</Text>
                        <Text mediumLarge semiBold margin={'5px'}>semi-bold 600</Text>
                        <Text mediumLarge semiBoldItalic margin={'5px'}>semi-bold 600 italic</Text>
                        <Text mediumLarge bold margin={'5px'}>bold 700</Text>
                        <Text mediumLarge boldItalic margin={'5px'}>bold 700 italic</Text>
                        <Text mediumLarge black margin={'5px'}>black 900</Text>
                        <Text mediumLarge blackItalic margin={'5px'}>black 900 italic</Text>
                </Main>
        )
}

export default TextTest

const Main = styled.View`
        flex: 1;
        width: 100%;
        align-items: center;
        margin-top: 30px;
`;



