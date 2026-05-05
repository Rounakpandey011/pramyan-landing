import { useEffect, useState } from "react";

type Lead = {
  _id: string;
  parentName: string;
  mobile: string;
  email: string;
  studentClass: string;
  sendUpdates: boolean;
  createdAt: string;
};

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/leads`);
        if (!res.ok) throw new Error("Failed to fetch leads");
        const data = await res.json();
        setLeads(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-teal-700 tracking-widest uppercase">
              Admin
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
              Lead Submissions
            </h1>
            <p className="text-slate-500 mt-2">
              All form entries — newest first.
            </p>
          </div>
          <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-700">
            Total: {leads.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-600">
              <p className="font-semibold">Error: {error}</p>
              <p className="text-sm text-slate-500 mt-2">
                Check that the backend is running and reachable.
              </p>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No leads yet. Submissions will appear here.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    <th className="text-left px-6 py-3">Date</th>
                    <th className="text-left px-6 py-3">Parent</th>
                    <th className="text-left px-6 py-3">Mobile</th>
                    <th className="text-left px-6 py-3">Email</th>
                    <th className="text-left px-6 py-3">Class</th>
                    <th className="text-center px-6 py-3">Updates?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {lead.parentName}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700 font-mono">
                        {lead.mobile}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {lead.studentClass}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {lead.sendUpdates ? (
                          <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                            Yes
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                            No
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leads;
