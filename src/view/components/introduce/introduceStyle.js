import Image from './wall.jpg';

export const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: `url(${Image})`,
    backgroundSize: 'cover',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    height: 400,
    padding: 2,
    'z-index': 2,
    boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.02),0 6.7px 5.3px rgba(0, 0, 0, 0.028),0 12.5px 10px rgba(0, 0, 0, 0.035),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05),  0 100px 80px rgba(0, 0, 0, 0.07)',
  },
  content: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
      paddingRight: 16,
    },
    width: 'calc(50% - 50px)',
    height: '100%',
    background: '#01579B',
  },

  image: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none',
    },
    width: 'calc(50% + 50px)',
    height: '100%',
    boxSizing: 'border-box',
    borderLeft: '100px solid #01579B',
    borderBottom: '400px solid transparent',
    background: '#F8F8FF',
  },
  photo: {
    'margin-left': -16,
    width: '100%',
    marginTop: '20%',
  },
  hello: {
    marginTop: 12,
    'font-size': 45,
    paddingLeft: 16,
    color: 'white',
    fontFamily: 'Audiowide', //  Iceland
    fontWeight: 'bold',
    textShadow: '0 0 5px #fff, 0 0 20px #fff, 0 0 15px #fff, 0 0 2px #228DFF, 0 0 3px #228DFF, 0 0 4px #228DFF, 0 0 5px #228DFF, 0 0 7px #228DFF',
  },
  name: {
    fontFamily: 'Iceland', //  Iceland
    'font-size': 40,
    paddingLeft: 24,
    color: ' white',
    fontWeight: 'bold',
    marginTop: -42,
    textShadow: '0 0 1px #fff, 0 0px #fff, 0 0 1px #fff, 0 0 2px #228DFF, 0 0px #228DFF, 0 0px #228DFF, 0 0px #228DFF, 0 0px #228DFF',
  },
  developer: {
    fontSize: 16,
    fontFamily: 'Lora',
    marginTop: -42,
    paddingLeft: 24,
    color: 'white',
    fontWeight: 'bold',
    // font-family: 'Bubblegum Sans', Pacifico,
  },
  contactMail: {
    marginTop: 8,
    display: 'flex',
    paddingLeft: 24,
  },
  contact: {
    marginTop: 42,
    display: 'flex',
    paddingLeft: 24,
  },
  info: {
    fontFamily: 'Lora',
    paddingLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
};

export default styles;
