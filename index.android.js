/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 'use strict';
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   View,
//   TouchableHighlight,
//   ListView,
//   ScrollView,
//   Navigator
// } from 'react-native';
// import MyScene from './MyScene';
//

// export default class AwesomeProject extends Component {

//     //  let pic={uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
//     // return (
//     //   // <Navigator
//     //   // initialRoute={{ title: 'My Initial Scene', index: 0 }}
//     //   // renderScene={(route, navigator) =>{
//     //   // return <MyScene
//     //   //     title={route.title}
//     //   //     // Function to call when a new scene should be displayed
//     //   //     onForward={ () => {const nextIndex =route.index+1;
//     //   //     navigator.push({
//     //   //       title:'Scene '+nextIndex,
//     //   //       index:nextIndex,
//     //   //     });
//     //   //     }}
//     //   //     // Function to call to go back to the previous scene
//     //   //     onBack={ () => {
//     //   //        if (route.index > 0) {
//     //   //          navigator.pop();
//     //   //        }
//     //   //      }}
//     //   //   />}
//     //   // }
//     //   // />
//     //   // <MyScene/>
//     //
//     //   <ScrollView style={{backgroundColor: '#cccccc'}}>
//     //   <Image
//     //           source={{uri: movie.posters.thumbnail}}
//     //           style={styles.thumbnail}
//     //         />
//     //         <View style={styles.rightContainer}>
//     //           <Text style={styles.title}>{movie.title}</Text>
//     //           <Text style={styles.year}>{movie.year}</Text>
//     //         </View>
//     //   <ListViewBasics/>
//     //   <View style={styles.container}>
//     //     <Image source={pic} style={styles.image}/>
//     //     <Text style={styles.welcome}>
//     //       Welcome to React Native!
//     //     </Text>
//     //     <Text style={styles.instructions}>
//     //       To get started, edit index.android.js
//     //     </Text>
//     //     <Text style={styles.instructions}>
//     //       Double tap R on your keyboard to reload,{'\n'}
//     //       Shake or press menu button for dev menu
//     //     </Text>
//     //     <View>
//     //       <Greeting name='Luffy' avatar='http://img1.gamedog.cn/2015/06/15/281-150615100H60.jpg'/>
//     //       <Blink text="Zoro"/>
//     //       <Blink text="Nami"/>
//     //     </View>
//     //     <PizzaTranslator/>
//     //   </View>
//     //
//     //   <MyButton/>
//     //
//     //   <Image source={pic} style={styles.image}/>
//     //    <Text style={styles.welcome}>
//     //      Welcome to React Native!
//     //    </Text>
//     //    <Text style={styles.instructions}>
//     //      To get started, edit index.android.js
//     //    </Text>
//     //    <Text style={styles.instructions}>
//     //      Double tap R on your keyboard to reload,{'\n'}
//     //      Shake or press menu button for dev menu
//     //    </Text>
//     //    <View>
//     //      <Greeting name='Luffy' avatar='http://img1.gamedog.cn/2015/06/15/281-150615100H60.jpg'/>
//     //      <Blink text="Zoro"/>
//     //      <Blink text="Nami"/>
//     //    </View>
//     //    <PizzaTranslator/>
//     //   </ScrollView>
//     // );
//   }
// }
//
//
// class MyButton extends Component {
//   _onPressButton() {
//     console.log("You tapped the button!");
//     getUrl();
//   }
//
//   render() {
//     return (
//       <TouchableHighlight onPress={this._onPressButton}>
//         <Text style={{width:200,height:48,}}>Button</Text>
//       </TouchableHighlight>
//     );
//   }
// }
//
//
// class ListViewBasics extends Component {
//   // Initialize the hardcoded data
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text style={{margin:16,color:'#ee3333'}}>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// // There are two types of data that control a component: props and state.
// // props are set by the parent and they are fixed throughout the lifetime of a component.
// // For data that is going to change, we have to use state.
// class Greeting extends Component{
//   render(){
//     let pic={uri:this.props.avatar};
//     return(
//       <View style={styles.greeting}>
//       <Text style={[styles.name],[styles.tel]}>
//       Hello {this.props.name}
//       </Text>
//       <Image source={pic} style={styles.avatar}/>
//       </View>
//     );
//   }
// }
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 2000);
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text style={styles.name}>{display}</Text>
//     );
//   }
// }
//
// class PizzaTranslator extends Component {
//   constructor(props){
//     super(props);
//     this.state={text:''};
//   }
//   render(){
//     return(
//       <View style={styles.greeting}>
//         <TextInput style={{width:200,height:48}}
//         placeholder="PizzaTranslator"
//         onChangeText={(text) => this.setState({text})}/>
//         <Text style={{padding: 6, fontSize: 24}}>
//         {this.state.text.split('').map((word) => word && '🍕').join('?')}
//         </Text>
//       </View>
//     )
//   }
// }
//
//  //arbitrary URL
//  function getUrl(){
//    fetch('https://mywebsite.com/mydata.json').catch((error) => {
//      console.error(error);
//    });
//  }
//
//  //post request
//  function postRequest(){
//    fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })
// }
//
// // Handling the response
// // asynchronous manner
// function getMoviesFromApiAsync() {
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         return responseJson.movies;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
// }
//
//  // the proposed ES2017 async/await syntax
//  async function getMoviesFromApi() {
//    try {
//      let response = await fetch('https://facebook.github.io/react-native/movies.json');
//      let responseJson = await response.json();
//      return responseJson.movies;
//    } catch(error) {
//      console.error(error);
//    }
//  }
//
// //other network lib
// function xmlHttpRequest(){
//   var request = new XMLHttpRequest();
// request.onreadystatechange = (e) => {
//   if (request.readyState !== 4) {
//     return;
//   }
//
//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error');
//   }
// };
//
// request.open('GET', 'https://mywebsite.com/endpoint/');
// request.send();
// }
//
// //websocket support
// function websocketSupport(){
//   var ws = new WebSocket('ws://host.com/path');
//
// ws.onopen = () => {
//   // connection opened
//
//   ws.send('something'); // send a message
// };
//
// ws.onmessage = (e) => {
//   // a message was received
//   console.log(e.data);
// };
//
// ws.onerror = (e) => {
//   // an error occurred
//   console.log(e.message);
// };
//
// ws.onclose = (e) => {
//   // connection closed
//   console.log(e.code, e.reason);
// };
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:'center',//flex-start, center, flex-end, space-around, and space-between.
//     flexDirection: 'column',//[row row-reverse column-reverse] The default is column.
//     alignItems: 'center',//flex-start, center, flex-end, and stretch.
//     backgroundColor: '#ff6666',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     color:'#ff0000',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#006666',
//     marginBottom: 12,
//   },
//   greeting:{
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     backgroundColor: '#ffffff',
//   },
//   image:{width:200,height:120,margin:16,},
//   avatar:{width:46,height:46,margin:6},
//   name:{fontSize:12,color:'#000000',margin:10},
//   tel:{fontSize:10,color:'#0000ff',margin:10},
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
