import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const WeatherIcon = ({iconPath}) => {

        const [imageUri, setImageUri] = useState('../../assets/weather/error.png');
        
        

        useEffect(() => {
                setImageUri(iconPath)
                console.log("icon path : ", iconPath)
        }, [])

        return (
                <Container>
                        <Image
                                source={{uri: imageUri}}
                                // source={require(imageUri)}
                        />
                </Container>
        )
}

export default WeatherIcon

const Container = styled.View`

`;

const Image = styled.Image`
        width: 100px;
        height: 100px;
        /* align-self: center; */
`;
