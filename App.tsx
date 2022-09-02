import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Button text={"1"}/>
      <Button/>
      <Button/>
      </View>
      <View style={styles.row}>
      <Button/>
      <Button/>
      <Button/>
      </View>
      <View style={styles.row}>
      <Button/>
      <Button/>
      <Button/>
      </View>
      <View style={styles.row}>
      <Button/>
      <Button/>
      <Button/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181c1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: "90%",
    justifyContent: 'center'
    
  }
});
