const services = [
    {
      title: "Web Development",
      desc: "Modern, fast, and responsive websites using Next.js, React, and TailwindCSS.",
      icon: "💻",
    },
    {
      title: "AI Automation",
      desc: "Integrating AI tools to automate your business tasks and improve efficiency.",
      icon: "🤖",
    },
    {
      title: "E-commerce Solutions",
      desc: "Custom e-commerce platforms with payment gateway integration.",
      icon: "🛒",
    },
  ]
  
  export default function Services() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  