import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Linking, ScrollView, Button, Alert, WebView }  from 'react-native';

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
            <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('https://genesis.genesisedu.com/dover')}>
              <View>
                <Text style={styles.teacherText}>Genesis</Text>
              </View>
            </TouchableOpacity>
            

          <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('https://www.oncoursesystems.com/')}>
            <View>
              <Text style={styles.teacherText}>OnCourse</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.teacherView}>
          <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('https://www-review-cert-tc1.thinkcentral.com/ePC/start.do')}>
            <View>
              <Text style={styles.teacherText}>Think Central</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('https://www.facebook.com/doverschools/')}>
            <View>
              <Text style={styles.teacherText}>Genesis</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.teacherView}>
          <DoverCal name='School Calendar' />
          <SchoolNews name='School News' />
        </View>

        <TouchableOpacity style={styles.teacherViewLast} onPress={() => Linking.openURL('https://login.myschoolbuilding.com/msb?acctNum=159944480&productID=ITD')}>
          <View>
            <Text style={styles.teacherText}>IT Request</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

class DoverCal extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('http://dover-nj.org/dover/calendar/action~agenda/request_format~json/')}>
          <Text style={styles.teacherText}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

class SchoolNews extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.teacherContainer} onPress={() => Linking.openURL('http://dover-nj.org/news/')}>
          <Text style={styles.teacherText}>{this.props.name}</Text>
      </TouchableOpacity>
    )
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
          <Text style={{margin: 10, fontSize: 25, textAlign: 'left', color: 'white'}}>
            <FontAwesome>{Icons.facebook}</FontAwesome>
          </Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/doverschools')}>
            <Text style={{margin: 10, fontSize: 25, textAlign: 'left', color: 'white'}}>
              <FontAwesome>{Icons.linkedin}</FontAwesome>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/doverschools')}>
            <Text style={{margin: 10, fontSize: 25, textAlign: 'left', color: 'white'}}>
              <FontAwesome>{Icons.twitter}</FontAwesome>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/doverpublicschools/')}>
            <Text style={{margin: 10, fontSize: 25, textAlign: 'left', color: 'white'}}>
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
      <View style={{ flex: 1, /*backgroundColor: 'black'*/ }}>
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
    height: 130,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  teacherView: {
    flex: 1,
    marginTop: 25,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teacherViewLast: {
    flex: 1,
    marginTop: 25,
    marginBottom: 60,
    margin: 5,
    height: 150,
    borderRadius: 10,
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
  teacherContainer: {
    flex: 1,
    margin: 5,
    height: 150,
    borderRadius: 10,
    backgroundColor : '#ff671f',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  teacherScroll: {
    backgroundColor: 'white'
  },
  bottomNav: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ff671f'
  },
});
