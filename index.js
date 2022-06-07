const dropDownBtn = document.querySelector("[data-drop-button]")
const dropMenuContainer = document.querySelector("[data-drop-menu]")

const content = document.createElement("div");
              content.setAttribute("class", "contentDropdown");
const contentHeader = document.createElement("div");
              contentHeader.setAttribute("class", "contentHeader");
const contentBody = document.createElement("div");
              contentBody.setAttribute("class", "contentBody");   
const links = document.querySelectorAll("[data-links]")
let openWindow = false

const OpenClose =()=> {
    if(openWindow === false){
            
              console.log(links)
        dropMenuContainer.id = "active";
        dropMenuContainer.className = "active";
        openWindow = true;
        dropMenuContainer.appendChild(content)
        content.appendChild(contentHeader)
        content.appendChild(contentBody)
        contentHeader.innerHTML ="header"
        //contentBody.append(links[0], links[1], links[2])
        links.forEach(link => contentBody.append(link))
        
        
        
        return openWindow;
    }
    if(openWindow === true){
        
        dropMenuContainer.id = "inactive";
        dropMenuContainer.className = "inactive";
        

        openWindow = false;

        return openWindow;

    }
}


dropDownBtn.addEventListener("click", () => {
    OpenClose()
})