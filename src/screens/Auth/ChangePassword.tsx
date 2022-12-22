import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  AccountDetails: undefined;
  ChangePassword: undefined;
};
// #region typage
type ProfileScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList, // VSCode Error: Cannot find name 'RootStackParamList'
  'AccountDetails'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
//#endregion

const ChangePassword = ({navigation}: Props) => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <ScrollView>
        <Container m={10}>
          <Center>
            <Heading>Change Password</Heading>
          </Center>
          <Spacer style={[tw(' h-10')]} />
          <Center w="100%">
            <Image
              size={300}
              h={200}
              borderRadius={30}
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
            />
          </Center>
          <Spacer style={[tw(' h-3')]} />
          <VStack width={'100%'}>
            <Text mt={2} fontSize="md" fontWeight="bold" color="gray.600">
              Change Password ?
            </Text>
            <Divider my="2" style={[tw(' bg-black')]} />
          </VStack>
          <Spacer style={[tw(' h-3')]} />
          <VStack
            space={3}
            alignItems="center"
            width={'100%'}
            justifyContent="center">
            <Input
              variant={'outline'}
              mx="3"
              placeholder="Current Password"
              w="100%"
            />
            <Input
              variant={'outline'}
              mx="3"
              placeholder="New Password"
              w="100%"
            />
            <Input
              variant={'outline'}
              mx="3"
              placeholder="Confirm New Password"
              w="100%"
            />
            <Button
              size="sm"
              style={[tw(' text-lg w-64 bg-[#F8BED1] rounded-md font-bold')]}>
              <Text style={[tw(' text-sm font-bold text-white')]}>
                Save Change
              </Text>
            </Button>
          </VStack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
