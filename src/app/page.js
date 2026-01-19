import ProjectCard from "./components/ProjectCard";
import ServiceCard from "./components/ServiceCard";
import servicesData from "./data/services.json";
import projectsData from "./data/projects.json";
import Map from "./components/Map";

// This page uses SSR by default in the app directory (Next.js 13+)
// Simulate server-side data fetching
export default async function Home() {


  return (
    <div className='container text-gray-700'>
      <main>
        {/* Home Section */}
        <section id="home" className="mb-16 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up group">
          <div className="flex-1 animate-fade-in-up group-hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="text-center p-8 bg-white rounded shadow animate-fade-in hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <h1 className="text-4xl font-bold mb-4 animate-fade-in-up hover:text-primary transition-colors duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Welcome to Logic Miners</h1>
              <p className="text-gray-600 mb-6 animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>Mining Smarters Solutions.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <div className="relative group">
              <video src="/Images/homepageVideo.mp4" controls autoPlay loop muted className="rounded-xl shadow-lg w-full max-w-2xxl h-90 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 p-8 bg-white rounded shadow animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-gray-700">Logic Miners is a forward-thinking technology company specializing in digital solutions for the mining industry. Our mission is to empower mining operations with smart software, automation, and data analytics, driving efficiency and innovation. We combine deep industry expertise with cutting-edge engineering to deliver reliable, scalable, and user-friendly products that help our clients thrive in a rapidly evolving landscape.</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Custom software and web development for mining businesses</li>
            <li>Automation tools to streamline operations and scheduling</li>
            <li>Data analytics portals for actionable insights</li>
            <li>Branding, design, and digital marketing services</li>
            <li>Dedicated support and partnership for long-term success</li>
          </ul>

        </section>

        {/* Services Section */}
        <section id="services" className="mb-16 p-8 bg-white rounded shadow animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-8 text-gray-600">Here are the services we offer at Logic Miners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={idx}
                image={service.image}
                title={service.title}
                description={service.description}
                delay={0.1 + idx * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 p-8 bg-white rounded shadow animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="mb-8 text-gray-600">Explore some of the projects completed by Logic Miners.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                image={project.image}
                title={project.title}
                description={project.description}
                delay={0.1 + idx * 0.1}
              />
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="mb-16 p-8 bg-white rounded shadow animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">Reach out and we’ll get back in 1 business day.</p>
          <form action="https://formspree.io/f/xpqzlqyb" method="POST" className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow animate-fade-in">
            <input type="text" name="name" placeholder="Your name" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" name="email" placeholder="Email address" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea name="message" placeholder="Your message" required className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-vertical" />
            <button type="submit" className="bg-primary text-white font-bold py-3 rounded hover:bg-primary/90 transition transform hover:scale-105 duration-300 active:scale-95">Send Message</button>
          </form>
        </section>
        <section id="map" className="mb-16 p-8 bg-white rounded shadow animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Location</h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Map */}
            <div className="flex-1 min-w-[300px]">
              <Map />
            </div>
            {/* Contact Details */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 underline">Contact Details</h3>
              <p className="mb-2 flex items-center gap-2 text-gray-700 group transition-colors hover:text-primary">
                <span className="inline-block align-middle">
                  {/* Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="transition-colors group-hover:text-primary"><path d="M2.94 4.94A2.5 2.5 0 0 1 5.5 4h9a2.5 2.5 0 0 1 2.56.94l-7.06 5.65-7.06-5.65zM2 6.32V15.5A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5V6.32l-7.06 5.65a1 1 0 0 1-1.28 0L2 6.32z" /></svg>
                </span>
                <a href="mailto:sandeshbelbase11@gmail.com" className="underline group-hover:text-primary transition-colors">sandeshbelbase11@gmail.com</a>
              </p>
              <p className="mb-2 flex items-center gap-2 text-gray-700 group transition-colors hover:text-primary">
                <span className="inline-block align-middle group">
                  {/* Phone icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                  </svg>                </span>
                <a href="tel:+61430081037" className="underline group-hover:text-primary">+61 430081037</a>
              </p>
              <p className="mb-2 flex items-center gap-2 text-gray-700 group transition-colors hover:text-primary">
                <span className="inline-block align-middle group">
                  {/* Address icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="transition-colors group-hover:text-primary"><path d="M10 2a6 6 0 0 0-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
                </span>
                <a href="https://www.google.com/maps?q=Unit+4,+88+Beamish+St+Campsie,+NSW+2194,+Australia&z=19" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Unit 4, 88 Beamish St Campsie, NSW 2194, Australia</a>
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
