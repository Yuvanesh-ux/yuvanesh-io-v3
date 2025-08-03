"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { VT323 } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Font setup for DOS aesthetic
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

// --- ASCII Info Box Component ---
const InfoBox = () => (
  <div className={cn("text-lg leading-tight relative", vt323.className)}>
    <pre className={cn("m-0 p-0", vt323.className)}>┌── ── ── ── ── ── ── ── ── ──┐</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>│ Currently @ Pensar                      │</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>│ Defending the web                       │</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>│ against vulnerable code                 │</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>│                                         │</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>│                                         │</pre>

    <div className="relative">
      <pre className={cn("m-0 p-0", vt323.className)}>│                                         │</pre>
      <div className="absolute inset-0 flex justify-center items-center gap-4 px-4">
        <a href="https://github.com/yuvanesh-ux" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-75 transition-opacity">
          <Image src="/github-pixel.png" alt="GitHub" width={24} height={24} className="pixel-art-icon" />
        </a>
        <a href="https://twitter.com/Yuvaaa___" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="hover:opacity-75 transition-opacity">
          <Image src="/twitter-pixel.png" alt="X/Twitter" width={24} height={24} className="pixel-art-icon" />
        </a>
        <a href="https://www.linkedin.com/in/yuvanesh-anand-760521233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
          <Image src="/linkedin-pixel.webp" alt="LinkedIn" width={24} height={24} className="pixel-art-icon" />
        </a>
        <a href="https://substack.com/@yuvaaaaa" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="hover:opacity-75 transition-opacity">
          <Image src="/substack-pixel.png" alt="Substack" width={32} height={32} className="pixel-art-icon" />
        </a>
      </div>
    </div>
    <pre className={cn("m-0 p-0", vt323.className)}>│                                         │</pre>
    <pre className={cn("m-0 p-0", vt323.className)}>└─ ── ── ── ── ── ── ── ──  ──┘</pre>
  </div>
)

// --- View Components ---

type CommandHandler = (command: string) => void

const HomeView = ({ onCommand }: { onCommand: CommandHandler }) => {
  const [activeItem, setActiveItem] = useState("home")

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Navigation */}
        <div className="flex flex-col space-y-3 text-4xl pl-8">
          <a
            onClick={() => onCommand("home")}
            className="flex items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setActiveItem("home")}
          >
            <span className={cn("text-green-400", { "opacity-0": activeItem !== "home" })}>&gt;</span>
            <span className="group-hover:text-green-400 transition-colors">Home</span>
            {activeItem === "home" && <span className="blinking-cursor">_</span>}
          </a>
          <a
            onClick={() => onCommand("experience")}
            className="flex items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setActiveItem("experience")}
          >
            <span className={cn("text-green-400", { "opacity-0": activeItem !== "experience" })}>&gt;</span>
            <span className="group-hover:text-green-400 transition-colors">Experience</span>
            {activeItem === "experience" && <span className="blinking-cursor">_</span>}
          </a>
          <a
            onClick={() => onCommand("publications")}
            className="flex items-center gap-4 cursor-pointer group"
            onMouseEnter={() => setActiveItem("publications")}
          >
            <span className={cn("text-green-400", { "opacity-0": activeItem !== "publications" })}>&gt;</span>
            <span className="group-hover:text-green-400 transition-colors">Publications & Blog</span>
            {activeItem === "publications" && <span className="blinking-cursor">_</span>}
          </a>
        </div>

        {/* Right Side: Info Box */}
        <div className="hidden md:flex justify-center items-start pt-2">
          <InfoBox />
        </div>
      </div>

      {/* Bottom: Logo */}
      <div className="w-full flex justify-start pl-8 mt-8">
        <Image
          src="/logo.png"
          alt="Yuvanesh Anand Logo"
          width={512}
          height={128}
          className="w-full max-w-lg"
          priority
        />
      </div>
    </div>
  )
}

const NomicView = ({ onCommand }: { onCommand: CommandHandler }) => (
  <div className="text-lg md:text-xl space-y-4 break-words">
    <div className="pl-4 space-y-2">
      <p>• Atlas Platform: Developed a real-time platform for data visualization handling billions of data points.</p>
      <p>
        • Data Pipeline: Constructed a data pipeline for the GPT4ALL model (LLaMa architecture), trained language models
        on 800,000+ high-quality examples.
      </p>
      <p>
        • Web Migration: Worked on migrating Nomic enterprise web apps to Next.JS, optimizing UI/UX and refactoring
        legacy code.
      </p>
      <p>
        • GPT4ALL Development: Steered the creation of the open-source GPT4ALL platform to over 60K stars on Github.
      </p>
      <p>• Company Relations: Managed relations with other companies regarding collaborations with GPT4ALL.</p>
    </div>
    <div className="mt-8">
      <a onClick={() => onCommand("experience")} className="flex items-center gap-2 cursor-pointer group text-2xl">
        <span className="text-green-400">&gt;</span>
        <span className="group-hover:text-green-400 transition-colors">cd ..</span>
        <span className="blinking-cursor">_</span>
      </a>
    </div>
  </div>
)

