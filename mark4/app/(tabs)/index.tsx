import { StyleSheet, View } from 'react-native';
import TankLevel from '@/components/AvailableTank/TankLevel';
import HomeFilterHealth from '@/components/Guage/HomeFilterHealth';
import WaterQuality from '@/components/Buttons/WaterQuality';
import RequestWaterButton from '@/components/Buttons/RequestWaterButton';
import IconButton from '@/components/Buttons/IconButton';
import BasicContainer from '@/components/Containers/BasicContainer';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BasicContainer style={styles.basicContainer} height={250}>
        <View style={styles.rowContainer}>
          <View style={styles.leftColumn}>
            <HomeFilterHealth size={90} value={30} />
          </View>
          <View style={styles.rightColumn}>
            <TankLevel size={170} />
          </View>
        </View>
        <WaterQuality title="Water Quality" style={styles.waterQualityButton} />
      </BasicContainer>
      
      <View style={styles.buttonRow}>
        <RequestWaterButton title="Request Water" />
        <IconButton title="Purchase Water" style={styles.buttonSpacing} />
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
    marginBottom: 20,
  },
  basicContainer: {
    width: '85%', 
    marginBottom: 20, 
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 45, // Adds padding to the sides
    marginTop: 20, // Adjusts the spacing between the BasicContainer and buttons
  },
  buttonSpacing: {
    marginLeft: 25, // Space between the buttons
  },
  waterQualityButton: {
    width: '90%',
  },
});
