import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    searchBar: {
        borderColor:'#000',
        borderWidth: 1, 
        borderCurve: 'circular',
        borderRadius: 10,
        margin: 5,
        height: 40,
        marginBottom: 20
    }
  });

export function SearchBar() {
    return (
      <View>
        <TextInput style={styles.searchBar} value='searchBar'/>
      </View>
    );
  }