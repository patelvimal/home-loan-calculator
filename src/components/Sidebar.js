import React from 'react';
import {View, Text, StyleSheet, Dimensions, Linking, Alert} from 'react-native';
import {Overlay, Button} from 'react-native-elements';
import AppTitle from './AppTitle';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Sidebar = ({isOpen,onClose}) => {
  const playStoreLink = 'market://details?id=com.whatsapp';
  const whatsAppLink='https://api.whatsapp.com/send?text=https://home-loan-calculator.netlify.app/"'

  const onShareClick=()=>{
    Linking.openURL(whatsAppLink);
  }

  const onRateUsClick=()=>{
    Linking.openURL(playStoreLink);
  }
  
  return (
    <React.Fragment>
      {isOpen ? (
        <>
          <View
            style={style.overlay}
            onStartShouldSetResponder={onClose}
          />
          <View style={style.root}>
            <View style={style.header}>
              <AppTitle />
              <Text style={style.version}>v1.0.0</Text>
            </View>
            <View style={style.container}>
              <Button
                icon={<Icon name="share" size={15} />}
                title="Share"
                buttonStyle={style.buttonStyle}
                onPress={onShareClick}
              />
              <Button
                icon={<Icon name="share" size={15} />}
                title="Rate Us"
                buttonStyle={style.buttonStyle}
                onPress={onRateUsClick}
              />
               {/* <Button
                icon={<Icon name="menu" size={15} />}
                title="Feedback"
                buttonStyle={style.buttonStyle}
                onPress={onRateUsClick}
              /> */}
            </View>
          </View>
        </>
      ) : null}
    </React.Fragment>
  );
};

const style = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
    width: width * 0.7,
    height: height,
    // paddingTop: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
    // paddingBottom: 0,
    // alignContent: 'flex-end',
    // alignItems: 'stretch',
  },
  header: {
    backgroundColor: 'darkslateblue',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  version: {
    color: '#fff',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    margin: 10,
  },
  buttonContainer : {
    color:'blue'
  }
});
export default Sidebar;
