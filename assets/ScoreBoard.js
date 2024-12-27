import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ScoreBoard = ({ teamName, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={onIncrement} />
        <Button title="-" onPress={onDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 24,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default ScoreBoard;
