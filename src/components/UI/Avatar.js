import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {IMG} from '../../constants/Image';
const {width, height} = Dimensions.get('window');
export class Avatar extends PureComponent {
  render() {
    const {userInfo} = this.props;
    return (
      <View style={styles.subContainer}>
        <View style={{flex: 1}}>
          <Image source={IMG.IMAGE_NAME} style={styles.avatarIcon} />
        </View>

        <View style={styles.profileContainer}>
          <Text style={styles.avatarText}>{userInfo.title}</Text>

          <View style={styles.info}>
            <Image source={IMG.IMAGE_PH} style={styles.phoneIcon} />
            <Text style={styles.phoneNoText}>{userInfo.mob}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Avatar;
const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
  },
  avatarText: {
    color: '#828282',
    fontSize: width / 22,
  },
  avatarIcon: {height: width / 4.5, width: width / 4.5, resizeMode: 'contain'},
  phoneIcon: {
    width: width / 35,
    resizeMode: 'contain',
    marginRight: 5,
  },
  phoneNoText: {
    color: '#828282',
    fontSize: width / 35,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    flex: 1.5,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
});
