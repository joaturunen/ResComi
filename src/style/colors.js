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
  'border-radius': '10px',
  'padding': '1rem',
  'marginLeft': '0.2rem',
  'marginTop': '1rem',
  'marginRight': '0.2rem',
  
};

//button style
export const buttonStyle = {
  'background': headColor, 
  'color': textLight,
  'border': headerColor,
  'border-width': '2px',
  'border-radius':'30px',
  'text-transform': 'uppercase',
  'font': '12px Lato, sans-serif'
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





// Not sure why this must be
const Colors = () =>{
  return '';
};
export default Colors;
