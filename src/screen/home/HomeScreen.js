import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Constants} from '../../Constants';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ListItem from './listItem/ListItem';
const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'sadasda',
      price: '20000',
    },
    {
      id: '2',
      name: 'sadasda',
      price: '1000',
    },  {
      id: '3',
      name: 'phuoc',
      price: '1000',
    },
   

  ]);

  const [activeTab, setActiveTab] = useState("Tab 1");
  const handleTabPress = (activeTab) => {
    setActiveTab(activeTab);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewGroupHeader}>
          <View style={styles.viewGroupLeft}>
            <Image source={require('../../assett/logo.png')} />
          </View>
          <View style={styles.viewGroupRight}>
            <View style={styles.viewVectorIcon}>
              <IconFontAwesome
                name="bell-o"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
            </View>
            <View style={styles.viewVectorIcon}>
              <IconSimpleLineIcons
                name="handbag"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
            </View>
            <View style={styles.viewVectorIcon}>
              <IconSimpleLineIcons
                name="heart"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
            </View>
            <View style={styles.viewVectorIcon}>
              <IconFontAwesome
                name="navicon"
                size={20}
                color={Constants.COLOR.FILLBTN}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
          <TouchableOpacity style={[styles.tabcontainer, activeTab === "Tab 1" ? styles.activeTab : null,]}
                onPress={() => handleTabPress("Tab 1")}>
                <View >
                  <Text style={[styles.texttab, activeTab === "Tab 1" ? styles.activeText : null]}>asd</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabcontainer, activeTab === "Tab 2" ? styles.activeTab : null,]}
                onPress={() => handleTabPress("Tab 2")}>
                <View >
                  <Text style={[styles.texttab, activeTab === "Tab 2" ? styles.activeText : null]}>sadas</Text>
                </View>
          </TouchableOpacity>
          {activeTab === "Tab 1" ? (
          <View>
           <FlatList
            data={data}
            renderItem={({item}) => <ListItem item={item}/>}
           />
          </View>
        ) : activeTab === "Tab 2" ? (
          <View style={styles.viewtabcontent}>
            <Text >Content for Tab 2</Text>
          </View>
        ) : activeTab === "Tab 3" ? (
          <View >
            <Text style={StyleHomShoes.tabContent}>Content for Tab 3</Text>
          </View>
        ): null}
      </View>
    </View>
  );
};

export default HomeScreen;
