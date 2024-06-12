//4
function customRender(reactElement, container){
    /*
    //There is a problem with setAttribute, if there are 100 setAttribute can you do like this 
    //It is basic approch
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement);
    */

    //This is advance approch using loop to set setAttribute
    const domElement= document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
 }
 
 //1(React Element which will be display in our screen)
 const reactElement ={
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to vist Google'
 }
 //2(connect with the root element)
 const mainContainer = document.getElementById("root");

 //3(create customRender function to so that its take my reactElement and inject it in mainConatiner )
 customRender(reactElement, mainContainer);

