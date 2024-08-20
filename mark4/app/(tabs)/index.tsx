import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Button3D from '@/components/Buttons/Button3D';
import IconButton from '@/components/Buttons/IconButton';
import RequestWaterButton from '@/components/Buttons/RequestWaterButton';
import BasicContainer from '@/components/Containers/BasicContainer';
import HalfPremium from '@/components/Guage/HalfPremium';
import HomeFilterHealth from '@/components/Guage/HomeFilterHealth';

import WaterQuality from '@/components/Buttons/WaterQuality';
import { Link, router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BasicContainer style={styles.containerSpacing} height={400}>
        <HomeFilterHealth size={90} value={30}/>
   
        
          <WaterQuality title='Water Quality'/>
        
      
      </BasicContainer>
      <View style={styles.buttonContent}>
        <RequestWaterButton title='Request Water' style={styles.buttonSpacing}/>
        <IconButton title='Purchase Water'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  containerSpacing: {
    marginBottom: 20, // Adjust this value to control the spacing between BasicContainer and buttons
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginRight: 30 // Adjust this value as needed
  },
});
