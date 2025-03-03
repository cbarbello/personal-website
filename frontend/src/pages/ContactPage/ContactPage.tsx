import React, { useState } from "react";
import { ContactFormData } from "../../types";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4 text-lg">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out using the form or through one
            of my social media profiles.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:caseyjbarbello@gmail.com"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span className="mr-2">✉️</span> caseyjbarbello@gmail.com
              </a>
              <a
                href="https://github.com/cbarbello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span className="mr-2">🐙</span> GitHub: @cbarbello
              </a>
              <a
                href="https://linkedin.com/in/cbarbello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span className="mr-2">💼</span> LinkedIn: Casey Barbello
              </a>
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            {status === "success" && (
              <div className="mb-4 bg-green-100 text-green-700 p-3 rounded">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
                Failed to send message. Please try again later.
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
