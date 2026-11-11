
import {
  Activity,
  Droplets,
  Fish,
  Settings,
} from "lucide-react";

const icons = {
  system: Activity,
  feeding: Fish,
  water: Droplets,
  settings: Settings,
};

export default function RecentActivity({ activities = [] }) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="font-semibold">Recent Activity</h2>
        <p className="mt-1 text-xs text-text-muted">
          Latest system events · Demo records
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = icons[activity.type] || Activity;

          return (
            <div key={activity.id} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                <Icon size={17} className="text-accent" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold">
                    {activity.title}
                  </h3>

                  <span className="text-[10px] text-text-muted">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-text-muted">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
