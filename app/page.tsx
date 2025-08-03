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
  <div className="text-xl md:text-2xl space-y-4">
    <p>Volume in drive C is YUVANESH_ANAND</p>
    <p>Directory of C:\\experience\\nomic</p>
    <br />
    <div className="space-y-3">
      <div className="text-yellow-400 mb-2">
        <p>DEVELOPER - NOMIC (APRIL 2022 - MAY 2023):</p>
      </div>
      
      <div className="space-y-3 text-lg">
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Atlas Platform Development:</strong> Developed a real-time platform for data visualization handling billions of data points, creating scalable infrastructure for massive dataset processing and interactive exploration.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>GPT4ALL Data Pipeline:</strong> Constructed a comprehensive data pipeline for the GPT4ALL model (LLaMA architecture), training language models on 800,000+ high-quality examples and optimizing model performance.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Enterprise Web Migration:</strong> Led migration of Nomic enterprise web applications to Next.js, optimizing UI/UX design patterns and refactoring legacy codebases for improved performance and maintainability.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Open-Source Platform Leadership:</strong> Steered the creation and growth of the GPT4ALL open-source platform, achieving over 60,000 GitHub stars and building a thriving developer community around accessible AI.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Strategic Partnership Management:</strong> Managed cross-company relationships and collaborations for GPT4ALL ecosystem expansion, facilitating technical partnerships and community growth initiatives.</span>
        </p>
      </div>
      
      <div className="mt-4 text-sm text-gray-400">
        <p>150+ citations    70K+ GitHub stars</p>
      </div>
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
  <div className="text-xl md:text-2xl space-y-4">
    <p>Volume in drive C is YUVANESH_ANAND</p>
    <p>Directory of C:\\experience\\pensar</p>
    <br />
    <div className="space-y-3">
      <div className="text-yellow-400 mb-2">
        <p>Developer - PENSAR (MAY 2023 - PRESENT):</p>
      </div>
      
      <div className="space-y-3 text-lg">
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Security Platform Development:</strong> Architected and implemented core features for enterprise security vulnerability management platform, serving dozens of organizations and processing millions of lines of code using Next.js, TypeScript, and PostgreSQL.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>AI-Powered Patch Generation:</strong> Built automated vulnerability patching system with 95% success rate, integrating LLM-based code analysis to generate security fixes across multiple programming languages and frameworks.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Infrastructure and Database Management:</strong> Designed scalable AWS infrastructure using SST (Serverless Stack), managed PostgreSQL database migrations, and implemented real-time WebSocket updates, reducing system response times by 40%.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Full-Stack Feature Development:</strong> Delivered 15+ major features including project management dashboard, dependency scanning, GitHub/GitLab integrations, and rule attribution system, directly contributing to revenue.</span>
        </p>
        
        <p className="flex items-start">
          <span className="text-green-400 mr-2">•</span>
          <span><strong>Agentic AI Development:</strong> Developed 5+ production-grade AI agents for vulnerability detection, patch generation, and code analysis, processing 10,000+ security issues monthly and achieving 90%+ accuracy in automated triage and remediation workflow.</span>
        </p>
      </div>
      
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
    <div className="space-y-3">
      <div className="text-yellow-400 mb-2">
        <p>WORK EXPERIENCE:</p>
      </div>
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
      
      <div className="mt-4 text-sm text-gray-400">
        <p>2 Dir(s)   Active employment history</p>
        <p>0 File(s)   3,285,792,768 bytes free</p>
      </div>
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
    <div className="space-y-3">
      <div className="text-yellow-400 mb-2">
        <p>PUBLICATIONS:</p>
      </div>
      <p>
        2023-11-06 42,891{" "}
        <a 
          href="https://arxiv.org/abs/2311.04931" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-400 hover:underline"
        >
          GPT4All_Ecosystem_Open_Source_LLMs.pdf
        </a>
      </p>
      
      <div className="text-yellow-400 mt-6 mb-2">
        <p>BLOG POSTS:</p>
      </div>
      <p>
        2024-07-26 18,547{" "}
        <a 
          href="https://yuvaaaaa.substack.com/p/models-can-be-prompted-to-fool-probes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-400 hover:underline"
        >
          Models_CAN_be_prompted_to_fool_probes.html
        </a>
      </p>
      
      <div className="mt-4 text-sm text-gray-400">
        <p>2 File(s)    61,438 bytes</p>
        <p>0 Dir(s)   2,847,263,744 bytes free</p>
      </div>
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
      {/* Monitor Frame Overlay - Highest Z-Index */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url(/cover.png)",
          zIndex: 9999,
        }}
      />
      
      {/* CRT Screen Effects - Under Frame but Above Content */}
      <div className="fixed inset-0 crt-screen" style={{ zIndex: 100 }} />
      
      {/* Terminal Content - Normal Z-Index */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto flex items-center justify-center chromatic-aberration">
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
