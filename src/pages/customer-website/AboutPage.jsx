import { useState } from "react"
import { Users, Target, Heart, Lightbulb, Globe, Cake, Award, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import CustomOrderModal from "../../components/modals/CustomOrderModal"
import aboutSectionImage from "../../assets/about/about-section.png"

export default function AboutPage() {
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false)
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake is crafted with passion and attention to detail, just like home",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients and traditional baking techniques",
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Three generations of bakers bringing you time-tested recipes and new innovations",
    },
    {
      icon: Globe,
      title: "Local & Fresh",
      description: "Supporting local farmers and suppliers for the freshest ingredients possible",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground mb-4">
              🎂 Family Bakery Since 2023
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Glacé Delight Made Real
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 1 years, we've been creating beautiful, delicious cakes that make every celebration special. 
              From our family kitchen to yours, we bring joy through every bite.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">50+</div>
                <div className="text-muted-foreground">Cakes Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">1+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500 mb-2">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create the most beautiful and delicious cakes that bring joy to every celebration, 
                from intimate family gatherings to grand wedding receptions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every special moment deserves a perfect cake, and we're committed to 
                making that dream a reality with our artisanal craftsmanship and attention to detail.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden">
                <img 
                  src={aboutSectionImage} 
                  alt="About our bakery - Glacé Delight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-lg p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Sweet Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to make your celebration extra special? Browse our cakes or tell us about your custom vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cakes" className="bg-white text-pink-500 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors text-center">
              Browse Cakes
            </Link>
            <button 
              onClick={() => setIsCustomOrderModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-pink-500 transition-colors"
            >
              Custom Order
            </button>
          </div>
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
