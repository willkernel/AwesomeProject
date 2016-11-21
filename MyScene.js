import React, { Component,PropTypes} from 'react';
import {AppRegistry, StyleSheet, View, Text,Navigator,TouchableHighlight} from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.navigatorText}>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward } style={{backgroundColor:'#eeeeee'}}>
            <Text style={styles.navigatorText}>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack } style={{backgroundColor:'#eeeeee'}}>
            <Text style={styles.navigatorText}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  navigatorText:{
    fontSize:12,color:'#ee3333',margin:10
  },
  navigator:{
    alignItems:'center',
    justifyContent:'center',//flex-start, center, flex-end, space-around, and space-between.
    borderRadius:10,
    backgroundColor:'#ffffff',
    opacity:0.5,
    shadowColor:'#ffffff',
  },
});


MyScene.propTypes={
  title:PropTypes.string.isRequired,
  onForward:PropTypes.func.isRequired,
  onBack:PropTypes.func.isRequired,
};

AppRegistry.registerComponent('MyScene', () => AwesomeProject);
// style={{color:'#ee0000'}}
// invalid props.style key'color' supplied to 'TouchableHighlight'
// valid keys:
// [
//   width,height,top,left,right,bottom,minwidth,maxwidth,minheight,maxheight,
//   margin,marginVertical,marginHorizontal,marginTop,marginBottom,marginLeft,marginRight,
//   padding,paddingVertical,paddingHorizontal,paddingTop,paddingBottom,paddingLeft,paddingRight,
//   borderWidth,borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth,
//   position,flexDirection,flexWrap,justifyContent,alignItems,alignSelf,overflow,flex,flexGrow,flexShrink,flexBasis,zIndex,
//   shadowColor,shadowRadius,transform,transformMatrix,decomposedMatrix,scaleX,scaleY,rotation,translateX,translateY,backfaceVisibility,backgroundColor,
//   borderColor,borderTopColor,borderRightColor,borderLeftColor,borderBottomColor,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomLeftRadius,borderBottomRightRadius,borderStyle,opacity,elevation
// ]
