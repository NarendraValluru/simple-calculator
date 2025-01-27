// Append value to the input field
function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
  }
  
  // Clear the input field
  function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
  }
  
  // Calculate the result
  function calculate() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  }
  function backspace(){
    const result=document.getElementById("result");
    result.value = result.value.slice(0,-1);
  }
  