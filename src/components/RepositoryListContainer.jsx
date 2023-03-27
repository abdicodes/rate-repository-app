import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import { Picker } from '@react-native-picker/picker';
<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useMemo } from 'react';
import { SearchBarMomoized } from './SearchBar';
import { useDebouncedCallback } from 'use-debounce';
>>>>>>> acbff7c (refactor)

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  selectedValue: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  arrowIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#666',
  },
  picker: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

<<<<<<< HEAD
export const RepositoryListContainer = ({ repositories, onSubmit }) => {
=======
export const RepositoryListContainer = ({
  repositories,
  sortRepositories,
  searchRepositories,
  value,
}) => {
>>>>>>> acbff7c (refactor)
  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  const repositoryNodes = repositories.edges.map((edge) => edge.node);
  const valueChangeHandler = (itemValue) => {
<<<<<<< HEAD
    onSubmit(itemValue);
  };

  const SortingProps = () => {
    const [showPicker, setShowPicker] = useState(false);

=======
    sortRepositories(itemValue);
  };

  const renderHeader = () => {
    const [showPicker, setShowPicker] = useState(false);

    const [searchQuery] = useState('');

    const debounced = useDebouncedCallback(
      // function
      (value) => {
        searchRepositories(value);
      },
      // delay in ms
      1000
    );

    const memoizedOnChangeText = useMemo(() => debounced, [debounced]);

>>>>>>> acbff7c (refactor)
    const handlePickerButtonPress = () => {
      setShowPicker(!showPicker);
    };

    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePickerButtonPress}
        >
          <Text style={styles.buttonText}>Sort by</Text>
          <View style={styles.arrowIcon} />
        </TouchableOpacity>

        {showPicker && (
          <Picker style={styles.picker} onValueChange={valueChangeHandler}>
            <Picker.Item label="latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highRate" />
            <Picker.Item label="Lowest rated repositories" value="lowRate" />
          </Picker>
        )}
      </View>
=======
      <>
        <SearchBarMomoized
          initialValue={value}
          onChangeText={memoizedOnChangeText}
          value={searchQuery}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePickerButtonPress}
          >
            <Text style={styles.buttonText}>Sort by</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>

          {showPicker && (
            <Picker style={styles.picker} onValueChange={valueChangeHandler}>
              <Picker.Item label="latest repositories" value="latest" />
              <Picker.Item
                label="Highest rated repositories"
                value="highRate"
              />
              <Picker.Item label="Lowest rated repositories" value="lowRate" />
            </Picker>
          )}
        </View>
      </>
>>>>>>> acbff7c (refactor)
    );
  };
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
<<<<<<< HEAD
      ListHeaderComponent={SortingProps}
=======
      ListHeaderComponent={renderHeader}
>>>>>>> acbff7c (refactor)
    />
  );
};
export default RepositoryListContainer;
