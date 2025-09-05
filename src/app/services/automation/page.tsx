export default function AutomationPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Automation Services
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        At <span className="font-semibold">TechXiz-Solutions</span>, we empower businesses 
        with automation solutions that save time, reduce costs, and eliminate repetitive 
        manual tasks. By leveraging cutting-edge tools and workflows, we help your 
        organization focus on growth while automation handles the routine.
      </p>

      {/* Key Features */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
        Key Features of Our Automation Services
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
        <li>
          <span className="font-medium">Business Process Automation (BPA):</span> Streamline 
          internal workflows, approvals, and data management with customized automation.
        </li>
        <li>
          <span className="font-medium">Email & Social Media Automation:</span> Schedule, track, 
          and optimize marketing campaigns with AI-driven insights.
        </li>
        <li>
          <span className="font-medium">CRM and Sales Pipeline Automation:</span> Automate lead 
          nurturing, follow-ups, and reporting for higher conversion rates.
        </li>
        <li>
          <span className="font-medium">API & Tool Integrations:</span> Connect your favorite 
          apps (Slack, Zapier, Google Workspace, etc.) for seamless workflows.
        </li>
        <li>
          <span className="font-medium">Robotic Process Automation (RPA):</span> Deploy bots to 
          handle repetitive tasks such as data entry, invoice processing, and report generation.
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
        Benefits for Your Business
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Our automation solutions are designed to deliver real, measurable outcomes:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
        <li>Save hours of manual work each week.</li>
        <li>Reduce human error with accurate automated processes.</li>
        <li>Increase team productivity and focus on high-value tasks.</li>
        <li>Accelerate decision-making with real-time updates and reports.</li>
        <li>Improve ROI by optimizing workflows and reducing operational costs.</li>
      </ul>

      {/* Use Cases */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
        Real-World Use Cases
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
        <li>
          <span className="font-medium">E-commerce:</span> Automate order processing, 
          inventory management, and customer emails.
        </li>
        <li>
          <span className="font-medium">Finance:</span> Automate invoice creation, 
          expense tracking, and compliance reporting.
        </li>
        <li>
          <span className="font-medium">Healthcare:</span> Patient appointment scheduling, 
          reminders, and digital record management.
        </li>
        <li>
          <span className="font-medium">HR & Recruitment:</span> Resume screening, 
          candidate follow-ups, and employee onboarding workflows.
        </li>
        <li>
          <span className="font-medium">Marketing:</span> Multi-channel campaign automation, 
          A/B testing, and performance tracking.
        </li>
      </ul>

      {/* Closing Statement */}
      <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
        With automation, your business can shift from managing repetitive tasks to focusing 
        on innovation, customer experience, and strategic growth. Let us design intelligent 
        workflows that scale with your ambitions.
      </p>
    </div>
  );
}
