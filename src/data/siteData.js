// Telegram link configuration
export const TELEGRAM_LINK = "https://t.me/addlist/RTsT7CgFxrs3ZWJl";

// Helper function to open Telegram in new tab
export const openTelegram = () => window.open(TELEGRAM_LINK, "_blank");

// Site configuration
export const siteConfig = {
  brandName: "LootDeals",
  tagline: "India's #1 Loot Deals Community",
  memberCount: "9,00,000+",
  shortMemberCount: "9.5L+",
  nextDealTime: "Today at 9:00 PM",
  dealPostedDaily: "50+",
  alertSpeed: "< 30 Seconds",
  verifiedDeals: "100% Verified",
};

// Channel links
export const CHANNEL_LINKS = [
  {
    id: 1,
    label: "Join Main Channel",
    url: TELEGRAM_LINK,
    variant: "primary",
    icon: "📢",
  },
  {
    id: 2,
    label: "Join Backup Channel",
    url: TELEGRAM_LINK,
    variant: "secondary",
    icon: "🚀",
  },
  {
    id: 3,
    label: "Join WhatsApp",
    url: TELEGRAM_LINK,
    variant: "secondary",
    icon: "💬",
  },
];

// Stats
export const STATS = [
  { value: "9.5L+", label: "Joined", icon: "✅" },
  { value: "⚡", label: "Fast Alerts", icon: "⚡" },
  { value: "💚", label: "100% Free", icon: "💚" },
];

// Deal cards data
export const DEALS = [
  { emoji: "👟", name: "Adidas X9000L4 Running Shoes", mrp: 7419, loot: 235, off: "97%" },
  { emoji: "🎧", name: "boAt Rockerz 450 Headphones", mrp: 3990, loot: 499, off: "87%" },
  { emoji: "📱", name: "Redmi Buds 5 Earphones", mrp: 2999, loot: 349, off: "88%" },
  { emoji: "🍳", name: "Philips HD Air Fryer", mrp: 8999, loot: 1299, off: "85%" },
  { emoji: "⌚", name: "Fastrack Analog Watch", mrp: 2995, loot: 449, off: "85%" },
  { emoji: "💾", name: "WD 1TB External Hard Drive", mrp: 4999, loot: 799, off: "84%" },
];

// Why join us data
export const WHY_JOIN_US = [
  { icon: "⚡", title: "Instant Alerts", description: "Deal notification in under 30 seconds" },
  { icon: "✅", title: "100% Free Forever", description: "Never pay anything, ever" },
  { icon: "🔍", title: "Manually Verified", description: "Our team checks every deal before posting" },
  { icon: "🛒", title: "All Categories", description: "Electronics, fashion, food, travel & more" },
];

// Social proof stats
export const SOCIAL_STATS = [
  { value: "50+", label: "Deals Posted Daily", icon: "📦" },
  { value: "< 30s", label: "Alerts in Seconds", icon: "⚡" },
  { value: "100%", label: "Verified Deals", icon: "🛡️" },
];

// Featured deal for showcase
export const FEATURED_DEAL = {
  emoji: "👟",
  name: "ADIDAS X9000L4 M Running Shoes For Men",
  color: "Black",
  seller: "RetailNet",
  price: 235,
  offers: 5,
  mrp: 7419,
};