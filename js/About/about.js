const about_module = [
  {
    title: "Who We Are?",
    image: "../images/1. About Us/How we do.jpg",
    position: "left",
    content:
      "PutFyre partners with aspiring designers and tech professionals from rural areas to transform customer ideas into innovative designs and practical solutions. We are committed to continuously advancing project progress through a consistent, results-driven approach. Our focus is on converting client concepts into tangible business products, leveraging cutting-edge technologies to deliver both high-quality products and services. By fostering collaboration and innovation, we help our clients realize their vision and achieve business success.",
  },
  {
    title: "What We Do?",
    image: "../images/1. About Us/What we do.jpg",
    position: "right",
    content:
      "Our team specializes in a wide range of software development services, including Business Analysis, Static Website Creation, Web Application Development, Mobile App Development, Software Quality Assurance, Ongoing Support, and Talent Acquisition. We are committed to delivering comprehensive, end-to-end solutions that address every aspect of the software development lifecycle, ensuring high-quality results and continuous value for our clients.",
  },
  {
    title: "How We Do It?",
    image: "../images/1. About Us/How we do.jpg",
    position: "left",
    content:
      "We employ an agile-based software development methodology to ensure continuous and iterative project delivery. Our team prioritizes project quality throughout each sprint, ensuring consistent progress and refinement. At the end of each sprint, we collaborate closely with the business team to review and validate the prototype, ensuring alignment with project goals and business objectives.",
  },
  {
    title: "Where Are We Going?",
    image: "../images/1. About Us/How we do.jpg",
    position: "",
    content:
      "Our strategic focus for the financial year 2025-2026 is,centered around achieving this goal:",
    list: [
      {
        title: "Products",
        image: "../images/1. About Us/Where we are going/products icon.png",
        count: "1+",
      },
      {
        title: "Client Countries",
        image:
          "../images/1. About Us/Where we are going/client countries icon.png",
        count: "5+",
      },
      {
        title: "Projects",
        image: "../images/1. About Us/Where we are going/projects icon.png",
        count: "10+",
      },
      {
        title: "Employees",
        image: "../images/1. About Us/Where we are going/employee icon.png",
        count: "7+",
      },
    ],
  },
];

export default function AboutModule() {
  return (
    about_module &&
    about_module.map((item, i) => {
      let listContent = "";
      if (item.list && Array.isArray(item.list)) {
        listContent = `
          <div class="module-list-flex">
            ${item.list
              .map(
                (mod, m) => `<div class="module-list-item" key=${m}>
              <img src="${mod.image}" class="mod-image"/>
              <p>${mod.title}</p>
              <p>${mod.count}</p>
             
            </div>`
              )
              .join("")}
          </div>`;
      }
      return ` 
        <div key=${i} class="main-module-head">
          <div class="module-title">${item.title}</div>
         
          ${
            item.list
              ? ` <div class="module-content-list">
          
          <div class="module-list-text">${item.content}</div>
          ${listContent}

        </div>`
              : item.position === "left"
              ? ` <div class="module-flex">
            <div>
              <img src="${item.image}" alt="pic" class="module-img"/>
            </div>
            <div class="module-content">${item.content}</div>
          </div>`
              : `
          <div class="module-flex">
         <div class="module-content">${item.content}</div>
        <div>
        <img src="${item.image}" alt="pic" class="module-img"/>
        </div>
        </div>
`
          }
         
         
        </div>
      `;
    })
  );
}
