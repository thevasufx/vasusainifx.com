import React from "react";
import { USER_DATA } from "../constants";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function SkillChart() {
  const skillData = USER_DATA.skills.map((s) => ({
    name: s.name,
    level: s.level,
    category: s.category,
  }));

  const academicData = USER_DATA.academicMetrics.map((m) => ({
    subject: m.subject,
    grade: m.grade,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="glass-panel rounded-3xl border border-gray-700 p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-lg font-black text-gray-100">Skill Radar</h3>
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            0–100
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillData}>
              <PolarGrid stroke="rgba(156, 163, 175, 0.25)" />
              <PolarAngleAxis
                dataKey="name"
                tick={{ fill: "#cbd5e1", fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "#9ca3af", fontSize: 10 }}
              />
              <Radar
                name="Level"
                dataKey="level"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.28}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(17, 24, 39, 0.92)",
                  border: "1px solid rgba(75, 85, 99, 0.55)",
                  borderRadius: 12,
                  color: "#e5e7eb",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-panel rounded-3xl border border-gray-700 p-6">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-lg font-black text-gray-100">
            Academic Metrics
          </h3>
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Score
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={academicData} margin={{ left: 6, right: 10 }}>
              <CartesianGrid stroke="rgba(156, 163, 175, 0.15)" />
              <XAxis
                dataKey="subject"
                tick={{ fill: "#cbd5e1", fontSize: 11 }}
                axisLine={{ stroke: "rgba(156, 163, 175, 0.25)" }}
                tickLine={{ stroke: "rgba(156, 163, 175, 0.25)" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                axisLine={{ stroke: "rgba(156, 163, 175, 0.25)" }}
                tickLine={{ stroke: "rgba(156, 163, 175, 0.25)" }}
              />
              <Tooltip
                cursor={{ fill: "rgba(59, 130, 246, 0.08)" }}
                contentStyle={{
                  background: "rgba(17, 24, 39, 0.92)",
                  border: "1px solid rgba(75, 85, 99, 0.55)",
                  borderRadius: 12,
                  color: "#e5e7eb",
                }}
              />
              <Bar
                dataKey="grade"
                fill="#8b5cf6"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

