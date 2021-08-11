import React, { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { StyleSheet, View, StatusBar, FlatList, Alert } from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../utils/clientSecrets/openWeather';
import { CITY_LIST_STORAGE } from '../utils/constants';
import HeaderButton from '../components/header/HeaderButton';
import { AddLocation } from '../components/home';
import { Empty, Header, Item } from '../components/home/list';


const Home = ({ navigation }) => {

        // ref
        const shouldRender = useRef(false);

        // states 
        const [cityListSource, setCityListSource] = useState([]);

        //temporary states


        // hook calls 
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation} />),
                })
        }, [navigation])

        useEffect(() => {
                loadFromStorage();
                console.log("@useEffect start - cityListSource: ", cityListSource);
        }, [])

        useEffect(() => {
                console.log("shouldRender.current: ", shouldRender.current);
                if (!shouldRender.current) {
                        shouldRender.current = true;
                        return;
                }
                console.log("useEffect [cityListSource] - about to save to storage");
                saveToStorage();
        }, [cityListSource]);



        //functions
        const saveToStorage = async () => {
                try {
                        await AsyncStorage.setItem(CITY_LIST_STORAGE, JSON.stringify(cityListSource))
                                .then(() => {
                                        // log a success message after storing the todo list
                                        console.log('data stored successfully');
                                        console.log("stored data: ", JSON.stringify(cityListSource));
                                })
                } catch (error) {
                        console.log(error);
                }
        }

        const loadFromStorage = async () => {
                try {
                        await AsyncStorage.getItem(CITY_LIST_STORAGE)
                                .then((stringifiedCityList) => {
                                        // if todoList is not null, there's a string to parse
                                        if (stringifiedCityList) {
                                                console.log("stringifiedCityList: ", stringifiedCityList)
                                                const parsedCityList = JSON.parse(stringifiedCityList)
                                                setCityListSource(parsedCityList);
                                        }
                                });
                } catch (error) {
                        console.log("error @loadFromStorage() ", error);
                }
        }

        const handleSearch = (input) => {
                console.log("handleSearch: ", input);
                let searchResult;
                // Verify somehow that the city exists in the API list before adding it to the flatlist. 
                // Maybe make an API call and verify the response?
                const URL = `${API.BASE_URL}q=${input},au${API.UNIT}${API.KEY}`;
                axios.get(URL)
                        .then((response) => {
                                // console.log("@handleSearch() - response: ", response.data);
                                searchResult = { 
                                        name: response.data.name, 
                                        id: response.data.id.toString(), 
                                        coord: response.data.coord 
                                };
                                console.log("searchResult: ", searchResult);
                                // here, add the current location to the array, next element id 
                                setCityListSource([...cityListSource, searchResult]);

                        })
                        .catch((error) => {
                                console.log("@handleSearch axios.get().catch(): ", error);
                                Alert.alert(
                                        "Results not found",
                                        error.message,
                                        [{ text: "OK" }],
                                );
                        }).finally(() => {
                                console.log("@handleSearch axios.get().finally() - searchResult: ", searchResult);
                        });
        }

        const deleteItem = (id) => {
                const updatedList = cityListSource.filter(item => item.id != id);
                setCityListSource(updatedList);
        }

        const renderItem = ({ item }) => {
                // console.log("item in renderList: ", item);
                return (
                        <Item item={item} deleteItem={deleteItem} />
                )
        }

        return (
                <View style={styles.centerAlign}>
                        <StatusBar barStyle="dark-content" />
                        <AddLocation handleSearch={handleSearch} />
                        {/* Search result */}
                        <FlatList
                                style={styles.list}
                                data={cityListSource}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                ListEmptyComponent={Empty}
                                ListHeaderComponent={Header}
                        />
                </View>
        )
}

export default Home

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 10,
        },
        list: {
                minWidth: '100%'
        },
})


/*



 */
