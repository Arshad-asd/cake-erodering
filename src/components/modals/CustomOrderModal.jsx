import { useState, useEffect } from "react"
import { X, MessageCircle, Cake, Sparkles, ArrowRight } from "lucide-react"

export default function CustomOrderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    date: "",
    size: "",
    flavors: "",
    design: "",
    budget: "",
    specialRequirements: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate a brief loading state for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const message = `🎂 Custom Cake Order Request

👤 Customer Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

🎉 Occasion Details:
• Occasion: ${formData.occasion}
• Date: ${formData.date}
• Size: ${formData.size}

🍰 Cake Requirements:
• Flavors: ${formData.flavors}
• Design Description: ${formData.design}
• Budget: ${formData.budget}

📝 Special Requirements:
${formData.specialRequirements}

Please let me know about availability and pricing. Thank you!`

    const whatsappUrl = `https://wa.me/917012721379?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      phone: "",
      occasion: "",
      date: "",
      size: "",
      flavors: "",
      design: "",
      budget: "",
      specialRequirements: ""
    })
    setCurrentStep(1)
    setIsSubmitting(false)
    onClose()
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-100">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 p-6 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Cake className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Custom Cake Order</h2>
                <p className="text-pink-100 text-sm">Let's create your dream cake together!</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-pink-100 mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-h-[calc(95vh-200px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Customer Details */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tell Us About Yourself</h3>
                  <p className="text-muted-foreground">We need your contact details to get in touch with you</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Occasion Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-rose-500 text-white mb-3">
                    <Cake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Occasion Details</h3>
                  <p className="text-muted-foreground">Help us understand your celebration</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Occasion *</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select occasion</option>
                      <option value="Birthday">🎂 Birthday</option>
                      <option value="Wedding">💒 Wedding</option>
                      <option value="Anniversary">💕 Anniversary</option>
                      <option value="Graduation">🎓 Graduation</option>
                      <option value="Baby Shower">👶 Baby Shower</option>
                      <option value="Corporate Event">🏢 Corporate Event</option>
                      <option value="Other">🎉 Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Date Required *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Cake Requirements */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Your Dream Cake</h3>
                  <p className="text-muted-foreground">Describe your perfect cake</p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Size *</label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select size</option>
                        <option value="1/2 kg (4-6 people)">1/2 kg (4-6 people)</option>
                        <option value="1 kg (8-10 people)">1 kg (8-10 people)</option>
                        <option value="2 kg (15-20 people)">2 kg (15-20 people)</option>
                        <option value="3 kg (25-30 people)">3 kg (25-30 people)</option>
                        <option value="Custom size">Custom size</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹500">Under ₹500</option>
                        <option value="₹500 - ₹1000">₹500 - ₹1000</option>
                        <option value="₹1000 - ₹2000">₹1000 - ₹2000</option>
                        <option value="₹2000 - ₹5000">₹2000 - ₹5000</option>
                        <option value="Above ₹5000">Above ₹5000</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Flavors *</label>
                    <input
                      type="text"
                      name="flavors"
                      value={formData.flavors}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="e.g., Chocolate, Vanilla, Red Velvet, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Design Description *</label>
                    <textarea
                      name="design"
                      value={formData.design}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your dream cake design, colors, decorations, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Special Requirements</label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-background text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="Any dietary restrictions, allergies, special instructions, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={currentStep === 1 ? onClose : handlePrev}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {currentStep === 1 ? 'Cancel' : 'Previous'}
              </button>
              
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step <= currentStep ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:from-pink-600 hover:to-purple-600 transition-all flex items-center"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white rounded-xl text-sm font-medium transition-all flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
