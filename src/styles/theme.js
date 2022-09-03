// 색상 관련
const palette = {
  primary: '#3F72AF',
  primaryLight: '#DBE2EF',
  primaryDark: '#112D4E',

  border: '#E5E5E3',
  backGround: '#F9F7F7',

  success: '#006633',
  danger: '#FF6347',

  black: '#000000',
  white: '#FFF',
  gray: '#808080',
  red: '#ff0f0f',

  seoul: '#FFE9AE',
  gyeonggi: '#C1EFFF',
  incheon: '#C4DFAA',
};

// 레이아웃 관련
const common = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexEnd: `
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexSpaceBetWeen: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
};

// font 관련
const fontSizes = {
  region: '12rem',
  title: '2rem',
  subtitle: '1.5rem',

  inputText: '1.8rem',
  buttonText: '1.5rem',

  bigParagraph: '1.8rem',
  paragraph: '1.6rem',
  smallParagraph: '1.4rem',

  inputErrorMessage: '1.4rem',
};
const fontWeight = {
  bold: 800,
  medium: 700,
  normal: 400,
};

// 버튼 관련
const normalButton = {
  width: '7rem',
  height: '3rem',
};

const formButton = {
  width: '80%',
  height: '4rem',
};

// 지정해둔 값 내보내기
const theme = {
  palette,
  common,
  fontSizes,
  fontWeight,
  normalButton,
  formButton,
};

export default theme;
