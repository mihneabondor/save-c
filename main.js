const fileInput = document.getElementById('upload-file');
let savedFile = []
const handleFiles = () => {
  const selectedFiles = [...fileInput.files];
  savedFile.push(selectedFiles);

  for(file of selectedFiles) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(file.name));
    node.id = file.name
    node.addEventListener("click", function(){ fileClick(node)});
    document.getElementById('files-list').appendChild(node);
  }
}

fileInput.addEventListener("change", handleFiles);

function fileClick(node) {
    let file = savedFile.find(elem => elem.name = node.id)[0]
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        let text = event.target.result
        let code = document.getElementById('code')
        code.innerHTML = text
    });
    reader.readAsText(file);
}
