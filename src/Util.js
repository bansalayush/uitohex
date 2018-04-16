// UIColor(red:0.07, green:0.20, blue:0.13, alpha:1.0)  CASE 1
export function handlePaste(e, uiColorCallback, rgbaColorCallback) {
  var clipboardData, pastedData;

  // Stop data actually being pasted into div
  // e.stopPropagation();
  // e.preventDefault();

  // Get pasted data via clipboard API
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData('Text');

  // Do whatever with pasteddata

  // converting values to RGBA format
  // let testString = 'UIColor(red:0.00, green:0.01, blue:0.48, alpha:1.0)';
  // let testString = 'red:0.07, green:0.20, blue:0.13, alpha:1.0';

  let uiColorValues = [];
  let rgbaValues = [];
  let arr = pastedData.split(/:|,/); // splitting string on basis of : and ,
  arr.forEach(item => {
    if (!isNaN(parseFloat(item))) {
      uiColorValues.push(parseFloat(item));
      console.log(' UIColor Values => ', parseFloat(item));
    }
  });
  // setting values back in the component
  if (uiColorValues.length === 4) {
    uiColorCallback(uiColorValues);
  } else {
    uiColorCallback([]);
  }

  // converting values  to rgba
  if (uiColorValues.length === 4) {
    for (let i = 0; i < 3; i++) {
      rgbaValues.push(parseInt(uiColorValues[i] * 255));
      console.log('RGBAColorValues');
      console.log(parseInt(uiColorValues[i] * 255));
    }
    rgbaValues.push(parseFloat(uiColorValues[3]));
    // setting rgba values back to component
    rgbaColorCallback(rgbaValues);
  } else {
    rgbaColorCallback([]);
  }
}
