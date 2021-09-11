import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/colors';


const HeaderGraphics = () => {

        return (
                <Header>
                        <Sky />
                        <Sun />
                        <CloudRightSmall />
                        <CloudRightBig />
                        <CloudLeftBig />
                        <CloudLeftSmall />
                        <StatusBar
                                barStyle="light-content"
                                translucent={true}
                                backgroundColor={"transparent"}
                        />
                </Header>
        )
}

export default HeaderGraphics

const Header = styled.View`
        position: absolute;
        width: 100%;
        top: -50px;
        z-index: -100;
`;

const Sky = styled.View`
        background-color: ${COLORS.CORNFLOWER_BLUE}; 
        position: absolute;
        right: -100px;
        top: -220px;
        width: 400px;
        height: 400px;
        border-radius: 200px;
`;


const Sun = styled.View`
        background-color: ${COLORS.CARROT_ORANGE};
        position: absolute;
        right: -5px;
        top: 30px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
`;

const CloudRightBig = styled.View`
        background-color: ${COLORS.CHARLESTON_GREEN}; 
        position: absolute;
        top: 5px;
        right: -20px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
`;

const CloudRightSmall = styled.View`
        background-color: ${COLORS.CHARLESTON_GREEN}; 
        position: absolute;
        top: 15px;
        right: 45px;
        width: 80px;
        height: 80px;
        border-radius: 40px;
`;

const CloudLeftBig = styled.View`
        background-color: ${COLORS.CHARLESTON_GREEN}; 
        position: absolute;
        width: 200px;
        height: 200px;
        left: -50px;
        top: -50px;
        border-radius: 100px;
`;

const CloudLeftSmall = styled.View`
        background-color: ${COLORS.CHARLESTON_GREEN}; 
        position: absolute;
        width: 120px;
        height: 120px;
        left: 80px;
        top: 0px;
        border-radius: 100px;
`;

const StatusBar = styled.StatusBar``;



/*
  const [deviceWidth, setDeviceWidth] = useState();
        const [deviceHeight, setDeviceHeight] = useState();

        // circle diameter, top & side position needs to be passed into the components in order to dynamically render their styles
        const [viewWidth, setViewWidth] = useState();


        useLayoutEffect(() => {

                const windowWidth = Dimensions.get('window').width;
                const windowHeight = Dimensions.get('window').height;

                setDeviceHeight(windowHeight);
                setDeviceWidth(windowWidth);

                console.log("device width: ", deviceWidth);
                console.log("device height: ", deviceHeight);

                switch (windowWidth) {
                        case (windowWidth >= 768):
                                setViewWidth()
                                break;

                        default:
                                break;
                }
                return () => {
                        console.log("useLayoutEffect return")
                };
        }, []);


*/