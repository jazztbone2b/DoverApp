import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Linking, ScrollView, Button, Alert }  from 'react-native';

//import fontAwesome icons
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Header extends Component {
  render() {
    return(
      <View style={styles.viewStyle}>
        <DoverTiger />
      </View>
    );
  }
}

class DoverTiger extends Component {
  render(){
    return(
      <TouchableOpacity onPress={() => Linking.openURL('http://dover-nj.org/dover/')}>
        <Image source={{uri: 'https://dover-nj.org/dover/wp-content/uploads/2017/06/Dover-Public-Schools-Wordmark.jpg'}} 
        style={{width: 160, height: 80, marginLeft: 1}}/>
      </TouchableOpacity>
    );
  }
}

class TeacherSites extends Component {
  render(){
    return(
      <View>
        
        <View style={styles.teacherView}>
          <Text style={styles.teacherText}>Genesis</Text>
        </View>

        <View style={styles.teacherView}>
          <Text style={styles.teacherText}>On Course</Text>
        </View>

        <View style={styles.teacherView}>
          <Text style={styles.teacherText}>Think Central</Text>
        </View>

        <View style={styles.teacherViewLast}>
          <Text style={styles.teacherText}>IT Request</Text>
        </View>

      </View>
    );
  }
}

class ScrollSites extends Component {
  render(){
    return(
      <ScrollView style={styles.teacherScroll}>
        <TeacherSites />
      </ScrollView>
    )
  }
}

class BottomNav extends Component{
  render(){
    return(
      <View style={styles.bottomNav}>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/doverschools/')}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
            <FontAwesome>{Icons.facebook}</FontAwesome>
          </Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/doverschools')}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
              <FontAwesome>{Icons.linkedin}</FontAwesome>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/doverschools')}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>v
              <FontAwesome>{Icons.twitter}</FontAwesome>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/doverpublicschools/')}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
              <FontAwesome>{Icons.instagram}</FontAwesome>
            </Text>
          </TouchableOpacity>

      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollSites />
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor : '#ff671f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  teacherView: {
    margin: 25,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ff671f',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  teacherViewLast: {
    margin: 25,
    marginBottom: 50,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ff671f',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  teacherText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    flexWrap: 'wrap'
  },
  teacherScroll: {

  },
  bottomNav: {
    height: '20',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ff671f'
  },
});
