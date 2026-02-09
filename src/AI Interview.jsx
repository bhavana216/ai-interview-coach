
import React, { useState, useRef } from "react";
import {
  LayoutDashboard,
  Mic2,
  FileText,
  History,
  GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- CARD ---------------- */
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

/* ---------------- DASHBOARD ---------------- */
const Dashboard = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
    <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { title: "Mock Interviews", value: "14" },
        { title: "Avg Score", value: "88%" },
        { title: "Confidence", value: "High" },
        { title: "Resume Score", value: "76%" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow"
        >
          <p className="text-sm opacity-90">{item.title}</p>
          <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>

    {/* Analytics */}
    <Card>
      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Performance Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-xl">
          <p>Confidence: <b>High</b></p>
          <p>Fluency: <b>Good</b></p>
          <p>Answer Accuracy: <b>Very Good</b></p>
        </div>

        <div className="space-y-3">
          {[
            { skill: "Technical Skills", value: "85%" },
            { skill: "Communication", value: "78%" },
            { skill: "Problem Solving", value: "82%" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-sm">{s.skill}</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: s.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </motion.div>
);

/* ---------------- INTERVIEW ---------------- */
const InterviewRoom = () => {
  const [active, setActive] = useState(false);
  const videoRef = useRef(null);

  const toggle = async () => {
    if (!active) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } else {
      videoRef.current.srcObject?.getTracks().forEach(t => t.stop());
    }
    setActive(!active);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Interview Room</h1>

      <Card className="flex flex-col items-center gap-6">
        <video ref={videoRef} autoPlay muted className="w-72 h-44 bg-black rounded-xl" />
        <button
          onClick={toggle}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          {active ? "End Interview" : "Start Interview"}
        </button>
      </Card>
    </motion.div>
  );
};

/* ---------------- RESUME ANALYZER ---------------- */
const ResumeAnalyzer = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
    <h1 className="text-3xl font-bold text-blue-900">Resume Analyzer</h1>

    <Card>
      <input type="file" className="w-full border p-3 rounded-lg" />
      <select className="w-full mt-4 border p-3 rounded-lg">
        <option>Select Role</option>
        <option>Software Engineer</option>
        <option>AI / ML Engineer</option>
        <option>Data Scientist</option>
      </select>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl">
        Analyze Resume
      </button>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["ATS Score: 76%", "Keyword Match: 68%", "Readability: 82%"].map((t, i) => (
        <div
          key={i}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl"
        >
          {t}
        </div>
      ))}
    </div>
  </motion.div>
);

/* ---------------- HISTORY & PROGRESS ---------------- */
const HistoryProgress = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
    <h1 className="text-3xl font-bold text-blue-900">
      Interview History & Progress
    </h1>

    {/* History Table */}
    <Card>
      <table className="w-full text-left">
        <thead>
          <tr className="text-blue-900">
            <th>Date</th>
            <th>Role</th>
            <th>Score</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["10 Feb", "Software Engineer", "82%", "Medium"],
            ["15 Feb", "AI Engineer", "88%", "High"],
            ["20 Feb", "Data Scientist", "91%", "High"],
          ].map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((c, j) => (
                <td key={j} className="py-2">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

    {/* Progress */}
    <Card>
      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Overall Progress
      </h2>

      {[
        { label: "Confidence Growth", value: "85%" },
        { label: "Communication", value: "80%" },
        { label: "Technical Accuracy", value: "88%" },
      ].map((p, i) => (
        <div key={i} className="mb-4">
          <p>{p.label}</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: p.value }}
            />
          </div>
        </div>
      ))}
    </Card>
  </motion.div>
);

/* ---------------- RESOURCES ---------------- */
const Resources = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <h1 className="text-3xl font-bold text-blue-900">Resources & Roadmap</h1>

    <Card>
      <ul className="list-disc pl-6 space-y-2">
        <li>YouTube Interview Prep Channels</li>
        <li>DSA & System Design Roadmaps</li>
        <li>AI / ML Learning Paths</li>
      </ul>
    </Card>
  </motion.div>
);

/* ---------------- APP ---------------- */
export default function App() {
  const [tab, setTab] = useState("dashboard");

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { id: "interview", label: "Interview", icon: <Mic2 /> },
    { id: "resume", label: "Resume Analyzer", icon: <FileText /> },
    { id: "history", label: "History", icon: <History /> },
    { id: "resources", label: "Resources", icon: <GraduationCap /> },
  ];

  return (
    <div className="flex h-screen bg-[#F5F1EB]">
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Interview AI</h2>
        {menu.map(m => (
          <button
            key={m.id}
            onClick={() => setTab(m.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              tab === m.id ? "bg-blue-600" : "hover:bg-blue-800/60"
            }`}
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          {tab === "dashboard" && <Dashboard />}
          {tab === "interview" && <InterviewRoom />}
          {tab === "resume" && <ResumeAnalyzer />}
          {tab === "history" && <HistoryProgress />}
          {tab === "resources" && <Resources />}
        </AnimatePresence>
      </main>
    </div>
  );
}
