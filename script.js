replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        
        element.textContent = element.textContent.replace(/coronavirus/gi,'Wuhanvirus')

        if(element.textContent.match(/covid-19/gi)){
            const newElement = document.createElement('span')
             
            newElement.innerHTML = element.textContent.replace(/(covid-19)/gi,
                '<span style = "background-color: #000; color: #000;">$1</span>')

            element.replaceWith(newElement)
        }   
       
    };
}
