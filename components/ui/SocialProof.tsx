"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const avatars = [
    { initials: "JD", bg: "bg-emerald-800", text: "text-emerald-100" },
    { initials: "AS", bg: "bg-blue-800", text: "text-blue-100" },
    { initials: "MK", bg: "bg-purple-800", text: "text-purple-100" },
    { initials: "RL", bg: "bg-amber-800", text: "text-amber-100" },
];

export default function SocialProof() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 2.0,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4 mt-6"
        >
            <div className="flex items-center justify-center">
                {avatars.map((avatar, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className={`relative w-10 h-10 rounded-full border-2 border-background overflow-hidden -ml-3 first:ml-0 flex items-center justify-center ${avatar.bg}`}
                    >
                        <span className={`text-[10px] font-bold ${avatar.text}`}>{avatar.initials}</span>
                    </motion.div>
                ))}
                <motion.div
                    variants={itemVariants}
                    className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden -ml-3 flex items-center justify-center bg-muted text-muted-foreground"
                >
                    <span className="text-[10px] font-bold">+40</span>
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-white/80 text-sm font-medium tracking-wide">
                    "Exceeded all expectations." <span className="text-white/40 mx-2">|</span> <span className="text-white font-bold">5.0</span> Rating
                </p>
            </motion.div>
        </motion.div>
    );
}
