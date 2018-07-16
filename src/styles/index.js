import { StyleSheet } from 'react-native';
export const splashGradient = [
  'rgba(255,255,255,0.09)',
  'rgba(255,255,255,0.01)',
  'rgba(255,255,255,0)'
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  splashLogo: {
    height: 220,
    width: 220
  },
  splashContent: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  appName: {
    fontSize: 30,
    fontWeight: '300',
    color: '#007a87'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
export { styles };
