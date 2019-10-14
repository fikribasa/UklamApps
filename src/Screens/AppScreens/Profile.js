import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {
  Container,
  Thumbnail,
  Spinner,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Toast,
} from 'native-base';
import FooterTab from '../../Components/Navbars/Footer';
// import {withNavigation} from 'react-navigation';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text
          style={{
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 28,
            marginTop: 30,
          }}>
          Profile
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 14,
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
              }}
              source={require('../../Assets/Icon/avatar.jpg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 18}}>Nama User</Text>
            <Text>Email</Text>
            <Text>Lokasi User</Text>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('EditScreen');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, marginVertical: 10}}>Edit Profile</Text>
            <Image source={require('../../Assets/Icon/arrow-right.png')} />
          </TouchableOpacity>
          <View style={{backgroundColor: 'grey', height: 1}}></View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('WishlistScreen');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, marginVertical: 10}}>Wishlist</Text>
            <Image source={require('../../Assets/Icon/arrow-right.png')} />
          </TouchableOpacity>
          <View style={{backgroundColor: 'grey', height: 1}}></View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BalanceScreen');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, marginVertical: 10}}>Balance</Text>
            <Image source={require('../../Assets/Icon/arrow-right.png')} />
          </TouchableOpacity>
          <View style={{backgroundColor: 'grey', height: 1}}></View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PrivacyPolicyScreen');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, marginVertical: 10}}>
              Privacy Policy
            </Text>
            <Image source={require('../../Assets/Icon/arrow-right.png')} />
          </TouchableOpacity>
          <View style={{backgroundColor: 'grey', height: 1}}></View>
          <TouchableOpacity
            style={{
              marginTop: 40,
              backgroundColor: '#fb724a',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Text style={{color: 'white', fontSize: 16}}> Logout</Text>
          </TouchableOpacity>
        </ScrollView>
        <FooterTab />
      </SafeAreaView>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    marginBottom: 20,
    flexDirection: 'column',
  },
  headerbg: {
    width: '100%',
    height: 110,
    resizeMode: 'repeat',
    overflow: 'hidden',
    right: 0,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  profile: {
    resizeMode: 'stretch',
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  elementform: {
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 16,
    marginBottom: 20,
    height: 40,
    paddingLeft: 10,
  },
  smalltext: {
    fontSize: 8,
    marginRight: 4,
    color: '#B3B6B7',
    marginBottom: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#48C9B0',
    borderRadius: 30,
    width: 150,
    height: 40,
    right: 0,
    marginLeft: 'auto',
    marginBottom: 60,
  },
  arrow: {
    width: 30,
    height: 30,
    paddingVertical: 5,
  },
  header: {
    width: '100%',
    height: 50,
    elevation: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});