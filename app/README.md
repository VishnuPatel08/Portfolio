# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with modern web technologies and best practices.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: Built with accessibility best practices

## 🎨 Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal introduction with stats and professional photo
- **Skills**: Interactive skill bars with progress animations
- **Projects**: Filterable project showcase with hover effects
- **Resume**: Timeline of experience and education with download option
- **Contact**: Working contact form with validation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern standards
- **CSS3**: Flexbox, Grid, Custom Properties, and animations
- **Vanilla JavaScript**: ES6+ features and modern APIs
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Inter and JetBrains Mono typography

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Interactive functionality
├── images/
│   ├── avatar.jpg          # Profile picture
│   ├── about-image.jpg     # About section image
│   └── project*.jpg        # Project screenshots
├── assets/
│   ├── resume.pdf          # Downloadable resume
│   └── favicon.ico         # Website favicon
└── package.json            # Project configuration
```

## 🚀 Getting Started

### Option 1: Simple Setup
1. Clone or download this repository
2. Replace placeholder content with your information
3. Add your images to the `images/` folder
4. Add your resume to the `assets/` folder
5. Open `index.html` in your browser

### Option 2: Development Setup
1. Install Node.js on your computer
2. Open terminal in the project folder
3. Run `npm install` to install dependencies
4. Run `npm start` to start development server
5. Open `http://localhost:3000` in your browser

### Option 3: Python Server
If you have Python installed:
```bash
# Navigate to project folder
cd portfolio

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 📝 Customization

### 1. Personal Information
Edit the HTML file and update:
- Name and title in the hero section
- About section content
- Skills and experience
- Project descriptions
- Contact information

### 2. Colors and Styling
Customize the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #f59e0b;  /* Accent color */
    --accent-color: #06b6d4;     /* Secondary accent */
}
```

### 3. Images
Replace placeholder images with your own:
- `images/avatar.jpg` - Your profile picture (300x300px)
- `images/about-image.jpg` - Professional photo (280x350px)
- `images/project*.jpg` - Project screenshots (400x250px)

### 4. Content
Update text content in the HTML file:
- Hero section greeting and description
- About section story and stats
- Skills and technologies
- Project titles and descriptions
- Resume timeline
- Contact information

## 🎯 Performance Tips

- **Optimize Images**: Compress images using tools like TinyPNG
- **Minify Code**: Use the build scripts to minify CSS and JS
- **Enable Gzip**: Configure your server to enable gzip compression
- **CDN**: Consider using a CDN for faster global loading

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository settings
3. Enable GitHub Pages
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import your GitHub repository
2. Automatic deployments and previews
3. Edge network for fast global loading

## 🔧 Customization Examples

### Adding a New Section
```html
<section id="new-section" class="new-section section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">New Section</h2>
            <p class="section-subtitle">Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Adding New Projects
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="images/new-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-actions">
                <a href="#" class="project-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="#" class="project-btn" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

## 📞 Support

If you need help customizing this portfolio:
1. Check the code comments for guidance
2. Review the CSS custom properties for easy theming
3. Use browser developer tools for debugging
4. Search online for HTML/CSS/JavaScript tutorials

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Credits

- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Inspiration** from modern web design trends

---

Made with ❤️ for developers who want to showcase their work beautifully.