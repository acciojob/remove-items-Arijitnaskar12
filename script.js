//your JS code here. If required.

function removeElement(){
	let selectElement=document.getElementsByTagName("select")[0];
let selectedValue=selectElement.value;
let childrenList=selectElement.children;
for(let i=0;i<childrenList.length;i++)
{
  if(selectedValue===childrenList[i].value)
  {
    childrenList[i].remove();
  }
}
}