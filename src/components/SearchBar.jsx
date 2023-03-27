import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ onChangeText, initialValue }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleChange = (value) => {
    setSearchQuery(value);
    onChangeText(value);
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={handleChange}
        value={searchQuery}
      />
    </>
  );
};

export const SearchBarMomoized = React.memo(
  SearchBar,
  (prevProps, nextProps) => {
    return (
      prevProps.value === nextProps.value &&
      prevProps.onChangeText === nextProps.onChangeText
    );
  }
);
