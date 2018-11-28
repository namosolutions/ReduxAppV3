import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import jsonData from '../../customData.json';
import {connect} from 'react-redux';
import {showListData} from '../../redux/action/listDataAction';

 class FlatListClass extends Component {

displayMoreData(item) {
  if(item.id===this.props.jsonListId){
    console.log(this.props.jsonListId)
    return (
        <Text>{item.description}</Text>
      );
     }
  }

separatorComponent() {
    return (
      <View style={{width: '100%', height: 1.5, backgroundColor: 'black'}}/>
    );
  }
  renderItem(item) {
    return (
        <TouchableHighlight  underlayColor = 'lightgray'
        onPress={()=>this.props.showListData(item.id)}>
        <View style={{paddingLeft: 20,paddingVertical: 20}}>
         <Text style={{marginBottom: 10}}>{item.title}</Text>
         {this.displayMoreData(item)}
         </View>
          </TouchableHighlight>
    );
  }
  render() {
  console.log("DATA drom store--", this.props.jsonListId)
    return (
      <FlatList
       data ={jsonData}
       renderItem={({item}) => this.renderItem(item)}
      ItemSeparatorComponent= {this.separatorComponent}
      keyExtractor={(item,index)=>item.title}
      id={(item) => item.id}
    />
     );
  }
}

const mapStateToprops = state => ({
  jsonListId: state.ListDataReducer.listId,
});
const mapDispatchToprops = {
  showListData,
};

export default connect(mapStateToprops, mapDispatchToprops)(FlatListClass);
