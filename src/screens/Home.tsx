import {
  Text,
  HStack,
  IconButton,
  Box,
  Radio,
  Stack,
  Image,
  Badge,
} from 'native-base';
import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tw = useTailwind();
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView>
      <HStack space={3} justifyContent="space-between" mx={7} my={5}>
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          alt="Alternate Text"
          size={30}
          width={'1/3'}
        />
        <HStack space={5}>
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-vector/united-kingdom-flag-great-britain-260nw-609480755.jpg',
            }}
            alt="Alternate Text"
            size={30}
            borderRadius={100}
          />
          <FAIcon name="user-circle" size={30} color="#000" />
        </HStack>
      </HStack>
      <HStack space={5} justifyContent="space-around" mx={10} my={5}>
        <Box>
          <IconButton
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: '#7cd3f2'}}
            rounded={'full'}
            icon={<EntypoIcon name="aircraft" size={40} color="#30acd9" />}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Flights
          </Text>
        </Box>

        <Box>
          <IconButton
            rounded={'full'}
            icon={<Ionicon name="business-outline" size={40} color="#000" />}
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: 'gray'}}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Hotels
          </Text>
        </Box>
        <Box>
          <IconButton
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: 'gray'}}
            rounded={'full'}
            icon={<Ionicon name="bus-outline" size={40} color="#000" />}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Buses
          </Text>
        </Box>
      </HStack>
      <HStack
        space={5}
        justifyContent="space-around"
        alignItems={'center'}
        textAlign={'center'}
        mx={10}>
        <Box mt={5}>
          <IconButton
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: 'gray'}}
            rounded={'full'}
            icon={<MCIcon name="car-side" size={40} color="#000" />}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Cars
          </Text>
        </Box>

        <Box>
          <Badge
            colorScheme="warning"
            alignSelf="center"
            variant={'solid'}
            borderRadius={50}>
            New!
          </Badge>
          <IconButton
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: 'gray'}}
            rounded={'full'}
            icon={<MCIcon name="airballoon-outline" size={40} color="#000" />}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Balloons
          </Text>
        </Box>
        <Box mt={5}>
          <IconButton
            shadow={1}
            style={{shadowOpacity: 0.2, shadowColor: 'gray'}}
            rounded={'full'}
            icon={<MCIcon name="brightness-percent" size={40} color="#000" />}
          />
          <Text fontWeight={'bold'} fontSize="md" ml={2}>
            Promos
          </Text>
        </Box>
      </HStack>
      <Box
        borderRadius={10}
        backgroundColor={'gray.200'}
        paddingY={3}
        marginX={3}
        marginY={6}
        alignItems={'center'}
        justifyContent={'center'}>
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size">
          <Stack
            direction="row"
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            space={10}
            w="75%"
            maxW="300px">
            <Text fontSize={16} fontWeight={'bold'}>
              Myanmar Citizen
            </Text>
            <Radio
              fontWeight={'bold'}
              value="1"
              color="#30acd9"
              size="md"
              my={1}>
              <Text fontSize={'16'} fontWeight={'bold'}>
                Yes
              </Text>
            </Radio>
            <Radio
              fontWeight={'bold'}
              fontSize={'16'}
              value="2"
              color="#30acd9"
              size="md"
              my={1}>
              <Text fontWeight={'bold'}>No</Text>
            </Radio>
          </Stack>
        </Radio.Group>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
