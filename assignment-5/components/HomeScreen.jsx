import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// const transactionData = [
//   {image: <Image source={require('../assets/apple.png')} />  ,name: 'Apple Store', id: '1', category: 'Entertainment', amount: '- $5,99'},
//   {image: <Image source={require('../assets/spotify.png')}/>, name: 'Spotify', id: '2', category: 'Music', amount: '- $12,99'},
//   {image: <Image source={require('../assets/moneyTransfer.png')}/> , name: 'Money Transfer', id: '3', category: 'Transaction', amount: '$300'},
//   {image: <Image source={require('../assets/grocery.png')}/> , name: 'Grocery', id: '4', amount: '- $88'},  
// ]

// const Item = ({name, category, amount, image}) => (
//   <View style={homeStyles.heading}>
//     <View style={homeStyles.headerContent}>
//       {image}
//       <View style={homeStyles.headDetails}>
//         <Text style={homeStyles.headerName}>{name}</Text>
//         <Text style={homeStyles.headerText}>{category}</Text>
//       </View>
//       <Text style={homeStyles.headText}>{amount}</Text>
//     </View>
//   </View>
// )

const HomeScreen = () => {

  // const renderItem = ({item}) => (
  //   <Item name={item.name} category={item.category} amount={item.amount} />
  // )

  // const renderHeader = () => (
  //   <View style={homeStyles.heading}>
  //     <Text style={homeStyles.headingName}>Transaction</Text>
  //     <Text style={homeStyles.headingText}>Sell All</Text>
  //   </View>
  // );

  return (
    <ScrollView style={homeStyles.container}>
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
            <Image source={require('../assets/topUp.png')} style={homeStyles.headerImages}
            />
          </View>
          <Text style={homeStyles.headerIconsText}>Topup</Text>
        </View>
      </View>

      <View style={homeStyles.heading}>
        <Text style={homeStyles.headingName}>Transaction</Text>
        <Text style={homeStyles.headingText}>Sell All</Text>
      </View>

      {/* <FlatList
        style={homeStyles.headingDetails}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListComponentHeader={renderHeader}
        data={transactionData}
        keyExtractor={item => item.id}
      /> */}

       <View
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
      </View>
    </ScrollView>
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
    color: 'blue',
    opacity: 0.7,
  },
  headText:{
    fontSize: 19,
    fontWeight:'700',
  },
  headerIcon: {
    backgroundColor: '#EDEFEE',
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
    backgroundColor:"#EDEFEE",
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