import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const HomeScreen = () => {

  const renderHeader = () => (
    <Text>Transaction</Text>
  );

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <View style={homeStyles.headerContent}>
          <Image style={homeStyles.headerProfile} source={require('../assets/profile.png')}/>
          <View headerDetails>
            <Text style={homeStyles.headerText}>Welcome back,</Text>
            <Text style={homeStyles.headerName}>Sakyi Ken</Text>
          </View>
        </View>
        <Pressable style={homeStyles.headerIcon}>
          <Icon name="search" size={25} style={homeStyles.headIcons}/>
        </Pressable>
      </View>

      <Image source={require('../assets/Card.png')} style={homeStyles.headCard}/>
      <View style={homeStyles.header}>
        <View style={homeStyles.headerDetails}>
          <View style={homeStyles.headerIcons}>
            <Image source={require('../assets/send.png')}
              style={homeStyles.headerImages}
            />
          </View>
          <Text style={homeStyles.headerIconsText}>Sent</Text>
        </View>
        <View style={homeStyles.headerDetails}>
          <View style={homeStyles.headerIcons}>
            <Image source={require('../assets/recieve.png')}
              style={homeStyles.headerImages}
            />
          </View>
          <Text style={homeStyles.headerIconsText}>Receive</Text>
        </View>
        <View style={homeStyles.headerDetails}>
          <View style={homeStyles.headerIcons}>
            <Image source={require('../assets/loan.png')}
              style={homeStyles.headerImages}
            />
          </View>
          <Text style={homeStyles.headerIconsText}>Loan</Text>
        </View>
        <View style={homeStyles.headerDetails}>
          <View style={homeStyles.headerIcons}>
            <Image source={require('../assets/topUp.png')}    style={homeStyles.headerImages}
            />
          </View>
          <Text style={homeStyles.headerIconsText}>Topup</Text>
        </View>
      </View>

      <View style={homeStyles.heading}>
        <Text style={homeStyles.headingName}>Transaction</Text>
        <Text style={homeStyles.headingText}>Sell All</Text>
      </View>

      <ScrollView
        style={homeStyles.headingDetails}
        showsVerticalScrollIndicator={false}>
        <View style={homeStyles.heading}>
          <View style={homeStyles.headerContent}>
            <Image source={require('../assets/apple.png')}/>
            <View style={homeStyles.headDetails}>
              <Text style={homeStyles.headerName}>Apple Store</Text>
              <Text style={homeStyles.headerText}>Entertainment</Text>
            </View>
          </View>
          <Text style={homeStyles.headText}>- $5,99</Text>
        </View>
        <View style={homeStyles.heading}>
          <View style={homeStyles.headerContent}>
            <Image source={require('../assets/spotify.png')}/>
            <View style={homeStyles.headDetails}>
              <Text style={homeStyles.headerName}>Spotify</Text>
              <Text style={homeStyles.headerText}>Music</Text>
            </View>
          </View>
          <Text style={homeStyles.headText}>- $12,99</Text>
        </View>
        <View style={homeStyles.heading}>
          <View style={homeStyles.headerContent}>
            <Image source={require('../assets/moneyTransfer.png')}/>
            <View style={homeStyles.headDetails}>
              <Text style={homeStyles.headerName}>Money Transfer</Text>
              <Text style={homeStyles.headerText}>Transaction</Text>
            </View>
          </View>
          <Text style={homeStyles.headingText}>$300</Text>
        </View>
        <View style={homeStyles.heading}>
          <View style={homeStyles.headerContent}>
            <Image source={require('../assets/grocery.png')}/>
            <View style={homeStyles.headDetails}>
              <Text style={homeStyles.headerName}>Grocery</Text>
            </View>
          </View>
          <Text style={homeStyles.headText}>- $88</Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default HomeScreen;

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerProfile: {
    width: 60,
    height: 60,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headingDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  headerDetails: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: 17,
    color: "gray",
    marginBottom: 5,
    fontWeight: '300'
  },
  headerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headDetails: {
    flexDirection: 'column',
    gap: 10,
  },
  headingName: {
    fontSize: 25,
  },
  headingText:{
    fontSize: 19,
    fontWeight:'700',
    color: 'blue',
  },
  headText:{
    fontSize: 19,
    fontWeight:'700',
  },
  headerIcon: {
    backgroundColor: '#CCCCCC',
    borderRadius: 40,
    width: 55,
    height: 55, 
    alignItems:'center',
    marginLeft: 100,
  },
  headIcons: {
    marginTop: 15,
  },
  headerIcons: {
    backgroundColor:"#CCCCCC",
    width: 69,
    height: 69,
    borderRadius: 35,
    alignItems: 'center',
  },
  headerIconsText: {
    fontSize: 17,
    fontWeight: '500',
  },
  headerImages:{
    marginTop: 23,
  },
})