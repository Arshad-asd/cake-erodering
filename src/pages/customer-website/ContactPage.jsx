import { useState } from "react"
import { Mail, Phone, Clock, MessageSquare, Headphones, Users, Cake, Plus, MapPin } from "lucide-react"
import CustomOrderModal from "../../components/modals/CustomOrderModal"

export default function ContactPage() {
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false)
  
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Order",
      description: "Quick and easy ordering",
      contact: "+91 70127 21379",
      availability: "24/7 for instant orders",
    },
    {
      icon: Phone,
      title: "Phone Orders",
      description: "Speak with our bakers",
      contact: "+91 70127 21379",
      availability: "Mon-Sat 8AM-8PM",
    },
    {
      icon: MapPin,
      title: "Visit Our Bakery",
      description: "Come see us in person",
      contact: "123 Glacé Street, Bakery City, BC 12345",
      availability: "Mon-Sat 8AM-8PM, Sun 9AM-6PM",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground mb-4">
            🎂 Ready to Order Your Perfect Cake
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Let's Create Something Glacé
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a special occasion coming up? Need a custom cake design? We'd love to help bring your Glacé dreams to life. 
            Contact us today to discuss your perfect cake!
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-pink-500" />
              <span className="text-sm text-muted-foreground">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cake className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-muted-foreground">Custom Designs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-rose-500" />
              <span className="text-sm text-muted-foreground">Family Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-lg p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-semibold text-lg mb-2 text-gray-900">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Tell Us About Your Dream Cake</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Describe your vision and we'll create the perfect cake for your special occasion. 
                  For immediate orders, use WhatsApp or call us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-600">Custom designs and flavors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Personalized messages and decorations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-600">Flexible delivery options</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6">
                    <Plus className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Create Your Custom Order</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out our detailed form to tell us exactly what you need. 
                    We'll get back to you with a quote and availability.
                  </p>
                  <button
                    onClick={() => setIsCustomOrderModalOpen(true)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 text-lg font-semibold rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Start Custom Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order Your Perfect Cake?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - let's create something Glacé together! Our bakers are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-500 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Browse Cakes
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-pink-500 transition-colors">
              WhatsApp Order
            </button>
          </div>
          <p className="text-sm mt-6 opacity-75">Questions? Call us at +91 70127 21379 or WhatsApp +91 70127 21379</p>
        </div>
      </section>

      {/* Custom Order Modal */}
      <CustomOrderModal 
        isOpen={isCustomOrderModalOpen}
        onClose={() => setIsCustomOrderModalOpen(false)}
      />
    </div>
  )
}
