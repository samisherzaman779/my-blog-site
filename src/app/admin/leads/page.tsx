import { client } from "@/sanity/lib/client";

async function getLeads() {
  const query = `*[_type == "lead"] | order(createdAt desc) { name, email, message, createdAt }`;
  return await client.fetch(query);
}

export default async function LeadsPage() {
  const leads = await getLeads();
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Client Leads</h1>
      <div className="space-y-4">
        {leads.map((lead: any, idx: number) => (
          <div key={idx} className="border p-4 rounded bg-white shadow">
            <p><b>Name:</b> {lead.name}</p>
            <p><b>Email:</b> {lead.email}</p>
            <p><b>Message:</b> {lead.message}</p>
            <p className="text-gray-400 text-sm">
              {new Date(lead.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
