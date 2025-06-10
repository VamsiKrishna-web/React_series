function customRender(reactEle, main) {
  const domEle = document.createElement(reactEle.type);

  domEle.innerHTML = reactEle.children;

  for (const prop in reactEle.props) {
    // console.log(prop);
    if (prop === "children") {
      continue;
    }
    if (typeof reactEle.props[prop] === "object") {
      let obj = reactEle.props[prop];

      for (styleprop in obj) {
        domEle.setAttribute(prop, `${styleprop}:${obj[styleprop]}`);
      }
    }

    else{
        domEle.setAttribute(prop, reactEle.props[prop]);
    }

    
  }

  main.appendChild(domEle);
}
const mainContainer = document.querySelector("#root");

const reactEle = {
  type: "h1",
  props: {
    style: {
      color: "red",
    },
    title: "Heading element",
  },
  children: "React series with AVK",
};

customRender(reactEle, mainContainer);


let h1Ele=mainContainer.querySelector('h1');
console.log(h1Ele);