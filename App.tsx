import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TimerProvider } from './context/TimerContext';
import { TimerDialogScreen } from './screens/TimerDialogScreen';
import { TimerScreen } from './screens/TimerScreen';
import { colors } from './styles/colors';

export default function App() {
  const [timerStarted, setTimerStarted] = useState(false);

  return (
  <TimerProvider>
  <SafeAreaView style={styles.container}> 
    <StatusBar />
    {
      timerStarted
      ? <TimerScreen toggleScreen={() => setTimerStarted(prev => !prev)}/>
      : <TimerDialogScreen toggleScreen={() => setTimerStarted(prev => !prev)}/>
    }
  </SafeAreaView>
  </TimerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
