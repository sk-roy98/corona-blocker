replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/coronavirus/gi)){
            const newElement = document.createElement('span')

            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
                '<span style = "background-color: #000; color: #000;">$1</span>')
            
            element.replaceWith(newElement)
        }
        //     element.parentElement.style.color = "black"
        //     element.parentElement.style.backgroundColor = "black"
        // }
        // element.textContent = element.textContent.replace(/coronavirus/gi,'█████')

    };
}