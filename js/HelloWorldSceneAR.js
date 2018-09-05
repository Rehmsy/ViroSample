'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
          position={[0, -.25, -.5]} color="#ffffff" castsShadow={true} />
        <ViroText extrusionDepth={8} materials={["frontMaterial", "backMaterial", "sideMaterial"]} text={this.state.text} scale={[.5, .5, .5]} position={[0, .5, -1]} style={styles.helloWorldTextStyle} />
        <ViroBox position={[0, -.3, -1]} scale={[.3, .3, .3]} materials={["img1"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-1, .5, -1.5]} scale={[.3, .3, .3]} materials={["img2"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-2, -.3, -2]} scale={[.3, .3, .3]} materials={["img3"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-.5, 0, -1]} scale={[.3, .3, .3]} materials={["img4"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-.25, -1, -.75]} scale={[.3, .3, .3]} materials={["img5"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-1.25, 1, -1]} scale={[.3, .3, .3]} materials={["img6"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[2, 0, -1]} scale={[.3, .3, .3]} materials={["img7"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[1.75, .2, -1]} scale={[.3, .3, .3]} materials={["img8"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[0, .4, -1.5]} scale={[.3, .3, .3]} materials={["img9"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[-2, -.3, 1]} scale={[.3, .3, .3]} materials={["img10"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[1, .2, -2.5]} scale={[.3, .3, .3]} materials={["img11"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[1.5, .8, -1]} scale={[.3, .3, .3]} materials={["img12"]} animation={{name: "rotate", run: true, loop: true}}/>
        <ViroBox position={[.75, .5, -.5]} scale={[.3, .3, .3]} materials={["img13"]} animation={{name: "rotate", run: true, loop: true}}/>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Image Gallery"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 22,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  img1: {
    diffuseTexture: require('./res/img1.jpg'),
  },
  img2: {
    diffuseTexture: require('./res/img2.jpg'),
  },
  img3: {
    diffuseTexture: require('./res/img3.jpg'),
  },
  img4: {
    diffuseTexture: require('./res/img4.jpg'),
  },
  img5: {
    diffuseTexture: require('./res/img5.jpg'),
  },
  img6: {
    diffuseTexture: require('./res/img6.jpg'),
  },
  img7: {
    diffuseTexture: require('./res/img7.jpg'),
  },
  img8: {
    diffuseTexture: require('./res/img8.jpg'),
  },
  img9: {
    diffuseTexture: require('./res/img9.jpg'),
  },
  img10: {
    diffuseTexture: require('./res/img10.jpg'),
  },
  img11: {
    diffuseTexture: require('./res/img11.jpg'),
  },
  img12: {
    diffuseTexture: require('./res/img12.jpg'),
  },
  img13: {
    diffuseTexture: require('./res/img13.jpg'),
  },
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FF0000',
  },
  sideMaterial: {
    diffuseColor: '#0e1111',
  },
});



ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 2000, // 2 seconds
  },
});

module.exports = HelloWorldSceneAR;