import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const settingsData = [
  {name: 'Language', id: '1'},
  {name: "My Profile", id: '2'},
  {name: "Contact Us", id: '3'},
  {name: "Change Password", id: '4'},
  {name: "Privacy Policy", id:'5', addSeparator: true},
];

 const Item = ({name, isDarkTheme})=> (
    <View style={settings.item}>
       <Text style={[settings.head, {color: isDarkTheme ? 'white': 'black'}  ]}>{name}</Text>
     <Icon name="chevron-right" size={50} color="gray"/> 
     </View>
   );

export default function SettingsPage() {
  // const renderItem = ({item}) => (
  //   <View style={settings.item}>
  //     <Text style={settings.head}>{item.name}</Text>
  //     <Icon name="chevron-right" size={50} color="gray"/> 
  //     {item.addSeparator && <View style={settings.separator}/> }
  //   </View>
   //);

   const renderItem = ({item}) => (
     <>
     <Item name={item.name} isDarkTheme={isDarkTheme} />
     {item.addSeparator && <View style={settings.separator}/> }
     </>
   );

  //const [isEnabled, setIsEnabled] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // // const toggleTheme = () => {
  // //   setIsDarkTheme(!isDarkTheme);
  // // }

  const toggleTheme = () => setIsDarkTheme(previousState => !previousState);

  const renderHeader = () => (
    <Text 
      style={settings.headerText}>Settings
   </Text>
  )

  const renderFooter = () => (
    <View style={settings.themeToggle}>
        <Text style={[settings.theme, {color: isDarkTheme ? 'white' : 'black'}]}>Theme</Text>
        <Switch style={{transform:[{scale:1.5}]}}
          trackColor={{false: "#767577", true: "lightgreen"}}
          thumbColor={isDarkTheme ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
  )

  const renderSeparator = () => (
    <View style={settings.separator}/>
  )


  return (
    <View style={[settings.container, {backgroundColor: isDarkTheme ? 'black': 'white'}]}>
      <FlatList
        showsVerticalScrollIndicator={false} 
        data={settingsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}>
      </FlatList>
      {/* <TouchableOpacity onPress={toggleTheme}>
          <Icon 
            name={isDarkTheme ? "weather-night" : "white-balance-sunny"} 
            size={24} 
            color={isDarkTheme ? "#FFF" : "#000"} 
          />
        </TouchableOpacity> */}
    </View>
  );
}

const settings = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  headerText: {
    justifyContent:"center",
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  head: {
    fontSize: 25,
    marginBottom: 5,
  },
  item: {
    marginTop: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    height: 1,
    width: 350,
    backgroundColor: '#CCCCCC',
  },
  themeToggle: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  theme: {
    fontSize: 28,
  },
  sign:{
    fontSize: 30,
    color: 'gray'
  }
})
