import {
  Stack,
  Input,
  Text,
  Center,
  Container,
  Heading,
  Box,
  Pressable,
  Icon,
  MoonIcon,
  QuestionIcon,
  Button,
  HStack,
} from 'native-base';
import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {useTailwind} from 'tailwind-rn';

const SignUp = () => {
  const tw = useTailwind();
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView>
      <Center>
        <Container>
          <Center style={[tw('mt-20 ')]}>
            <Heading style={[tw('mb-2')]}>Create Account</Heading>
            <Stack
              space={4}
              w="75%"
              maxW="300px"
              mx="auto"
              alignItems={'center'}>
              <Input
                variant={'underlined'}
                placeholder="Full Name"
                w="100%"
                pb={0}
                style={[tw(' text-sm')]}
              />
              <Input
                variant={'underlined'}
                placeholder="E-mail Address"
                pb={0}
                style={[tw(' text-sm')]}
              />
              <Input
                style={[tw(' text-sm')]}
                pb={0}
                variant={'underlined'}
                w={{
                  base: '100%',
                  md: '25%',
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <QuestionIcon
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="New Password"
              />
              <Input
                style={[tw(' text-sm')]}
                pb={0}
                variant={'underlined'}
                w={{
                  base: '100%',
                  md: '25%',
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <QuestionIcon
                          sytle={[tw('text-black')]}
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size="5"
                      mt="0.5"
                      color="emerald.500"
                    />
                  </Pressable>
                }
                placeholder="Confirm Password"
              />
              <Button
                size="sm"
                style={[tw(' text-lg w-64 bg-[#F8BED1] rounded-md font-bold')]}>
                <Text style={[tw(' text-sm font-bold text-white')]}>
                  Create Account
                </Text>
              </Button>
              <Text style={[tw(' text-center text-gray-400')]}>-OR-</Text>
              <HStack space={3}>
                <HStack
                  justifyContent="center"
                  style={[tw(' border border-gray-300 rounded-md p-2 ')]}>
                  <Icon as={<MoonIcon />} />
                  <Text style={[tw('text-xs')]}>Sign up with Google</Text>
                </HStack>
                <HStack
                  style={[
                    tw(' border border-gray-300 rounded-md p-2 text-sm'),
                  ]}>
                  <Icon as={<MoonIcon />} />
                  <Text style={[tw('text-xs')]}>Sign up with Facebook</Text>
                </HStack>
              </HStack>
              <HStack style={[tw(' justify-center')]}>
                <Box style={[tw('text-center text-gray-300')]}>
                  <Text>Already have an account ? </Text>
                </Box>
                <Box>
                  <Text style={[tw(' font-bold')]}>Login</Text>
                </Box>
              </HStack>
            </Stack>
          </Center>
        </Container>
      </Center>
    </SafeAreaView>
  );
};

export default SignUp;
