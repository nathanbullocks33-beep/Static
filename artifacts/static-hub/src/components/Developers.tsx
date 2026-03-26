import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const TEAM = [
  {
    name: "Freeme (static01223)",
    role: "Developer / Owner",
    image: "https://imgs.search.brave.com/HhQHhxpODyprBT2yLlgBm6T-i_zvabmtA-0L6wwclVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwLzAy/LzUwLzMwMDI1MDI4/NDNjMWVmMGM1N2Vk/NjQxMWEwNGU4YjEx/LmpwZw",
    initial: "F",
  },
  {
    name: "Crucify (slaughterbroleniggas)",
    role: "Site Developer",
    image: "https://media.discordapp.net/attachments/1481491303920566436/1485474722304229557/IMG_2420.jpg?ex=69c5f424&is=69c4a2a4&hm=6e2971c75538243c7ebb63e12ee2dbcf5bf098dcbd8a9418bd38a1a3ed61a140&=&format=webp&width=578&height=605",
    initial: "C",
  },
];

export function Developers() {
  return (
    <section className="py-28 relative bg-[#080808] w-full">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm max-w-sm mx-auto"
          >
            The people behind Static
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex items-center gap-5 w-full max-w-sm transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-lg shadow-black/50 bg-white/5 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xl font-bold text-white">${member.initial}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="text-xl font-bold text-white">{member.initial}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base leading-tight truncate">{member.name}</span>
                  <Code2 className="w-4 h-4 text-white/40 shrink-0" />
                </div>
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
