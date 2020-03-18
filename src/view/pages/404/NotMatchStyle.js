const styles = () => ({
  root: {
    marginTop: 64,
  },
  theme: {
    background: '#dddddd',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'titrzebr ',
    'animation-name': '$fadeIn',
    'animation-duration': '1s',
    'animation-iteration-count': 'infinite',
    'animation-direction': 'alternate',
  },
  lostBox: {
    textAlign: 'center',
    direction: 'rtl',
    display: 'flex',
    fontSize: 20,
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
  buttonBox: {
    position: 'relative',
    background: '#0c002b',
    padding: '12px 32px',
    overflow: 'hidden',
    transition: '.2s',
    cursor: 'pointer',
    boxShadow: '0 0 10px #0c002b',
    '&:hover': {
      background: '#0c002b',
      boxShadow: '0 0 10px #0c002b, 0 0 40px #0c002b, 0 0 80px #0c002b',
    },
  },

  button: {
    fontFamily: 'IRANSans',
    color: '#1670f0',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 2,
      left: 2,
      bottom: 2,
      width: '50%',
      background: 'rgba(255,255,255,0.05)',

    },
  },

  first: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 2,
    background: 'linear-gradient(to right, #0c002b, #1779ff)',
    animation: '$animate1 2s linear infinite',
  },
  '@keyframes animate1': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(100%)',
    },
  },
  second: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 2,
    height: '100%',
    background: 'linear-gradient(to bottom, #0c002b, #1779ff)',
    animation: '$animate2 2s linear infinite',
    'animation-delay': '1s',
  },
  '@keyframes animate2': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(100%)',
    },
  },
  third: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    background: 'linear-gradient(to left, #0c002b, #1779ff)',
    animation: '$animate3 2s linear infinite',
  },
  '@keyframes animate3': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
  fourth: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2,
    height: '100%',
    background: 'linear-gradient(to top, #0c002b, #1779ff)',
    animation: '$animate4 2s linear infinite',
    'animation-delay': '1s',
  },
  '@keyframes animate4': {
    '0%': {
      transform: 'translateY(100%)',
    },
    '100%': {
      transform: 'translateY(-100%)',
    },
  },

});
export default styles;
