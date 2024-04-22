import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (

//   );
// }

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Inter meals</Text>
    </SafeAreaView>
  );
};

export default App;
