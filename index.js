
// The section of the update preview

const updatePreview = ()=>{
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    
    let markedUpHTML = marked(editorValue);
    previewElement.innerHTML  = markedUpHTML;
}


// The section of the Default previewElement
const setDefault = ()=> {
        let defaultText = `\
        
# Ayodeji Oladimeji

## a markdown previewer by Me
[Learn more about me here](http://www.laybright.com).

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![layobright](https://image.shutterstock.com/image-photo/view-lagos-lagoon-victoria-island-260nw-1066980758.jpg)

**This is an example of Bolded Text**`;

        let editorField = document.getElementById("editor");
        let previewElement = document.getElementById("preview");
        editorField.value = defaultText;
        previewElement.innerHTML = marked(defaultText);
      }