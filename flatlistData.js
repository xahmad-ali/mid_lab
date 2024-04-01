import React from 'react';
import { View, Text, FlatList } from 'react-native'; // Import View from 'react-native'
import { surahNames, surahDetails } from './Quran.js';

const SurahList = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.englishName} - {item.arabicName}</Text>
      <Text>{surahDetails[item.id - 1].revelationType}, {surahDetails[item.id - 1].numberOfAyahs} Ayahs</Text>
    </View>
  );

  return (
    <View style={{marginTop:50,marginLeft:20,marginRight:20}}>
    <FlatList
        style={{borderRadius:20,padding:30,backgroundColor:'plum',borderBlockColor:'red'}}
      data={surahNames}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
    </View>
  );
};

export  {SurahList};
