import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { grey } from './node_modules/ansi-colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotpasswordPressed: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redScreen}>
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={styles.whiteScreen}>
          <View style={styles.loginForm}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({ text })}
              keyboardType="email-address"
              placeholder="Email"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({ text })}
              secureTextEntry
              placeholder="Password"
            />
            <View style={styles.forgotPassword}>
              <TouchableHighlight
                style={styles.forgotPasswordLink}
                onPressIn={() => this.setState({ forgotpasswordPressed: true })}
                onPressOut={() => this.setState({ forgotpasswordPressed: false })}
                underlayColor="transparent"
              >
                <Text
                  style={{ fontSize: 12, fontWeight: (this.state.forgotpasswordPressed == false ? "normal" : "bold") }}
                >Forgot password?</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              style={styles.connect}>
              <Text
                style={styles.connectText}
              >Connect</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.facebookForm}>
            <TouchableHighlight
              style={styles.facebook}>
              <Text
                style={styles.facebookText}
              >Connect with Facebook</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.signupForm}>
            <TouchableHighlight
              style={styles.signupLink}
              onPressIn={() => this.setState({ singupPressed: true })}
              onPressOut={() => this.setState({ singupPressed: false })}
              underlayColor="transparent"
            >
              <Text
                style={{ fontSize: 12, fontWeight: (this.state.singupPressed == false ? "normal" : "bold") }}
              >Don't have an account? Sign up here!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  redScreen: {
    flex: 1,
    backgroundColor: '#D43939',
    alignItems: 'center',
    width: '100%'
  },
  whiteScreen: {
    flex: 2.7,
    backgroundColor: '#FFF',
    width: '100%'
  },
  loginForm: {
    flex: 1,
    //backgroundColor: '#F7F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  facebookForm: {
    flex: 0.8,
    //backgroundColor: '#FF8',
    alignItems: 'center',
    width: '100%'
  },
  inputStyle: {
    height: 36,
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  forgotPassword: {
    height: 36,
    width: "90%",
    borderRadius: 5,
    alignItems: 'flex-end'
  },
  forgotPasswordLink: {
    padding: 5
  },
  connect: {
    height: 36,
    backgroundColor: '#D43939',
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  connectText: {
    height: 36,
    lineHeight: 36,
    color: '#FFF'
  },
  signupForm: {
    flex: 0.2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: '100%'
  },
  signupText: {
    height: 36,
    backgroundColor: '#D43939',
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebook: {
    height: 36,
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    width: "90%",
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebookText: {
    height: 36,
    lineHeight: 36,
    color: '#FFF'
  },
});
