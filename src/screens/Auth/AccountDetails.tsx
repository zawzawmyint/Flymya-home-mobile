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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  AccountDetails: undefined;
  ChangePassword: undefined;
};
// #region typage
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, // VSCode Error: Cannot find name 'RootStackParamList'
  'AccountDetails'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
//#endregion

const AccountDetails = ({navigation}: Props) => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <ScrollView>
        <Container m={10}>
          <Box>
            <HStack
              space={40}
              justifyContent="center"
              alignItems="center"
              style={[tw('')]}>
              <Heading>Profile</Heading>
              <Button variant="outline" rounded={10} py={0}>
                <Text>Upload Photo</Text>
              </Button>
            </HStack>
          </Box>
          <Center w="100%">
            <Image
              size={150}
              borderRadius={100}
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
            />
            <Text mt={2} fontSize="md" fontWeight="bold" color="gray.600">
              Ei Khine Phyo
            </Text>
            <Text mt={2} fontSize="md" fontWeight="normal" color="gray.600">
              Customer
            </Text>
          </Center>
          <Spacer style={[tw(' h-3')]} />
          <VStack width={'100%'}>
            <Text mt={2} fontSize="md" fontWeight="bold" color="gray.600">
              Presonal Information
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
              placeholder="E-mail Address"
              w="100%"
            />
            <Input
              variant={'outline'}
              mx="3"
              placeholder="Phone Number"
              w="100%"
            />
            <Input variant={'outline'} mx="3" placeholder="Female" w="100%" />
            <Input
              variant={'outline'}
              mx="3"
              placeholder="Date of birth"
              w="100%"
            />
            <Button
              size="sm"
              style={[tw(' text-lg w-64 bg-[#F8BED1] rounded-md font-bold')]}>
              <Text style={[tw(' text-sm font-bold text-white')]}>
                Save Changes
              </Text>
            </Button>
          </VStack>
          <Spacer style={[tw(' h-3')]} />
          <VStack alignItems="center" width={'100%'} justifyContent="center">
            <Button
              size="sm"
              variant={'outline'}
              onPress={() => navigation.navigate('ChangePassword')}
              style={[tw(' text-lg w-64 rounded-3xl bg-gray-50')]}>
              <Text style={[tw(' text-sm font-bold text-black')]}>
                Change Password ?
              </Text>
            </Button>
          </VStack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDetails;
