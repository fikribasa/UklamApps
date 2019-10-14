import React, {Component} from 'react';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Item, Input, Container, Content} from 'native-base';

import Header from '../../Components/Navbars/Header.js';
import Carousel from '../../Components/Carousel/TopDestination';
import Logo from '../../Assets/img/bg.jpg';

class myHome extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Content style={{height: 145}}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{height: 150}}>
              <ImageBackground
                source={Logo}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#fff',
                  }}>
                  Your Next Trip
                </Text>
                <Item
                  rounded
                  style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  <Input
                    style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}
                    placeholderTextColor="#fff"
                    placeholder="Explore Here ..."
                  />
                </Item>
              </ImageBackground>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'grey',
                    paddingTop: 20,
                    paddingHorizontal: 10,
                  }}>
                  Top Destination
                </Text>
              </View>
              <View style={{height: 250, marginBottom: 10}}>
                <Carousel />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'grey',
                    paddingTop: 10,
                    paddingHorizontal: 10,
                  }}>
                  Top Destination
                </Text>
              </View>
              <View style={{height: 250, marginBottom: 10}}>
                <Carousel />
              </View>
            </ScrollView>
          </Content>
        </Container>
      </View>
    );
  }
}

export default myHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 3,
    marginHorizontal: 16,
  },
});