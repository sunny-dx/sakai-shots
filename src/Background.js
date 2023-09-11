import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {viewportWidth} from '../constants';
import {useGlobalContext} from '../GlobalContext';
import Backgrounds from './Backgrounds';

const Background = () => {
  const [state, dispatch] = useGlobalContext();
  const renderItem = (Item, i) => (
    <TouchableOpacity
      key={i}
      style={{
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        marginRight: 10,
      }}
      onPress={() =>
        dispatch({
          type: 'BACKGROUND',
          payload: {background: Item},
        })
      }>
      <Item editor={true} />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        width: viewportWidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <ScrollView
        horizontal
        style={{
          width: viewportWidth,
          maxHeight: 65,
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}>
        {Backgrounds.map(renderItem)}
      </ScrollView>
    </View>
  );
};

export default Background;
