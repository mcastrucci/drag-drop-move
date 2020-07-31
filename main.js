document.addEventListener("DOMContentLoaded", () => {  // first we wait the DOM to be fully charged

  document.querySelectorAll('.draggable-element').forEach(item => {  //we welect all draggable elements
    let elementID = item.getAttribute("data-id");  //we get the ID from the HTML
    item.addEventListener('dragstart', (event, id=elementID) => {
      event.dataTransfer.setData('text/plain', id);  //then, for each element, we add a listener that transfers the data ID
    })
  })
 
  document.querySelectorAll(".drop-element").forEach(item => { //drop element listener
    item.addEventListener('dragover', (event) =>{
      event.preventDefault(); //this one is just to prevent default
    });
    
    item.addEventListener('drop', (event) =>{
      let id = event.dataTransfer.getData('text/plain');
      let query = `.draggable-element[data-id="${id}"]` //we get the element from the drag container by its html data-id
      
      let dropContainer = event.target.parentNode;
      let elemToChange = document.querySelector(query);

      dropContainer.replaceChild(elemToChange, event.target); //we replace the drop element by the drag element. That results in removing it from the original container
    })

  })
});
