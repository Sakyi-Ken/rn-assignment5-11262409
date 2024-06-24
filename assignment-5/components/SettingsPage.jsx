import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const settingsData = [
  {key: 'Language'},
  {key: "My Profile"},
  {key: "Contact Us"},
  {key: "Change Password"},
  {key: "Privacy Policy", addSeparator: true},
];

export default function SettingsPage() {
  const renderItem = ({item}) => (
    <View style={settings.item}>
      <Text style={settings.head}>{item.key}</Text>
      {item.addSeparator && <View style={settings.separator}/> }
    </View>
  );

  const renderHeader = () => (
    <View style={settings.header}>
      <Text 
        style={settings.headerText}>Settings
      </Text>
    </View>
  )

  const renderSeparator = () => (
    <View style={settings.separator}/>
  )
  return (
    <FlatList 
    style={settings.container}
    data={settingsData}
    renderItem={renderItem}
    ItemSeparatorComponent={renderSeparator}
    ListHeaderComponent={renderHeader}>

      {/* <Text style={settings.header}>Settings</Text>
      <View style={settings.head}>
        <Text >Language</Text>
        <Text>My Profile</Text>
        <Text>Contact Us</Text>
        <Text>Change Password</Text>
        <Text>Privacy Policy</Text>

      </View> */}
    </FlatList>
  );
}

const settings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 40,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  header:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontSize: 25,
    marginBottom: 15,
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },
  item: {
    marginTop: 25,
    padding:10,
    alignSelf: 'flex-start'

  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginLeft: 0,
  },
})
