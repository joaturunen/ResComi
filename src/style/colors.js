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

//Shock color
const shockColor = "#C23A00";


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

//Grey box with shadow
export const boxColorLayot = {
  'background': boxColor,
  'border-radius': '10px',
  'padding': '1rem',
  'margin-left': '0.2rem',
  'margin-right': '0.2rem',
  'margin-top': '1rem'
};

export const buttonStyle = {
  'background': headerColor, 
  'color': '#F4F7FC',
  'border': headerColor,
  'border-width': '2px',
  'border-radius':'30px',
  'text-transform': 'uppercase',
  'font': '15px Lato, sans-serif'
};



// Not sure why this must be
const Colors = () =>{
  return '';
};
export default Colors;
