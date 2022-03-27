import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Square = ({ value }) => {
  return (<View style={styles.square}>
    <Text style={styles.squareText}>{value}</Text>
  </View>);
};

const Board = () => {
  const status = 'Next Player: X';
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>
          {status}
        </Text>
      </View>
      <View style={styles.boardContainer}>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </View>
    </View>
  );
};

const Game = () => {
  return (
    <SafeAreaView style={styles.game}>
      <View style={styles.gameBoard}>
        <Board />
      </View>
      <View style={styles.gameInfo} >
        <View>{/* status */}</View>
        <View>{/* TODO */}</View>
      </View>
    </SafeAreaView >);
};

export default function App() {
  const [fontsLoaded] = useFonts({
    CenturyGothic: require('./assets/fonts/CenturyGothic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Game />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    fontFamily: "CenturyGothic",
    textAlign: 'center'
  },
  titleTextContainer: {
    marginBottom: 10
  },
  boardContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    borderColor: 'black',
    borderWidth: 1,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontSize: 100,
    fontFamily: "CenturyGothic",
  },
  game: {
    flex: 1,
    backgroundColor: 'red',
  },
  gameBoard: {
    flex: 1,
    backgroundColor: 'blue',
  },
  gameInfo: {}
});
