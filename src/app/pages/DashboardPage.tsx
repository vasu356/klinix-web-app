import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getSession, signOut } from "../utils/auth";
import { LayoutDashboard, Users, AlertTriangle, Shield, BarChart3, Settings, LogOut, ClipboardList, CheckCircle2, Clock, Zap, Bell, ChevronRight } from "lucide-react";

type Session = { email: string; practiceName: string; signedInAt: string };

const patientQueue = [
  { id: 1, name: "Maria Delgado", time: "9:00 AM", status: "complete", risk: "low", provider: "Dr. Chen" },
  { id: 2, name: "James Okafor", time: "9:30 AM", status: "complete", risk: "high", risk_note: "Penicillin allergy flagged", provider: "Dr. Patel" },
  { id: 3, name: "Aisha Rahman", time: "10:00 AM", status: "pending", risk: "medium", risk_note: "Incomplete medications", provider: "Dr. Chen" },
  { id: 4, name: "Tom Nguyen", time: "10:30 AM", status: "sent", risk: "none", provider: "Dr. Williams" },
  { id: 5, name: "Sandra Liu", time: "11:00 AM", status: "complete", risk: "low", provider: "Dr. Patel" },
];

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Users, label: "Patients" },
  { icon: ClipboardList, label: "Intake forms" },
  { icon: AlertTriangle, label: "Alerts", badge: "3" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Compliance" },
  { icon: Settings, label: "Settings" },
];

const riskColors: Record<string, string> = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-emerald-100 text-emerald-700 border-emerald-200",
  none: "bg-slate-100 text-slate-500 border-slate-200",
};

const statusColors: Record<string, string> = {
  complete: "text-emerald-600",
  pending: "text-amber-600",
  sent: "text-sky-600",
};

const statusLabels: Record<string, string> = {
  complete: "Complete",
  pending: "In progress",
  sent: "Link sent",
};

export function DashboardPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s) { navigate("/signin"); return; }
    setSession(s);
  }, [navigate]);

  const handleSignOut = () => { signOut(); navigate("/signin"); };

  if (!session) return null;

  const complete = patientQueue.filter((p) => p.status === "complete").length;
  const alerts = patientQueue.filter((p) => p.risk === "high" || p.risk === "medium").length;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-white border-r border-border flex flex-col transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/" className="text-xl font-semibold text-foreground">Klinix</Link>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((l) => {
            const Icon = l.icon;
            return (
              <button key={l.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${l.active ? "bg-primary/10 text-primary" : "text-foreground/60 hover:bg-muted hover:text-foreground"}`}>
                <Icon className="w-4 h-4 shrink-0" />
                <span className="flex-1 text-left">{l.label}</span>
                {l.badge && <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">{l.badge}</span>}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
              {session.practiceName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-foreground truncate">{session.practiceName}</p>
              <p className="text-xs text-muted-foreground truncate">{session.email}</p>
            </div>
          </div>
          <button onClick={handleSignOut} className="mt-2 w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/60 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="w-4 h-4" />Sign out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="lg:hidden fixed inset-0 z-30 bg-black/30" onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <div className="lg:pl-60 flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-border flex items-center px-6 gap-4 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-1.5 rounded-lg text-foreground/60 hover:bg-muted">
            <LayoutDashboard className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Dashboard</h1>
            <p className="text-xs text-muted-foreground">Today — {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-muted transition-colors text-foreground/60">
              <Bell className="w-4 h-4" />
              {alerts > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
            </button>
            <Link to="/" className="text-xs font-medium text-foreground/60 hover:text-foreground transition-colors hidden sm:block">← Back to site</Link>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Good morning, {session.practiceName} 👋</h2>
            <p className="text-sm text-muted-foreground mt-1">Here's today's intake status at a glance.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Patients today", value: patientQueue.length.toString(), color: "text-foreground" },
              { icon: CheckCircle2, label: "Forms complete", value: `${complete}/${patientQueue.length}`, color: "text-emerald-600" },
              { icon: AlertTriangle, label: "Active alerts", value: alerts.toString(), color: "text-red-600" },
              { icon: Zap, label: "Sync status", value: "Live", color: "text-primary" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-border bg-white p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-4 h-4 ${s.color}`} />
                    <Clock className="w-3.5 h-3.5 text-muted-foreground/50" />
                  </div>
                  <div className={`text-2xl font-bold ${s.color} mb-1`}>{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            {/* Patient queue */}
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-foreground text-sm">Today's patient queue</h3>
                <span className="text-xs text-muted-foreground">{patientQueue.length} patients</span>
              </div>
              <div className="divide-y divide-border">
                {patientQueue.map((p) => (
                  <div key={p.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
                      {p.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.time} · {p.provider}</p>
                      {p.risk_note && <p className="text-xs text-red-600 mt-0.5">{p.risk_note}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.risk !== "none" && (
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${riskColors[p.risk]}`}>
                          {p.risk} risk
                        </span>
                      )}
                      <span className={`text-xs font-semibold ${statusColors[p.status]}`}>{statusLabels[p.status]}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="space-y-4">
              {/* Alerts */}
              <div className="rounded-2xl border border-border bg-white overflow-hidden">
                <div className="px-5 py-4 border-b border-border">
                  <h3 className="font-semibold text-foreground text-sm">Active alerts</h3>
                </div>
                <div className="divide-y divide-border">
                  {patientQueue.filter((p) => p.risk === "high" || p.risk === "medium").map((p) => (
                    <div key={p.id} className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${p.risk === "high" ? "text-red-500" : "text-amber-500"}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{p.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{p.risk_note}</p>
                          <p className="text-xs text-muted-foreground">{p.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="font-semibold text-foreground text-sm mb-4">Form completion</h3>
                <div className="space-y-3">
                  {[
                    { label: "Complete", count: complete, total: patientQueue.length, color: "bg-emerald-500" },
                    { label: "In progress", count: 1, total: patientQueue.length, color: "bg-amber-400" },
                    { label: "Awaiting", count: 1, total: patientQueue.length, color: "bg-sky-400" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-foreground/70">{row.label}</span>
                        <span className="font-semibold text-foreground">{row.count}/{row.total}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full rounded-full ${row.color}`} style={{ width: `${(row.count / row.total) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security note */}
              <div className="rounded-2xl border border-border bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Demo mode active</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Patient data above is illustrative. Your real clinic data would be pulled from your connected PMS via the Klinix sync engine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
