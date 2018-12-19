'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';

//want to hard code lat/long and then calculate users lat/long and do math to figure out what the position should be
//how do we change the background color/make a shape with text on it?
//geolocation.getCurrentPosition((location) => {set state with location})

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR...",
      constLat: 40.662564,
      constLong:  -73.979065,
      userLat: null,
      userLong: null 
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this.success = this.success.bind(this);
    this.failure = this.failure.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -3]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );
  }

  success(data) {
    console.log("success", data)
  }

  failure(data) {
    console.log("failure", data)

  }

  _onInitialized(state, reason) {
    const options = {
      enableHighAccuracy: true, 
      maximumAge        : 0, 
      // distancefilter    : 0
    }

    setInterval(() => {
      navigator.geolocation.getCurrentPosition(this.success, this.failure, options)
    }, 1000);

    // navigator.geolocation.watchPosition(this.success, this.failure, options)

    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
