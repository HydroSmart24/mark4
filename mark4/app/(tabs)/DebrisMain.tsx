import { StyleSheet } from 'react-native';
import HalfPremium from '@/components/Guage/HalfPremium';
import { Text, View } from '@/components/Themed';
import HomeFilterHealth from '@/components/Guage/HomeFilterHealth';

export default function DebrisMainScreen() {
  return (
    <View style={styles.container}>
      <HalfPremium size={200} value={100}/>
      <HomeFilterHealth size={80} value={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});