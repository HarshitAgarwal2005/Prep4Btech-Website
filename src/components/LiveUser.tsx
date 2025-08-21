import { useState } from "react";
import emailjs from "emailjs-com";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [motivationalQuote, setMotivationalQuote] = useState("Thanks for joining us! 🚀");

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",    // 🔹 Service ID from EmailJS
        "your_template_id",   // 🔹 Template ID from EmailJS
        { subscriber_email: email }, // data you pass to template
        "your_public_key"     // 🔹 Public Key from EmailJS
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.status, res.text);
          setIsSubscribed(true);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Try again!");
        }
      );
  };

  return (
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated! 📚</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified about new study materials, assignments, and project ideas. 
              Join our community of successful B.Tech students! 🚀
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                <div className="text-green-300 text-xl font-bold mb-4">✅ Subscribed!</div>
                <div className="text-green-100 text-sm italic leading-relaxed">
                  "{motivationalQuote}"
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