const PensarView = ({ onCommand }: { onCommand: CommandHandler }) => (
  <div className="text-lg md:text-xl space-y-4">
    <div className="pl-4 space-y-2">
      <p>• Currently working to secure AI Agents from threats.</p>
      <p>• Placeholder text describing my role and responsibilities at Pensar.</p>
      <p>• More placeholder text about achievements and technologies used.</p>
    </div>
    <div className="mt-8">
      <a onClick={() => onCommand("experience")} className="flex items-center gap-2 cursor-pointer group text-2xl">
        <span className="text-green-400">&gt;</span>
        <span className="group-hover:text-green-400 transition-colors">cd ..</span>
        <span className="blinking-cursor">_</span>
      </a>
    </div>
  </div>
)

const ExperienceView = ({ onCommand }: { onCommand: CommandHandler }) => (
  <div className="text-lg md:text-xl space-y-4">
    <p>Volume in drive C is YUVANESH_ANAND</p>
    <p>Directory of C:\\experience</p>
    <br />
    <div className="space-y-2">
      <p>
        2023-05-01 &lt;DIR&gt;{" "}
        <a
          onClick={(e) => {
            e.preventDefault()
            onCommand("pensar")
          }}
          href="#"
          className="hover:text-green-400 hover:underline"
        >
          Pensar
        </a>
      </p>
      <p>
        2022-04-01 &lt;DIR&gt;{" "}
        <a
          onClick={(e) => {
            e.preventDefault()
            onCommand("nomic")
          }}
          href="#"
          className="hover:text-green-400 hover:underline"
        >
          Nomic
        </a>
      </p>
    </div>
    <div className="mt-8">
      <a onClick={() => onCommand("home")} className="flex items-center gap-2 cursor-pointer group text-2xl">
        <span className="text-green-400">&gt;</span>
        <span className="group-hover:text-green-400 transition-colors">cd ..</span>
        <span className="blinking-cursor">_</span>
      </a>
    </div>
  </div>
)

const PublicationsView = ({ onCommand }: { onCommand: CommandHandler }) => (
  <div className="text-lg md:text-xl space-y-4">
    <p>Volume in drive C is YUVANESH_ANAND</p>
    <p>Directory of C:\\publications</p>
    <br />
    <div className="space-y-2">
      <p>
        2023-11-10 15,302{" "}
        <a href="#" className="hover:text-green-400 hover:underline">
          The_Rise_of_AI_Agents.pdf
        </a>
      </p>
      <p>
        2023-08-02 8,912{" "}
        <a href="#" className="hover:text-green-400 hover:underline">
          Securing_Large_Language_Models.txt
        </a>
      </p>
      <p>
        2022-01-15 22,450{" "}
        <a href="#" className="hover:text-green-400 hover:underline">
          NextJS_for_Enterprise_Apps.md
        </a>
      </p>
      <p>
        2021-07-30 12,100{" "}
        <a href="#" className="hover:text-green-400 hover:underline">
          Building_Data_Pipelines_at_Scale.html
        </a>
      </p>
    </div>
    <div className="mt-8">
      <a onClick={() => onCommand("home")} className="flex items-center gap-2 cursor-pointer group text-2xl">
        <span className="text-green-400">&gt;</span>
        <span className="group-hover:text-green-400 transition-colors">cd ..</span>
        <span className="blinking-cursor">_</span>
      </a>
    </div>
  </div>
)

// --- Main Page Component ---

interface HistoryItem {
  id: number
  command: string
  Component: React.ComponentType<{ onCommand: CommandHandler }>
}

const commandToComponent: Record<string, React.ComponentType<{ onCommand: CommandHandler }>> = {
  home: HomeView,
  experience: ExperienceView,
  publications: PublicationsView,
  pensar: PensarView,
  nomic: NomicView,
}

const commandToPrompt: Record<string, string> = {
  home: "C:\\>",
  experience: "C:\\experience>",
  publications: "C:\\publications>",
  pensar: "C:\\experience\\pensar>",
  nomic: "C:\\experience\\nomic>",
}

export default function PortfolioPage() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [show, setShow] = useState(false)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setShow(true)
    // Initialize with the home command
    setHistory([{ id: 0, command: "home", Component: HomeView }])
  }, [])

  useEffect(() => {
    // Scroll to the bottom whenever history changes
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand: CommandHandler = (command) => {
    const Component = commandToComponent[command]
    if (Component) {
      setHistory((prev) => [...prev, { id: prev.length, command, Component }])
    }
  }

  return (
    <main
      className={cn(
        "bg-black text-gray-200 min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000",
        vt323.className,
        { "opacity-0": !show, "opacity-100": show },
      )}
      style={{ textShadow: "0 3px 3px rgba(255, 255, 255, 0.35)" }}
    >
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Project%201-YnrgWVqaSc4syrO9vEQjmYb6TU5pQt.png)",
        }}
      />
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto flex items-center justify-center">
        <div className="w-full max-w-5xl p-8 md:p-16 h-[85vh] max-h-[650px] overflow-y-auto dos-scrollbar">
          {history.map(({ id, command, Component }) => (
            <div key={id} className="mb-8">
              <div className="flex items-center gap-2 text-3xl">
                <span className="text-green-400">{commandToPrompt[command]}</span>
              </div>
              <div className="mt-2">
                <Component onCommand={handleCommand} />
              </div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </main>
  )
}
