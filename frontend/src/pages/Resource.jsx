import React, { useState, useEffect } from "react";
import api from "../service/api"; // Your backend connection

export default function Resource() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fallback data in case your MongoDB 'resources' collection is empty
  const fallbackResources = [
    {
      title: "Disability Rights in India",
      description: "Learn about important rights, protections, and legal provisions for persons with disabilities.",
      type: "Article",
    },
    {
      title: "RightsQuest Learning Guide",
      description: "Explore simple explanations of disability rights and accessibility.",
      type: "Guide",
    },
    {
      title: "Accessibility Resources",
      description: "Find useful information about accessibility, inclusion, and support.",
      type: "Resource",
    },
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Fetch from your Node.js backend: /api/resources
        const response = await api.get("/resources");
        const data = response.data;

        // Check if backend returned an array of resources
        if (Array.isArray(data) && data.length > 0) {
          setResources(data);
        } else if (data.resources && Array.isArray(data.resources) && data.resources.length > 0) {
          setResources(data.resources);
        } else {
          // If database is empty, use the static array
          setResources(fallbackResources);
        }
      } catch (err) {
        console.error("Error fetching resources:", err);
        setError("Offline mode: Showing default resources.");
        setResources(fallbackResources);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <div className="resource-page text-center py-10">
        <h1 className="text-2xl font-bold">Resources</h1>
        <p>Loading resources from database...</p>
      </div>
    );
  }

  return (
    <div className="resource-page">
      <div className="resource-header">
        <h1>Resources</h1>
        <p>
          Explore helpful resources to learn more about disability rights,
          accessibility, and inclusion.
        </p>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </div>

      <div className="resource-grid">
        {resources.map((resource, index) => (
          // Use MongoDB _id if available, fallback to array index
          <div className="resource-card" key={resource._id || index}>
            <span className="resource-type">
              {resource.type || resource.category || "Article"}
            </span>

            <h2>{resource.title}</h2>

            <p>{resource.description}</p>

            <button 
              type="button"
              onClick={() => {
                if (resource.url || resource.link) {
                  window.open(resource.url || resource.link, "_blank");
                } else {
                  alert("Resource details coming soon!");
                }
              }}
            >
              Explore Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}