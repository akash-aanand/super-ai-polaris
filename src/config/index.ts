// Centralized Configuration
// Handles environment variables, feature flags, and asset paths.

export const config = {
  app: {
    name: 'Super AI Polaris',
    description: 'AICTE Corporate Partner - Transforming Education with Artificial Intelligence.',
    version: '2.4.0',
  },
  api: {
    key: process.env.API_KEY || '',
    baseUrl: process.env.API_BASE_URL || 'https://api.superaip.com',
  },
  features: {
    enableChat: true,
    enable3DBackgrounds: true,
    enableLiveStatus: true,
  },
  assets: {
    images: {
      logo: 'logo.png',
      heroPlaceholder: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600',
    },
  },
  contact: {
    email: 'info@superaip.com',
    phone: ['+91 85959 12427', '+91 85959 12425'],
    address: 'Taj Vivanta Hotel, Upper Ground Floor, Sector-21, Metro Station Complex, Dwarka, New Delhi, Delhi, India – 110075',
  }
};
