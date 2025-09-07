// src/app/services/web-scraping/page.tsx

export default function WebScrapingPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-700 ">
        Web Scraping Services
      </h1>

      {/* Intro */}
      <p className=" mb-6 leading-relaxed">
        At <span className="font-semibold">TechXiz-Solutions</span>, we provide secure and 
        scalable web scraping solutions that allow businesses to collect valuable data 
        from online sources. Whether you want competitor insights, e-commerce pricing data, 
        or lead generation, our scraping tools help you turn raw data into actionable insights.
      </p>

      {/* Key Features */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Key Features of Our Web Scraping Services
      </h2>
      <ul className="list-disc pl-6 space-y-3 ">
        <li>
          <span className="font-medium">E-commerce Data Extraction:</span> Monitor pricing, 
          product availability, and customer reviews across multiple platforms.
        </li>
        <li>
          <span className="font-medium">Market & Competitor Research:</span> Gain insights 
          into competitor strategies, product launches, and trends.
        </li>
        <li>
          <span className="font-medium">Lead Generation:</span> Extract business contacts 
          and potential leads from directories, job boards, and social platforms.
        </li>
        <li>
          <span className="font-medium">Custom Scraping Solutions:</span> Tailored scrapers 
          built specifically for your industry and use case.
        </li>
        <li>
          <span className="font-medium">Structured Data Delivery:</span> Clean and 
          organized data in CSV, Excel, or API format.
        </li>
        <li>
          <span className="font-medium">Compliance & Security:</span> Ethical scraping 
          practices with IP rotation, captcha solving, and anti-blocking measures.
        </li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Benefits for Your Business
      </h2>
      <p className=" mb-4 leading-relaxed">
        With our web scraping services, you can make data-driven decisions faster 
        and more accurately. Key benefits include:
      </p>
      <ul className="list-disc pl-6 space-y-3 ">
        <li>Stay ahead of competitors by tracking their strategies in real time.</li>
        <li>Reduce manual research and data entry efforts.</li>
        <li>Access accurate, large-scale datasets for analytics and reporting.</li>
        <li>Identify new opportunities through market and consumer insights.</li>
        <li>Improve ROI by leveraging data to guide business strategies.</li>
      </ul>

      {/* Use Cases */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Real-World Use Cases
      </h2>
      <ul className="list-disc pl-6 space-y-3 ">
        <li>
          <span className="font-medium">Retail & E-commerce:</span> Track competitor 
          pricing, stock levels, and customer sentiment.
        </li>
        <li>
          <span className="font-medium">Finance:</span> Collect financial news, stock data, 
          and market trends for investment analysis.
        </li>
        <li>
          <span className="font-medium">Travel Industry:</span> Monitor flight prices, 
          hotel rates, and booking availability in real time.
        </li>
        <li>
          <span className="font-medium">Recruitment:</span> Extract job postings, salary 
          data, and candidate information from job boards.
        </li>
        <li>
          <span className="font-medium">Real Estate:</span> Collect property listings, 
          rental trends, and pricing data from housing portals.
        </li>
      </ul>

      {/* Closing */}
      <p className="mt-10 leading-relaxed">
        Data is the new oil of the digital age. With our web scraping services, you’ll 
        have the power to extract, process, and analyze information that fuels smarter 
        business decisions. Let us help you unlock insights and stay one step ahead 
        in your industry.
      </p>
    </div>
  );
}
