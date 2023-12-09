
document.getElementById('google-docs').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-d1').checked = true;
    document.getElementById('gg-d2').checked = false;
    document.getElementById('gg-d3').checked = false;
  } else if (selectedValue === '2') {
    document.getElementById('gg-d1').checked = true;
    document.getElementById('gg-d2').checked = true;
    document.getElementById('gg-d3').checked = false;
  } else if (selectedValue === '3') {
    document.getElementById('gg-d1').checked = true;
    document.getElementById('gg-d2').checked = true;
    document.getElementById('gg-d3').checked = true;
  } else if (selectedValue === '0') {
    document.getElementById('gg-d1').checked = false;
    document.getElementById('gg-d2').checked = false;
    document.getElementById('gg-d3').checked = false;
    document.getElementById('gg-d4').checked = false;
  } else {
    document.getElementById('gg-d1').checked = false;
    document.getElementById('gg-d2').checked = false;
    document.getElementById('gg-d3').checked = false;
  }
});

document.getElementById('google-slides').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-s1').checked = true;
    document.getElementById('gg-s2').checked = false;
    document.getElementById('gg-s3').checked = false;
    document.getElementById('gg-s4').checked = false;
  } else if (selectedValue === '2') {
    document.getElementById('gg-s1').checked = true;
    document.getElementById('gg-s2').checked = true;
    document.getElementById('gg-s3').checked = false;
    document.getElementById('gg-s4').checked = false;
  } else if (selectedValue === '3') {
    document.getElementById('gg-s1').checked = true;
    document.getElementById('gg-s2').checked = true;
    document.getElementById('gg-s3').checked = true;
    document.getElementById('gg-s4').checked = false;
  } else if (selectedValue === '4') {
    document.getElementById('gg-s1').checked = true;
    document.getElementById('gg-s2').checked = true;
    document.getElementById('gg-s3').checked = true;
    document.getElementById('gg-s4').checked = true;
  } else if (selectedValue === '0') {
    document.getElementById('gg-s1').checked = false;
    document.getElementById('gg-s2').checked = false;
    document.getElementById('gg-s3').checked = false;
    document.getElementById('gg-s4').checked = false;
  } else {
    document.getElementById('gg-s1').checked = false;
    document.getElementById('gg-s2').checked = false;
    document.getElementById('gg-s3').checked = false;
    document.getElementById('gg-s4').checked = false;
  }
});