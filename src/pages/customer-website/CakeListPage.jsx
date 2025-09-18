import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, Star, ShoppingCart, Plus } from "lucide-react"
import CustomOrderModal from "../../components/modals/CustomOrderModal"

// Import cake images
import whiteForestImage from "../../assets/cakes-images/whiteforrest.png"
import blackForestImage from "../../assets/cakes-images/blackforest.png"
import redVelvetImage from "../../assets/cakes-images/redvelvet.png"
import chocolateTruffleImage from "../../assets/cakes-images/Chocolatetruffle.png"
import vanchoImage from "../../assets/cakes-images/Vancho.png"
import whiteTruffleImage from "../../assets/cakes-images/Whitetruffle.png"
import butterscotchImage from "../../assets/cakes-images/butterscotch.png"
import nutyBubbleImage from "../../assets/cakes-images/Nutybubble.png"
import rainbowImage from "../../assets/cakes-images/rainbow.png"
import dreamCakeImage from "../../assets/cakes-images/dreamcake.png"

export default function CakeListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false)

  // Actual cake data with Indian prices
  const cakes = [
    {
      id: 1,
      name: "White Forest",
      category: "birthday",
      price: 650,
      size: "1 kg",
      rating: 4.9,
      image: whiteForestImage,
      description: "Classic white forest cake with layers of vanilla sponge, whipped cream, and cherry filling",
      flavors: ["Vanilla", "Cherry", "Whipped Cream"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 2,
      name: "Black Forest",
      category: "birthday",
      price: 650,
      size: "1 kg",
      rating: 4.8,
      image: blackForestImage,
      description: "Traditional German black forest cake with chocolate sponge, whipped cream, and cherry filling",
      flavors: ["Chocolate", "Cherry", "Whipped Cream"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 3,
      name: "Red Velvet",
      category: "anniversary",
      price: 850,
      size: "1 kg",
      rating: 4.9,
      image: redVelvetImage,
      description: "Classic red velvet cake with cream cheese frosting and red velvet sponge",
      flavors: ["Red Velvet", "Cream Cheese"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 4,
      name: "Chocolate Truffle",
      category: "celebration",
      price: 850,
      size: "1 kg",
      rating: 4.9,
      image: chocolateTruffleImage,
      description: "Rich chocolate truffle cake with layers of chocolate sponge and truffle cream",
      flavors: ["Chocolate", "Truffle Cream"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 5,
      name: "Vancho",
      category: "birthday",
      price: 850,
      size: "1 kg",
      rating: 4.8,
      image: vanchoImage,
      description: "Vanilla and chocolate combination cake with layers of both flavors",
      flavors: ["Vanilla", "Chocolate"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 6,
      name: "White Truffle",
      category: "wedding",
      price: 650,
      size: "1 kg",
      rating: 4.9,
      image: whiteTruffleImage,
      description: "Elegant white truffle cake with vanilla sponge and white chocolate truffle cream",
      flavors: ["Vanilla", "White Chocolate", "Truffle Cream"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 7,
      name: "Butter Scotch",
      category: "celebration",
      price: 850,
      size: "1 kg",
      rating: 4.8,
      image: butterscotchImage,
      description: "Rich butterscotch cake with caramelized sugar and butterscotch cream",
      flavors: ["Butterscotch", "Caramel", "Vanilla"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 8,
      name: "Nuty Bubble",
      category: "birthday",
      price: 850,
      size: "1 kg",
      rating: 4.7,
      image: nutyBubbleImage,
      description: "Nutty cake with bubble texture and mixed nuts",
      flavors: ["Mixed Nuts", "Vanilla", "Cream"],
      serves: "8-10 people",
      delivery: "Same day available"
    },
    {
      id: 9,
      name: "Rainbow",
      category: "celebration",
      price: 1250,
      size: "1 kg",
      rating: 4.9,
      image: rainbowImage,
      description: "Colorful rainbow cake with layers of different colored sponge",
      flavors: ["Vanilla", "Rainbow Colors"],
      serves: "10-12 people",
      delivery: "Same day available"
    },
    {
      id: 10,
      name: "Dream Cake",
      category: "wedding",
      price: 1200,
      size: "1 kg",
      rating: 4.9,
      image: dreamCakeImage,
      description: "Premium dream cake with multiple layers and luxurious toppings",
      flavors: ["Mixed Flavors", "Premium Fillings"],
      serves: "12-15 people",
      delivery: "Same day available"
    }
  ]

  const categories = [
    { value: "all", label: "All Cakes" },
    { value: "birthday", label: "Birthday" },
    { value: "wedding", label: "Wedding" },
    { value: "anniversary", label: "Anniversary" },
    { value: "celebration", label: "Celebration" }
  ]

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under-500", label: "Under ₹500" },
    { value: "500-1000", label: "₹500 - ₹1000" },
    { value: "over-1000", label: "Over ₹1000" }
  ]

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" }
  ]

  // Filter and sort cakes
  const filteredCakes = cakes
    .filter(cake => {
      const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cake.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || cake.category === selectedCategory
      const matchesPrice = selectedPriceRange === "all" || 
        (selectedPriceRange === "under-500" && cake.price < 500) ||
        (selectedPriceRange === "500-1000" && cake.price >= 500 && cake.price <= 1000) ||
        (selectedPriceRange === "over-1000" && cake.price > 1000)
      
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Delicious Cakes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of handcrafted cakes made with love and the finest ingredients
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search cakes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>

                {/* Price Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Custom Order Row */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-muted-foreground">Need something custom?</span>
              <button
                onClick={() => setIsCustomOrderModalOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Custom Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cake Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredCakes.length} of {cakes.length} cakes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCakes.map((cake) => (
              <div
                key={cake.id}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Cake Image */}
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Cake Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-pink-600 transition-colors">
                      {cake.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {cake.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(cake.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      {cake.rating} ({cake.serves})
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-2xl font-bold text-pink-600">
                        ₹{cake.price}
                      </div>
                      <div className="text-sm font-medium text-foreground bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-full">
                        {cake.size}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {cake.delivery}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cake.flavors.map((flavor, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 text-xs rounded-full"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      to={`/cakes/${cake.id}`}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-4 rounded-md text-sm font-medium transition-colors text-center block"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCakes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No cakes found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedPriceRange("all")
                  setSortBy("popular")
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
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
