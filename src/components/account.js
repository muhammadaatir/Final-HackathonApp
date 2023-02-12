import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import userImage from '../../assets/images/user.png';

const UserAccount = ({navigation}) => {
  return (
    <View style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 3, width: '100%', alignItems: 'center', top: 8}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          Settings
        </Text>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Image
            source={userImage}
            style={{
              width: 100,
              height: 100,
            }}></Image>
          <TextInput
            placeholder="Update Full Name"
            style={{
              textAlign: 'center',
              letterSpacing: 0.5,
              borderBottomWidth: 1,
              width: '60%',
              fontSize: 20,
              color: 'grey',
              fontWeight: 'bold',
            }}
          />
          <Text
            style={{
              color: 'blue',
              fontSize: 20,
              fontWeight: 'bold',
              left: '-40%',
              top: '30%',
            }}>
            Orders
          </Text>
        </View>

        <View
          style={{
            flex: 7,
            width: '100%',
            top: 20,
            maxHeight: '60%',
          }}>
          <FlatList
            keyExtractor={key => {
              return key.index;
            }}
            // horizontal
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={{
                      left: '12%',
                      color: 'black',
                      top: 90,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      left: '12%',
                      color: 'black',
                      top: 82,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {item.time}
                  </Text>
                  <Text
                    style={{
                      left: '70%',
                      top: 66,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    {item.phone}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      left: '12%',
                      top: 72,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      letterSpacing: 0.5,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    {item.oneX}
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      left: '12%',
                      top: 65,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      letterSpacing: 0.5,
                      fontWeight: 'bold',
                    }}>
                    {item.threeX}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      letterSpacing: 1,
                      top: '60%',
                      left: '12.5%',
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{
                      color: 'green',
                      top: '43%',
                      left: '70%',
                    }}>
                    PKR {item.price}
                  </Text>
                </View>
              );
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('useraccount')}>
            <View
              style={{
                left: '6%',
                top: 12,
                width: '88%',
                height: 59,
                backgroundColor: 'green',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  letterSpacing: 1.5,
                  textTransform: 'capitalize',
                  top: '17%',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const data = [
  {
    index: 1,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 2,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 3,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 4,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 5,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 6,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 7,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 8,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 9,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 10,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 11,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
];

export default UserAccount;
