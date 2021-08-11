import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../utils';
import styled from 'styled-components';
import { Text } from '../../base';
import { MaterialIcons } from '@expo/vector-icons';


const ListItem = ({ item, deleteItem }) => {

        // hooks
        const navigation = useNavigation();

        // functions 
        const navigationHandler = (item) => {
                console.log('location ID: ', item);
                navigation.navigate(ROUTES.WEATHER_DETAILS, { item });
        }


        return (
                <Container onPress={() => navigationHandler(item)}>
                        <Name large semiBold flex>{item.name}</Name>
                        <DeleteIcon onPress={() => deleteItem(item.id)}>
                                <MaterialIcons name="remove-circle-outline" size={26} color="black" />
                        </DeleteIcon>
                </Container>
        )
}

export default ListItem

const Name = styled(Text)`
        border-bottom-width: 1px;
`;

const Container = styled.TouchableOpacity`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* padding: 10px; */
        margin: 10px;
        /* margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px; */
`;

const DeleteIcon = styled.TouchableOpacity`
        padding-right: 10px;
`;
