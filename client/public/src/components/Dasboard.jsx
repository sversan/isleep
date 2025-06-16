import { useQuery } from '@tanstack/react-query';
import { fetchOverview } from '../api/healthApi';

export default function Dashboard() {
  const { data, isLoading, error } = useQuery(['overview'], fetchOverview);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading data</div>;

  const { heartRate, steps, sleep, stress } = data;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Today's Metrics</h2>
      <ul className="space-y-2 text-lg">
        <li>❤️ Heart Rate: {heartRate ?? 'N/A'}</li>
        <li>👟 Steps: {steps}</li>
        <li>😴 Sleep: {sleep ? `${sleep.hours}h (${sleep.quality})` : 'N/A'}</li>
        <li>🧠 Stress Level: {stress ?? 'N/A'}</li>
      </ul>
    </div>
  );
}
