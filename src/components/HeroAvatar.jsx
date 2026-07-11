import { motion } from "framer-motion"
import LogoImg from "../assets/favicon.svg"

function HeroAvatar() {
    return (
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] flex items-center justify-center relative z-10">
            {/* Background neon light blink */}
            <div className="absolute inset-0 border border-dashed border-primary/30 rounded-full blur-3xl animate-pulse" />
            {/* Orbit ring */}
            <div className="absolute inset-2 border border-dashed border-primary/30 rounded-full animate-[spin_60s_linear_infinite]" />
            {/* Main avatar logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-full border border-slate-900 rounded-full flex items-center justify-center bg-slate-900/10 backdrop-blur-md relative overflow-visible"
            >
                <img
                    src={LogoImg}
                    alt="dewz logo"
                    className="w-[85%] h-[85%] object-cover rounded-full filter drop-shadow-[0_0_25px_rgba(147,54,180,0.4)]"
                    onError={(e) => {
                        e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=sadew';
                    }}
                />

                {/* Floating tech buttons */}
                {/* badge 1 - c++ top-left */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-2 -left-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-secondary flex items-center gap-1.5 shadow-xl select-none font-mono"
                >
                    <span>&lt;C++ /&gt;</span>
                </motion.div>

                {/* Badge 2 - DevOps - Right bottom */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-2 -right-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-highlight flex items-center gap-1.5 shadow-xl select-none font-mono"
                >
                    <span>Linux</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 -right-6 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-full text-base flex items-center gap-1.5 shadow-xl select-none font-mono"
                >
                    <span>Web Dev</span>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default HeroAvatar