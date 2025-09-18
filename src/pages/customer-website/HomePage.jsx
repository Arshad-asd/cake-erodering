import { useState } from "react"
import { ArrowRight, Star, Users, TrendingUp, Shield, Clock, Heart, Cake } from "lucide-react"
import { Link } from "react-router-dom"
import CustomOrderModal from "../../components/modals/CustomOrderModal"
import homeBannerImage from "../../assets/home/home-banner.png"
import homeBannerMobileImage from "../../assets/home/home-banner-mobileview.png"

export default function HomePage() {
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false)
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url(${homeBannerImage})`
          }}
        />
        {/* Background Image - Mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
          style={{
            backgroundImage: `url(${homeBannerMobileImage})`
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-4">
              🎂 Fresh Daily • Custom Orders Available
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Delicious Cakes Made with Love
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Order premium custom cakes, cupcakes, and desserts for any occasion. Fresh ingredients, 
              beautiful designs, and delivered with care. Making your celebrations sweeter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/cakes" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center">
                Browse Cakes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setIsCustomOrderModalOpen(true)}
                className="border-2 border-input bg-background px-8 py-4 text-lg font-semibold rounded-full hover:bg-accent transition-colors"
              >
                Custom Order
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80">50+ happy customers</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-white/80 ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Happy Customers" },
              { icon: Cake, value: "50+", label: "Cakes Delivered" },
              { icon: Clock, value: "24hrs", label: "Fresh Daily" },
              { icon: Heart, value: "100%", label: "Made with Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Cakes?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality cakes made with the finest ingredients and artistic designs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎂",
                title: "Custom Designs",
                description: "Personalized cakes for every occasion with unique designs and decorations",
                features: ["Birthday cakes", "Wedding cakes", "Anniversary specials"],
              },
              {
                icon: "🌱",
                title: "Fresh Ingredients",
                description: "Made daily with premium, locally-sourced ingredients for the best taste",
                features: ["Organic flour", "Fresh cream", "Natural flavors"],
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Quick and safe delivery to your doorstep with care and attention",
                features: ["Same day delivery", "Careful packaging", "Free delivery"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 hover:-translate-y-2 rounded-lg p-8"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/cakes">
              <button className="border border-input bg-background px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors group flex items-center mx-auto">
                Browse All Cakes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Loved by Cake Enthusiasts Everywhere</h2>
            <p className="text-xl text-muted-foreground">See what our customers have to say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Birthday Party Host",
                content:
                  "The birthday cake for my daughter was absolutely perfect! The design was exactly what we wanted and it tasted amazing. Will definitely order again!",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Wedding Planner",
                content:
                  "We've used their wedding cakes for multiple events. The quality is consistently excellent and the delivery is always on time. Highly recommended!",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                role: "Corporate Event Organizer",
                content:
                  "Ordered 50 cupcakes for our office party and everyone loved them! The variety of flavors and the beautiful presentation made our event special.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 border-0 rounded-lg p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order Your Perfect Cake?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Browse our collection and place your order today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cakes" className="bg-white text-pink-500 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Browse Cakes
            </Link>
            <button 
              onClick={() => setIsCustomOrderModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-pink-500 transition-colors"
            >
              Custom Order
            </button>
          </div>
          <p className="text-sm mt-6 opacity-75">Fresh daily • Free delivery • Custom designs available</p>
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
