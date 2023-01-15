import {Image, Text, View} from 'native-base';
import {Button} from 'native-base';

const ButtonPage = () => {
  return (
    <>
      <Button>
        <Text style={{padding: 3, fontSize: 20, color: 'white'}}>Search</Text>
      </Button>
      <View style={{margin: 5}}></View>
      <Image
        source={{
          uri: 'https://v3-be-public.s3.ap-southeast-1.amazonaws.com/uploads/promotions/16/qU2DJoPPMF3Xfz2KMMuQT7N24nu5mY91K0ByIAnk.webp',
        }}
        alt="Alternate Text"
        size={120}
        width={'full'}
      />
    </>
  );
};

export default ButtonPage;
