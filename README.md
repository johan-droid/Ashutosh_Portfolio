# Ashutosh Sahoo - Professional Portfolio Website

A modern, professional portfolio website showcasing full-stack development, bot engineering, and web scraping expertise.

## 🚀 Features

- **Modern Design**: Clean, tech-focused dark theme with cyan/green accents
- **Responsive**: Fully mobile-responsive design
- **Interactive**: Smooth animations and transitions
- **Sections**:
  - Hero section with call-to-action
  - About section with personal introduction
  - Skills showcase with animated progress bars
  - Featured projects
  - Contact form with social links

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive JavaScript functionality

## 🛠️ Setup Instructions

1. **Download all three files** and keep them in the same folder
2. **Open `index.html`** in any modern web browser
3. All files must be in the same directory for proper functionality

## ✏️ Customization Guide

### Update Your Information

#### 1. **Projects Section**
Update the project cards with your actual GitHub repository links:
- Line ~293: Detective Conan News Bot links
- Line ~315: Property Management App links
- Line ~337: Resume Builder links
- Line ~359: Web Scraping Suite links

Replace `#` with your actual project URLs and GitHub repository links.

#### 2. **Profile Image**
To add your photo in the About section:
- Replace the SVG placeholder (lines ~99-107) with:
```html
<img src="your-photo.jpg" alt="Ashutosh Sahoo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
```

#### 3. **Contact Form**
The contact form currently shows an alert. To make it functional:
- Option A: Connect to a backend service (EmailJS, FormSpree, etc.)
- Option B: Use a serverless function (Netlify Functions, Vercel Functions)
- Option C: Connect to your own backend API

Example with FormSpree (in `script.js`):
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
    });
    // Handle response...
});
```

### Social Media Links

Your current links:
- LinkedIn: https://in.linkedin.com/in/ashutosh-sahoo-064064280
- GitHub: https://github.com/ashutoshsahoo

Update Telegram username in footer (line ~447 in updated version)

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all three files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Instant deployment with custom domain support

### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import your GitHub repository
3. Automatic deployment

## 🎨 Color Customization

To change the color scheme, edit these CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0e1a;        /* Main background */
    --bg-secondary: #0f1421;      /* Secondary background */
    --accent-primary: #00ff88;     /* Main accent color */
    --accent-secondary: #00d4ff;   /* Secondary accent */
}
```

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔧 Technical Stack

**Built with:**
- HTML5
- CSS3 (with custom animations)
- Vanilla JavaScript
- Google Fonts (Sora & JetBrains Mono)

**No dependencies** - Pure HTML/CSS/JS!

## 📈 Performance

- Lightweight (~50KB total)
- Fast loading
- Optimized animations
- Smooth scrolling

## 🎓 Your Background

**Education**: B.Tech in Computer Science Engineering, Biju Patnaik University of Technology (BPUT)  
**Location**: Rourkela, Odisha, India

**Key Skills**:
- Python (Advanced) - Web scraping, bot development
- JavaScript/TypeScript (Advanced) - Full-stack development
- SQL (Advanced) - Database design
- MERN Stack
- Web Scraping & Automation
- Telegram Bot Development

**Notable Projects**:
1. Detective Conan News Bot - 24/7 Telegram bot
2. Property Management Web App - Full-stack MERN application
3. Resume Builder - Interactive resume tool
4. Web Scraping Automation Suite - Multiple automation tools

## 🚀 Next Steps

1. Add your actual project screenshots
2. Update project links with live demos
3. Configure contact form with a backend
4. Add your resume/CV download link
5. Consider adding a blog section
6. Deploy to your preferred hosting platform

## 📞 Support

If you need to update anything or have questions, feel free to reach out!

---

**Built with ❤️ by Ashutosh Sahoo**
*Passionate about tech, automation, and building innovative solutions*
