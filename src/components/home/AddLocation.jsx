import React, { useState } from 'react'
import styled from 'styled-components';
import { Input } from '../base';
import { MaterialIcons } from '@expo/vector-icons';

const AddLocation = ({ handleSearch }) => {

        // states for this component
        const [searchInput, setSearchInput] = useState('');

        // hook calls for this component

        // functions for this component

        return (
                <Container>
                        <MaterialIcons name="search" size={30} color="black" />
                        <Input
                                large
                                marginRight={'30px'}
                                placeholder={'Search...'}
                                value={searchInput}
                                onChangeText={(value) => setSearchInput(value)}
                                // fires when submit button on keyboard is clicked
                                onSubmitEditing={() => { handleSearch(searchInput); setSearchInput(''); }}
                        />
                </Container>
        )
}

export default AddLocation;

const Container = styled.View`
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        width: 90%;
        padding: 10px;
        margin-left: 15px;
`;



