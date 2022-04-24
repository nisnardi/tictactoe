import { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Square = ({ value, onClick }) => {
  return (<TouchableWithoutFeedback onPress={() => onClick()}>
    <View style={styles.square}>
      <Text style={styles.squareText}>{value}</Text>
    </View>
  </TouchableWithoutFeedback>);
};

const Board = () => {
  const status = 'Next Player: X';
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const onClickHandler = (index) => {
    const squares = state.squares.slice();
    squares[index] = state.xIsNext ? 'X' : 'O';

    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
    });
  }

  const { squares } = state;

  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>
          {status}
        </Text>
      </View>
      <View style={styles.boardContainer}>
        <Square value={squares[0]} onClick={() => onClickHandler(0)} />
        <Square value={squares[1]} onClick={() => onClickHandler(1)} />
        <Square value={squares[2]} onClick={() => onClickHandler(2)} />
        <Square value={squares[3]} onClick={() => onClickHandler(3)} />
        <Square value={squares[4]} onClick={() => onClickHandler(4)} />
        <Square value={squares[5]} onClick={() => onClickHandler(5)} />
        <Square value={squares[6]} onClick={() => onClickHandler(6)} />
        <Square value={squares[7]} onClick={() => onClickHandler(7)} />
        <Square value={squares[8]} onClick={() => onClickHandler(8)} />
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