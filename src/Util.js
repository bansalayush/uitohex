// UIColor(red:0.07, green:0.20, blue:0.13, alpha:1.0)  CASE 1
function formatData(data) {
  alert(data);
  // for validating input
  // var re = new RegExp(
  //   '^UIColor(red:[0-9.]+, green:[0-9.]+, blue:[0-9.]+, alpha:[0-1.]+)$'
  // );
}
export function handlePaste(e) {
  var clipboardData, pastedData;

  // Stop data actually being pasted into div
  e.stopPropagation();
  e.preventDefault();

  // Get pasted data via clipboard API
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData('Text');

  // Do whatever with pasteddata

  formatData('UIColor(red:0.07, green:0.20, blue:0.13, alpha:1.0)');
}
