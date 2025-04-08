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
                <h3 className="text-xl font-bold mb-2"> Online Dating Platform</h3>
                <p className="text-gray-400 mb-4">
                  A dating website clone for dogs 
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["BootStrap", "Html", "CSS", "Jquery"].map((tech, key) => (
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
                    href="https://kingpin-10.github.io/Tin-Dog-Website/"
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
                <h3 className="text-xl font-bold mb-2">Drum Set</h3>
                <p className="text-gray-400 mb-4">
                  A virtual drum set that can play sounds by clicking by mouse or buttons.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["JavaScript", "HTML", "CSS", "Jquery"].map((tech, key) => (
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
                    href="https://kingpin-10.github.io/Drum-Kit//"
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