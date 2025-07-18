import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {" "}
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> Realtime Chat App</h3>
                <p className="text-gray-400 mb-4">
                  A MERN stack chat application with real-time messaging capabilities. Uses Socket.io for instant messaging and online user tracking, JWT for secure authentication, Zustand for state management, and TailwindCSS with DaisyUI for responsive design
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[ "React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand", "TailwindCSS"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                <div className="flex justify-between items-center">
                  <a
                    href="https://chat-app-26h5.onrender.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
              >
                <h3 className="text-xl font-bold mb-2">Ecommerce Website Clone</h3>
                <p className="text-gray-400 mb-4">
                  A fully responsive e-commerce platform inspired by AliExpress built with the MERN stack. Features secure JWT authentication, product search and filtering, shopping cart, favorites, order management, and a complete admin panel for product and user management. Uses Zustand for global state management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "Express.js", "MongoDB", "JWT", "Zustand", "TailwindCSS"].map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://aliexpress-clone-67xr.vercel.app/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
  
              <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
              >
                <h3 className="text-xl font-bold mb-2">Dice game</h3>
                <p className="text-gray-400 mb-4">
                  A dice roll game that gives random number.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["JavaScript", "CSS", "HTML", "Jquery"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/Kingpin-10/Dice-Game"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
  
              {/* <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
              >
                <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
                <p className="text-gray-400 mb-4">
                  Scalable chat platform supporting real-time messaging, presence,
                  and group chat features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                    <span
                      key={key}
                      className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center ">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
  };
