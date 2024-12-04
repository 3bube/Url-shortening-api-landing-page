# URL Shortening API Landing Page

A modern, responsive URL shortening web application built with Next.js 14, TypeScript, and Tailwind CSS. This project provides a clean and intuitive interface for shortening URLs, with features like copy-to-clipboard functionality and a beautiful statistics display.

![URL Shortening API](./public/images/desktop-preview.jpg)

## 🚀 Features

- **URL Shortening**: Quick and reliable URL shortening using the CleanURI API
- **Responsive Design**: Fully responsive layout that works beautifully on mobile and desktop
- **Modern UI Components**:
  - Interactive navigation with mobile menu
  - Hero section with engaging illustration
  - Statistics cards with connecting design elements
  - Call-to-action sections
  - Footer with social links
- **Copy to Clipboard**: One-click copying of shortened URLs
- **Error Handling**: Robust error handling and user feedback
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, utility-first CSS framework for styling

## 🛠️ Tech Stack

- **Frontend**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Fonts**: Poppins, Nunito Sans (Next.js optimized)
- **API**: CleanURI for URL shortening

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd url-shortening-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser**

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile devices
- Tablets
- Desktop screens

## 🎨 Color Palette

- **Primary Colors**:
  - Cyan: `hsl(180, 66%, 49%)`
  - Dark Violet: `hsl(257, 27%, 26%)`
- **Secondary Color**:
  - Red: `hsl(0, 87%, 67%)`
- **Neutral Colors**:
  - Gray: `hsl(0, 0%, 75%)`
  - Grayish Violet: `hsl(257, 7%, 63%)`
  - Very Dark Blue: `hsl(255, 11%, 22%)`
  - Very Dark Violet: `hsl(260, 8%, 14%)`

## 📦 Project Structure

```
url-shortening-api/
├── app/
│   ├── api/
│   │   └── shorten/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Statistics.tsx
│   │   ├── UrlShortener.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
└── tailwind.config.ts
```

## 🔄 API Integration

The application uses the CleanURI API for URL shortening. The API integration is handled through a Next.js API route for secure communication.

## 🔍 Future Improvements

- Add local storage for shortened URLs
- Implement user authentication
- Add URL analytics
- Enhance error handling
- Add unit and integration tests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](issues-link).

## 👏 Acknowledgments

- Design inspiration from Frontend Mentor
- Next.js team for the amazing framework
- CleanURI for the URL shortening API
