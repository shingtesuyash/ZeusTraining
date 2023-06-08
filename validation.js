
document.getElementById('btnsubmit').addEventListener('click', function(e) {
    e.preventDefault(); 
  
    
    var nam = document.getElementById('name').value;
    var comment = document.getElementById('comments').value;
    var mal = document.getElementById('male').checked;
    var femal = document.getElementById('female').checked;
  
    
    if (nam.trim() === '' || comment.trim() === '' || (!mal && !femal)) {
        console.log("Nhi hoga");
        alert("All fields are mandatory");
  
      
      if (nam.trim() === '') {
        document.getElementById('name').focus();
      } else if (comment.trim() === '') {
        document.getElementById('comments').focus();
      } else {
        document.getElementById('male').focus();
      }
    } else {
      alert("form submitted!!!");
      document.getElementById('myForm').submit();
    }
  });