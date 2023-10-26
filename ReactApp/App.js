 // JavaScript  
   
 //     const heading = document.createElement("h1");

//     heading.innerHTML = "Hello friends";

//     const root = document.getElementById("root");

//     root.appendChild(heading);

//  const heading = React.createElement("h1", {}, "Hello friendss"); */}

const heading = React.createElement("h1", {}, "Heading1");

const heading2 = React.createElement("h2", {}, "Heding2");

const container = React.createElement("div", 
     {
         id :"container",
     }, [heading,heading2]);

   const root = ReactDOM.createRoot(document.getElementById("root"));

        //   root.render(heading); 

     root.render(container);
       
