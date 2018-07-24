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
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 150
  },
  fbLoginBtn: {
    backgroundColor: '#4267B2',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 8
  },
  fbLoginBtnText: {
    color: '#fff',
    fontSize: 20
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

  /** Home page(Map) styles */
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  homeMap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  homeDiscountShop: {
    color: '#CCC',
    height: '20%',
    fontWeight: '800'
  },
  homeDiscountDescription: {
    color: '#FFFFFF',
    height: '60%'
  },
  homeDiscountTimeLeft: {
    flexDirection: 'row',
    height: '20%',
    flex: 1
  },
  mapCarousel: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    padding: 0,
    position: 'absolute',
    bottom: 10,
    left: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 10,
    zIndex: 2000,
    borderColor: '#ccc'
  },
  homeDiscountAmount: {
    flex: 1,
    alignItems: 'flex-end'
  },

  /** Tab bar styles */

  tabBar: {
    flexDirection: 'row',
    height: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2000,
    backgroundColor: '#FFF'
  },
  menuTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007a87'
  },
  centerTabMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerTabMenuBtn: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007a87'
  },

  logoAnim: {
    width: 180,
    height: 180
  },
  white: {
    color: '#FFFFFF'
  }
});
export { styles };
