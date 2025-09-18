import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Star, MessageCircle, Clock, Users, Truck, Shield, Check, Calendar, X, User, Phone } from "lucide-react"

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

export default function CakeDetailPage() {
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState("medium")
  const [selectedShape, setSelectedShape] = useState("round")
  const [quantity, setQuantity] = useState(1)
  const [deliveryDate, setDeliveryDate] = useState("")
  const [isCustomerInfoModalOpen, setIsCustomerInfoModalOpen] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    mobile: "",
    occasion: "",
    engravingText: ""
  })

  // Actual cake data with Indian prices
  const cakeData = {
    1: {
      id: 1,
      name: "White Forest",
      category: "birthday",
      price: 650,
      rating: 4.9,
      reviews: 127,
      image: whiteForestImage,
      description: "Classic white forest cake with layers of vanilla sponge, whipped cream, and cherry filling. Perfect for any celebration!",
      longDescription: "This elegant white forest cake features layers of moist vanilla sponge cake filled with fresh whipped cream and cherry compote. Topped with white chocolate shavings and fresh cherries, it's a timeless favorite that never goes out of style.",
      flavors: ["Vanilla", "Cherry", "Whipped Cream"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Premium vanilla extract", "Fresh cream", "Cherry compote", "Organic flour", "Free-range eggs", "White chocolate"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 350, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 650, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1300, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [ 
        "Personal message on cake",
        "Custom decorations",
        "Additional cherry toppings",
        "Special dietary requirements"
      ]
    },
    2: {
      id: 2,
      name: "Black Forest",
      category: "birthday",
      price: 350,
      rating: 4.8,
      reviews: 89,
      image: blackForestImage,
      description: "Traditional German black forest cake with chocolate sponge, whipped cream, and cherry filling",
      longDescription: "Our signature black forest cake features layers of rich chocolate sponge cake soaked in cherry liqueur, filled with whipped cream and cherry compote. Topped with chocolate shavings and fresh cherries, it's a decadent treat for chocolate lovers.",
      flavors: ["Chocolate", "Cherry", "Whipped Cream"],
      serves: "6-8 people",
      delivery: "Same day available",
      ingredients: ["Premium cocoa powder", "Fresh cream", "Cherry compote", "Organic flour", "Free-range eggs", "Dark chocolate"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 350, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 650, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1300, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional cherry toppings",
        "Special dietary requirements"
      ]
    },
    3: {
      id: 3,
      name: "Red Velvet",
      category: "anniversary",
      price: 850,
      rating: 4.9,
      reviews: 156,
      image: redVelvetImage,
      description: "Classic red velvet cake with cream cheese frosting and red velvet sponge",
      longDescription: "This stunning red velvet cake features layers of moist red velvet sponge cake with our signature cream cheese frosting. The perfect balance of sweetness and tanginess makes it a favorite for special occasions.",
      flavors: ["Red Velvet", "Cream Cheese"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Premium cocoa powder", "Cream cheese", "Buttermilk", "Organic flour", "Free-range eggs", "Red food coloring"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 450, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 850, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1650, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional cream cheese frosting",
        "Special dietary requirements"
      ]
    },
    4: {
      id: 4,
      name: "Chocolate Truffle",
      category: "celebration",
      price: 850,
      rating: 4.9,
      reviews: 203,
      image: chocolateTruffleImage,
      description: "Rich chocolate truffle cake with layers of chocolate sponge and truffle cream",
      longDescription: "Indulge in our premium chocolate truffle cake featuring layers of moist chocolate sponge cake filled with rich chocolate truffle cream. Topped with chocolate ganache and chocolate shavings, it's a chocolate lover's paradise.",
      flavors: ["Chocolate", "Truffle Cream"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Premium Belgian chocolate", "Heavy cream", "Cocoa powder", "Organic flour", "Free-range eggs", "Vanilla extract"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 450, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 850, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1700, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional chocolate toppings",
        "Special dietary requirements"
      ]
    },
    5: {
      id: 5,
      name: "Vancho",
      category: "birthday",
      price: 850,
      rating: 4.8,
      reviews: 134,
      image: vanchoImage,
      description: "Vanilla and chocolate combination cake with layers of both flavors",
      longDescription: "Our signature Vancho cake combines the best of both worlds - vanilla and chocolate. Layers of vanilla and chocolate sponge cake with alternating vanilla and chocolate cream fillings create a perfect harmony of flavors.",
      flavors: ["Vanilla", "Chocolate"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Premium vanilla extract", "Cocoa powder", "Fresh cream", "Organic flour", "Free-range eggs", "Butter"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 450, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 850, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1700, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional toppings",
        "Special dietary requirements"
      ]
    },
    6: {
      id: 6,
      name: "White Truffle",
      category: "wedding",
      price: 650,
      rating: 4.9,
      reviews: 98,
      image: whiteTruffleImage,
      description: "Elegant white truffle cake with vanilla sponge and white chocolate truffle cream",
      longDescription: "This sophisticated white truffle cake features layers of delicate vanilla sponge cake filled with rich white chocolate truffle cream. Topped with white chocolate shavings and edible flowers, it's perfect for elegant celebrations.",
      flavors: ["Vanilla", "White Chocolate", "Truffle Cream"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Premium white chocolate", "Vanilla extract", "Heavy cream", "Organic flour", "Free-range eggs", "Butter"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 350, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 650, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1300, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Edible flowers",
        "Special dietary requirements"
      ]
    },
    7: {
      id: 7,
      name: "Butter Scotch",
      category: "celebration",
      price: 850,
      rating: 4.8,
      reviews: 167,
      image: butterscotchImage,
      description: "Rich butterscotch cake with caramelized sugar and butterscotch cream",
      longDescription: "Indulge in our decadent butterscotch cake featuring layers of vanilla sponge cake filled with rich butterscotch cream and caramelized sugar. Topped with butterscotch sauce and caramel shavings, it's a sweet treat for any occasion.",
      flavors: ["Butterscotch", "Caramel", "Vanilla"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Brown sugar", "Butter", "Heavy cream", "Vanilla extract", "Organic flour", "Free-range eggs"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 450, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 850, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1700, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional butterscotch sauce",
        "Special dietary requirements"
      ]
    },
    8: {
      id: 8,
      name: "Nuty Bubble",
      category: "birthday",
      price: 850,
      rating: 4.7,
      reviews: 89,
      image: nutyBubbleImage,
      description: "Nutty cake with bubble texture and mixed nuts",
      longDescription: "Our unique Nuty Bubble cake features a special bubble-textured sponge cake filled with mixed nuts and cream. The combination of textures and nutty flavors creates an unforgettable taste experience.",
      flavors: ["Mixed Nuts", "Vanilla", "Cream"],
      serves: "8-10 people",
      delivery: "Same day available",
      ingredients: ["Mixed nuts", "Vanilla extract", "Fresh cream", "Organic flour", "Free-range eggs", "Sugar"],
      allergens: ["Gluten", "Dairy", "Eggs", "Nuts"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 450, serves: "4-6 people" },
        { name: "medium", label: "1 kg", price: 850, serves: "8-10 people" },
        { name: "large", label: "2 kg", price: 1700, serves: "15-20 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional nut toppings",
        "Special dietary requirements"
      ]
    },
    9: {
      id: 9,
      name: "Rainbow",
      category: "celebration",
      price: 1250,
      rating: 4.9,
      reviews: 245,
      image: rainbowImage,
      description: "Colorful rainbow cake with layers of different colored sponge",
      longDescription: "Bring joy to any celebration with our vibrant rainbow cake! Features layers of colorful vanilla sponge cake in rainbow colors, filled with vanilla cream. Perfect for birthdays, pride celebrations, and any colorful occasion.",
      flavors: ["Vanilla", "Rainbow Colors"],
      serves: "10-12 people",
      delivery: "Same day available",
      ingredients: ["Vanilla extract", "Food coloring", "Fresh cream", "Organic flour", "Free-range eggs", "Butter"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "small", label: "1/2 kg", price: 650, serves: "6-8 people" },
        { name: "medium", label: "1 kg", price: 1250, serves: "10-12 people" },
        { name: "large", label: "2 kg", price: 2500, serves: "20-25 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Custom decorations",
        "Additional rainbow toppings",
        "Special dietary requirements"
      ]
    },
    10: {
      id: 10,
      name: "Dream Cake",
      category: "wedding",
      price: 1200,
      rating: 4.9,
      reviews: 189,
      image: dreamCakeImage,
      description: "Premium dream cake with multiple layers and luxurious toppings",
      longDescription: "Our signature Dream Cake is a masterpiece of flavors and textures. Features multiple layers of different flavored sponge cakes with premium fillings, topped with luxurious decorations. Perfect for the most special occasions.",
      flavors: ["Mixed Flavors", "Premium Fillings"],
      serves: "12-15 people",
      delivery: "Same day available",
      ingredients: ["Premium ingredients", "Mixed flavors", "Luxury fillings", "Organic flour", "Free-range eggs", "Premium toppings"],
      allergens: ["Gluten", "Dairy", "Eggs"],
      sizes: [
        { name: "mini", label: "250g", price: 300, serves: "2-3 people" },
        { name: "small", label: "1/2 kg", price: 600, serves: "6-8 people" },
        { name: "medium", label: "1 kg", price: 1200, serves: "12-15 people" },
        { name: "large", label: "2 kg", price: 2400, serves: "25-30 people" }
      ],
      deliveryOptions: [
        { type: "pickup", label: "Store Pickup", time: "Ready in 2-4 hours", cost: "Free" },
        { type: "delivery", label: "Home Delivery", time: "Same day delivery", cost: "₹50" },
        { type: "express", label: "Express Delivery", time: "Within 2 hours", cost: "₹100" }
      ],
      customizations: [
        "Personal message on cake",
        "Premium decorations",
        "Luxury toppings",
        "Special dietary requirements"
      ]
    }
  }

  const cake = cakeData[id] || cakeData[1] // Fallback to first cake if ID not found
  const currentSize = cake.sizes.find(size => size.name === selectedSize) || cake.sizes[0]

  const handleWhatsAppOrder = () => {
    setIsCustomerInfoModalOpen(true)
  }

  const handleCustomerInfoSubmit = (e) => {
    e.preventDefault()
    
    const shapeLabels = {
      round: "Round",
      square: "Square", 
      heart: "Heart"
    }
    
    const message = `Hi! I'd like to order the ${cake.name} cake.

Customer Details:
- Name: ${customerInfo.name}
- Mobile: ${customerInfo.mobile}

Order Details:
- Size: ${currentSize.label}
- Shape: ${shapeLabels[selectedShape]}
- Quantity: ${quantity}
- Delivery Date: ${deliveryDate || "Not specified"}
- Total Price: ₹${currentSize.price * quantity}

Cake Personalization:
- Occasion: ${customerInfo.occasion || "Not specified"}
- Text to write on cake: ${customerInfo.engravingText || "No text requested"}

Please let me know about availability and delivery options.`
    
    const whatsappUrl = `https://wa.me/917012721379?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close modal
    setCustomerInfo({ name: "", mobile: "", occasion: "", engravingText: "" })
    setIsCustomerInfoModalOpen(false)
  }

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-4 bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/cakes" className="text-muted-foreground hover:text-primary">Cakes</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{cake.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Back Button */}
              <Link
                to="/cakes"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cakes
              </Link>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{cake.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(cake.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {cake.rating} ({cake.reviews} reviews)
                  </span>
                </div>
                <p className="text-lg text-muted-foreground">{cake.description}</p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  ₹{currentSize.price}
                </div>
                <div className="text-muted-foreground">
                  Serves {currentSize.serves}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Choose Weight</h3>
                <div className="grid grid-cols-1 gap-3">
                  {cake.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        selectedSize === size.name
                          ? "border-pink-500 bg-pink-50 dark:bg-pink-950/20"
                          : "border-input hover:border-pink-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{size.label}</div>
                          <div className="text-sm text-muted-foreground">Serves {size.serves}</div>
                        </div>
                        <div className="font-bold text-pink-600">₹{size.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cake Shape Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Choose Shape</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setSelectedShape("round")}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${
                      selectedShape === "round"
                        ? "border-pink-500 bg-pink-50 dark:bg-pink-950/20"
                        : "border-input hover:border-pink-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">⭕</div>
                    <div className="font-medium text-sm">Round</div>
                  </button>
                  <button
                    onClick={() => setSelectedShape("square")}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${
                      selectedShape === "square"
                        ? "border-pink-500 bg-pink-50 dark:bg-pink-950/20"
                        : "border-input hover:border-pink-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">⬜</div>
                    <div className="font-medium text-sm">Square</div>
                  </button>
                  <button
                    onClick={() => setSelectedShape("heart")}
                    className={`p-4 rounded-lg border-2 text-center transition-colors ${
                      selectedShape === "heart"
                        ? "border-pink-500 bg-pink-50 dark:bg-pink-950/20"
                        : "border-input hover:border-pink-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">❤️</div>
                    <div className="font-medium text-sm">Heart</div>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-input flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-input flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Delivery Date */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Delivery Date</h3>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Select delivery date"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Please select your preferred delivery date. Same day delivery available for orders placed before 2 PM.
                </p>
              </div>

              {/* Order Buttons */}
              <div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </button>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-pink-600">
                    ₹{currentSize.price * quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cake.longDescription}
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Flavors</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cake.flavors.map((flavor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-sm"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-semibold mb-3">Ingredients</h4>
                <ul className="space-y-2">
                  {cake.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery & Customization */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Delivery Options</h3>
                <div className="space-y-4 mb-8">
                  {cake.deliveryOptions.map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.time}</div>
                      </div>
                      <div className="font-semibold text-pink-600">{option.cost}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
                <ul className="space-y-2">
                  {cake.customizations.map((option, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {option}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Allergen Information</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This cake contains: {cake.allergens.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Fresh Daily</h3>
              <p className="text-sm text-muted-foreground">Made fresh every day with premium ingredients</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick and safe delivery to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">100% satisfaction guarantee on all our cakes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Information Modal */}
      {isCustomerInfoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-sm"
            onClick={() => setIsCustomerInfoModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 p-6 text-white rounded-t-2xl">
              <div className="absolute inset-0 bg-black/10 rounded-t-2xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Customer Information</h2>
                    <p className="text-pink-100 text-sm">Please provide your details to proceed</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCustomerInfoModalOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCustomerInfoSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleCustomerInfoChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="tel"
                      name="mobile"
                      value={customerInfo.mobile}
                      onChange={handleCustomerInfoChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Cake Personalization Section */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎂</span>
                  Cake Personalization
                </h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Occasion</label>
                    <select
                      name="occasion"
                      value={customerInfo.occasion}
                      onChange={handleCustomerInfoChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select occasion (optional)</option>
                      <option value="Birthday">🎂 Birthday</option>
                      <option value="Wedding">💒 Wedding</option>
                      <option value="Anniversary">💕 Anniversary</option>
                      <option value="Graduation">🎓 Graduation</option>
                      <option value="Baby Shower">👶 Baby Shower</option>
                      <option value="Corporate Event">🏢 Corporate Event</option>
                      <option value="Just Because">🎉 Just Because</option>
                      <option value="Other">✨ Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Text to write on cake</label>
                    <textarea
                      name="engravingText"
                      value={customerInfo.engravingText}
                      onChange={handleCustomerInfoChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="e.g., Happy Birthday John!, Congratulations!, Happy Anniversary Mom & Dad, etc."
                    />
                    <p className="text-xs text-muted-foreground">
                      💡 Tip: Keep it short and sweet for best results. Maximum 2-3 lines recommended.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 space-y-2">
                <h4 className="font-semibold text-foreground">Order Summary</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• {cake.name} - {currentSize.label}</div>
                  <div>• Shape: {selectedShape === "round" ? "Round" : selectedShape === "square" ? "Square" : "Heart"}</div>
                  <div>• Quantity: {quantity}</div>
                  {deliveryDate && <div>• Delivery: {deliveryDate}</div>}
                  {customerInfo.occasion && <div>• Occasion: {customerInfo.occasion}</div>}
                  {customerInfo.engravingText && <div>• Text: "{customerInfo.engravingText}"</div>}
                  <div className="font-semibold text-foreground pt-2">Total: ₹{currentSize.price * quantity}</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCustomerInfoModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
