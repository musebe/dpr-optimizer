# 🚀 OptiFlow: High-Performance DPR Optimizer

OptiFlow is a cutting-edge demonstration of automated **Device Pixel Ratio (DPR)** optimization. By leveraging **Next.js 16** and **Cloudinary**, this application ensures that users receive razor-sharp visuals tailored specifically to their device's screen density, eliminating wasted bandwidth and boosting conversion rates.

## ✨ Key Features

* **Automated DPR Delivery**: Uses Cloudinary's `dpr_auto` to detect screen density (1x, 2x, 3x) and serve the exact number of pixels needed.
* **Next.js 16 Real-Time Sync**: Utilizes `router.refresh()` and `no-store` caching to update the gallery instantly after an upload without a page reload.
* **Intelligent Compression**: Employs `f_auto` and `q_auto` to deliver the best format (AVIF/WebP) and quality balance automatically.
* **Before/After Comparison**: A dedicated tool to visualize the payload difference between standard "heavy" images and optimized assets.
* **Mobile-First "Squircle" UI**: A fully responsive design using the latest Shadcn UI components with custom 2rem rounded corners for a premium feel.

## 🛠️ Tech Stack

* **Framework**: Next.js 16.1 (App Router, Turbopack)
* **Image Orchestration**: [Cloudinary](https://cloudinary.com) (`next-cloudinary`)
* **Styling**: Tailwind CSS
* **UI Components**: Shadcn UI (Latest Nova Style)
* **Icons**: Lucide React

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dpr-optimizer.git
cd dpr-optimizer

```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your_unsigned_preset"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

```

### 3. Install dependencies and run

```bash
npm install
npm run dev

```

## 📖 How it Works

### DPR vs. Fixed Dimensions

Traditional responsive images require complex `srcset` configurations. With Cloudinary's DPR parameter, the delivery is simplified:

* **Standard**: Serving a 2000px image to a 500px container on a 1x display wastes 75% of the data.
* **OptiFlow**: Requests `dpr_auto`. A Retina MacBook (DPR 2.0) receives a 1000px image, while a standard monitor receives exactly 500px.

### Server-Side Integration

The project uses a Next.js API route to interface with the Cloudinary Admin API, allowing us to display live metadata, including the original file size versus the optimized delivery weight.

## 📈 Impact on Profit

Reducing image weight is directly correlated with:

* **Faster LCP (Largest Contentful Paint)**: Higher SEO rankings.
* **Reduced Bounce Rates**: Especially for mobile users on limited data plans.
* **Higher Conversions**: A 100ms improvement in load time can result in a 1% increase in revenue.