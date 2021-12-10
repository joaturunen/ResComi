/* Värit voisi määrittää tänne ylös, jotta helppo päivittää 
    primary: #0088c2
    inbox background: #E9EAEB
    white text: #F4F7FC
    bakcround: #F4F7FC
    blackText : #333
    darker text: #0000
    highlihgtin colour #C23A00 
    linearHeader: #0088c2 #006ea6
*/

//Head color
const headColor = "#0088c2";
const headColorShadow = "#006ea6";

//Box and Shadow
const boxColor = "#e9eaeb";
const boxShadow = "#D3D3D3";
const homeShadow = '#333';

//Shock color
const shockColor = "#C23A00";

//Text color light
const textLight ='#F4F7FC'

const backgroundLight = '#F4F7FC'


//Pie-Chart taken
export const pieChartTaken = "#E9897E";
//Pie-Chart free
export const pieChartFree = "#A0DAA9"; 

//Header color
export const headerColor = {
  'background': 'linear-gradient(to bottom, ' + headColor + ' 55%,' + headColorShadow  + ' 90%)'
};

//Grey box with shadow
export const boxShadowStyle = {
  'background': boxColor,
  'box-shadow': '5px 5px ' + boxShadow
};
export const boxShadowHome = {
  'background': homeShadow,
  'box-shadow': '5px 5px ' + homeShadow
};

//Grey box with shadow
export const boxColorLayot = {
  'background': boxColor,
  'borderRadius': '10px',
  'margin': '1rem'
};

//button style
export const buttonStyle = {
  'background': headColor, 
  'color': textLight,
  'border-radius':'10px',
  'font': '13px Lato, sans-serif',
  'box-shadow': '4px 4px ' + boxShadow,
  'margin': "0.5rem"
};

//user signed in
export const userStyle={
  'color': textLight,
  'text-align': 'right'
}

//Homepage LinkStyle
export const LinkStyle={
  'text-decoration': 'none',
  'color':'#0088c2'
}

export const Customerdata = {
  'border': 'solid 2px' + headColor,
  'border-left': 'solid 10px' + headColor,
  'borderRadius': '0.2rem',
  'background': backgroundLight,
  'line-height': '70%'
};

export const Choice = {
  'background': headColor, 
  'color': textLight
};

// Not sure why this must be
const Colors = () =>{
  return '';
};
export default Colors;
