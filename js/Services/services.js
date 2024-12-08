const service_module = [
  {
    title: "1. Web Development",
    image: "../images/2. Services/1. Web Dev.jpg",

    content:
      "If you are operating an MSME and looking to showcase your business to local and global customers, as well as potential investors, the first step in your digital transformation is developing a professional static website to represent your brand online",
  },
  {
    title: "2. Business Analysis",
    image: "../images/2. Services/2. Business Analysis.jpg",

    content:
      "We begin by scheduling a brief online meeting to thoroughly discuss and document your requirements. This allows us to analyze your business scope, key modules, and specific needs. By gaining a clear understanding of your objectives, we can transform them into a tailored software solution. ",
    content2:
      "During the early stages of development, we offer flexibility, allowing you to refine or adjust key requirements as necessary. Our goal is to ensure maximum comfort and collaboration for our clients throughout the project development process",
  },
  {
    title: "3. Design & Animation",
    image: "../images/2. Services/3. Design.jpg",

    content:
      "As a technology-driven company, we prioritize exceptional design to ensure the best user experience for our clients. If you're a business owner with a vision, we invite you to collaborate with us. ",
    content2:
      "We specialize in transforming your ideas into creative assets, including custom logos, professional business proposal documents, business card designs, intuitive website user interfaces, and compelling digital media such as posters and videos. Our focus is on delivering high-quality, visually appealing solutions that elevate your brand presence",
  },
  {
    title: "4. Software Quality Assurance",
    image: "../images/2. Services/4. Software quality assurance.jpg",

    content:
      "We guarantee our clients and customers bug-free applications, as quality is at the core of our identity. Our company was founded with a strong focus on software testing services to ensure the highest standards of performance. We conduct comprehensive testing across multiple domains, including User Acceptance Testing (UAT), Business Acceptance Testing (BAT), Functional Testing, UI/UX Testing, and Performance Testing. Additionally, our Research & Development team specializes in Security Testing and Penetration Testing to safeguard your applications against potential vulnerabilities.",
  },
  {
    title: "5. Digital Marketing",
    image: "../images/2. Services/5. Digital Marketing.jpg",

    content:
      "Digital marketing goes beyond reaching global customers; it is about effectively targeting specific audiences. Whether you’re focusing on customers from a particular region, age group, or income bracket, we will tailor your marketing efforts—whether for a project, product, advertisement, or website—to engage your ideal audience using advanced analytics tools. Additionally, we optimize your website for Google search rankings by strategically targeting customer-focused keywords through SEO (Search Engine Optimization) and SEM (Search Engine Marketing), ensuring your online presence aligns with the mindset of your target market.",
  },
  {
    title: "6. Talent Acquisition",
    image: "../images/2. Services/6. Talent Acquisition.jpg",

    content:
      "Market demand for human resources can fluctuate rapidly due to changes in supply and technology. Understanding this, we proactively source and provide qualified resource leads to meet your business needs. We conduct preliminary screening interviews to filter candidates, ensuring that only the most suitable individuals are passed on to your interview and onboarding process, streamlining your talent acquisition and reducing time-to-hire.",
  },
];

export default function ServicesModule() {
  return (
    service_module &&
    service_module.map((item, i) => {
      return ` 
          <div key=${i} class="main-module-head">
            <div class="module-title">${item.title}</div>          
              <div class="module-flex">
            <div class="col_left">
              <img src="${item.image}" alt="pic" class="module-img"/>
            </div>
            <div class="col_right">
            <div class="module-content">${item.content}</div>

              ${item.content2 ? (
        `    <div class="module-content mt">${item.content2}</div>`

              ):""}
            </div>
          </div>
            </div>`;
    })
  );
}
