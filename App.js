import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Switch, TextInput, Image } from 'react-native';
import { surahNames, surahDetails } from './Quran.js';
import {SurahList} from './flatlistData.js'

// Import the logo
const logo = require('./assets/mosque_pic2.jpg');

export default function App() {
    const [theme, setTheme] = useState('LIGHT');
    const [is_Dark, Set_DARK] = useState(false);
    const [showNames, setShowNames] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const ChangeTheme = () => {
        Set_DARK(!is_Dark);

        if (!is_Dark) {
            setTheme('DARK');
        } else {
            setTheme('LIGHT');
        }
    };

    const change = () => {
        setShowNames(prevState => !prevState);
    };

   

   

    return (
        <View style={[styles.container, { backgroundColor: theme === "LIGHT" ? "#ffff" : "darkred" }]}>
            <View style={styles.topContainer}>
                <Switch
                    trackColor={{ false: 'lightgray', true: 'lightblue' }}
                    thumbColor={is_Dark ? 'black' : 'white'}
                    value={is_Dark}
                    onValueChange={ChangeTheme}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search Surah"
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>
            <View style={styles.imageContainer}>
                {/* Center the image */}
                <Image source={logo} style={styles.centeredImage} />
            </View>
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleButton, showNames ? styles.activeButton : null]}
                    
                >
                    <Text style={[styles.toggleButtonText, { color: theme === 'DARK' ? 'white' : 'black' }]}>Surah</Text>
                </TouchableOpacity>
               
            </View>

            <SurahList/>
         
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    toggleButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lavender',
        borderRadius: 5,
        marginRight: 10,
    },
    toggleButtonText: {
        fontSize: 16,
    },
    activeButton: {
        backgroundColor: 'lavender',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lavender',
        flexDirection: 'row', // Align logo and text horizontally
        alignItems: 'center', // Align logo and text vertically
    },
    text: {
        color: 'black',
        marginLeft: 10, // Add some space between logo and text
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'lavender',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    logo: {
        width: 20, 
        height: 30, 
    },
    centeredImage: {
        width: 400,
        height: 250,
        borderRadius:20
    },
});