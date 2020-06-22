import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyles} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        placeholder='Search'
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default SearchBar;
