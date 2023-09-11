import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EditorHeight, viewportWidth} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEditorRef, useGlobalContext} from '../../GlobalContext';
import {Editors, options} from './config';

const styles = StyleSheet.create({
  tabBarConatiner: {
    borderTopWidth: 2,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: viewportWidth,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabItemTitle: {
    color: 'white',
    fontSize: 12,
  },
  OptionsContainer: {
    height: 150,
    justifyContent: 'flex-end',
    justifyContent: 'center',
  },
  optionsFlatlist: {
    width: viewportWidth,
  },
});

const Options = () => {
  const editorRef = useEditorRef();
  const renderItem = useCallback(({item}) => {
    const Editor = Editors[item.id];
    return <Editor />;
  }, []);
  return (
    <View style={styles.OptionsContainer}>
      <FlatList
        ref={editorRef}
        style={styles.optionsFlatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        snapToAlignment="start"
        snapToInterval={viewportWidth}
        data={options}
        renderItem={renderItem}
      />
    </View>
  );
};

const TabBar = () => {
  const [state, dispatch] = useGlobalContext();
  const editorRef = useEditorRef();

  return (
    <View style={styles.tabBarConatiner}>
      {options.map((item, i) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.tabItem,
              {opacity: state.activeTab === item.id ? 1 : 0.3},
            ]}
            onPress={() => {
              editorRef.current.scrollToIndex({index: i, animated: false}),
                dispatch({
                  type: 'TAB',
                  payload: {
                    tab: item.id,
                    title: item.title,
                  },
                });
            }}>
            <MaterialCommunityIcons name={item.icon} color="white" size={25} />
            <Text style={styles.tabItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Editor = () => {
  const [state, dispatch] = useGlobalContext();
  return state.image ? (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
      }}>
      <Options />
      <TabBar />
    </View>
  ) : null;
};

export default Editor;
