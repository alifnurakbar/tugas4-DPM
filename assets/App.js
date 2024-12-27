import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

export default function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const handleReset = () => {
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <ScoreBoard 
        teamName="Tim A" 
        score={teamA} 
        onIncrement={() => setTeamA(teamA + 1)} 
        onDecrement={() => setTeamA(Math.max(0, teamA - 1))} 
      />
      <ScoreBoard 
        teamName="Tim B" 
        score={teamB} 
        onIncrement={() => setTeamB(teamB + 1)} 
        onDecrement={() => setTeamB(Math.max(0, teamB - 1))} 
      />
      {teamA >= 10 && <Text style={styles.winner}>Tim A Menang!</Text>}
      {teamB >= 10 && <Text style={styles.winner}>Tim B Menang!</Text>}
      <Text style={styles.reset} onPress={handleReset}>Reset Pertandingan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 10,
  },
  reset: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
