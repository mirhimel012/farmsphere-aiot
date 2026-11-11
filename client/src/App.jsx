
import { Sprout, Cpu, Droplets, ShieldCheck } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
            <Sprout size={27} className="text-accent" />
          </div>

          <div className="text-left">
            <h1 className="text-xl font-bold tracking-wider">
              NESTQUORIX
            </h1>
            <p className="text-xs text-text-muted tracking-widest">
              FARMSPHERE AIoT V4
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-text-muted">
              SMART FARMING TECHNOLOGY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Intelligent Farming.
            <span className="block text-accent">
              Smarter Future.
            </span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            An integrated smart farming platform combining
            agriculture, animal care, water management and
            farm safety through intelligent IoT technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Sprout, name: "Agriculture" },
            { icon: Droplets, name: "Water System" },
            { icon: Cpu, name: "Automation" },
            { icon: ShieldCheck, name: "Farm Safety" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="glass glass-hover rounded-2xl p-5 flex flex-col items-center gap-3"
              >
                <Icon size={25} className="text-accent" />
                <span className="text-xs sm:text-sm font-medium text-text-muted">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-text-muted mt-12">
          Developed by Team NestQuorix
        </p>
      </div>
    </main>
  );
}

export default App;
