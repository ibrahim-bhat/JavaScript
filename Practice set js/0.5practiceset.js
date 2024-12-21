//////changing the color of elements


    // console.log('hello world')

    // const ele = document.querySelector("#nav-links");
    // console.log(ele);
    // ele.style.color = "red";


    const ele = document.querySelector('.navbar');
    // ele.firstElementChild.style.color = 'red'
    // ele..style.color = "red";
    let secon = ele.children[1];
    // secon.style.backgroundColor = "red"

    let child = secon.children;
    // child.style.color = "red";

    for( let i = 0; i<child.length; i++){
      const link = child[i].querySelector("a"); // Get the <a> element inside the <li>
      if(link){
        link.style.color = "red";
      }
      
    }
    
    // console.log(child)

    // console.log(ele );


    ////////////////////////////////////////



    