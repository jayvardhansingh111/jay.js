const addvalue = document.getElementById("second");
// console.log(clas);
window.addEventListener("keypress", (e) => {
  addvalue.innerHTML = `
    <div class="tab">
    <table>
       <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>code</th>
       <tr> 

       <tr>
          <td>${e.key === "" ? "space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
       <tr>   
    </table>
    </div>
    `;
});
