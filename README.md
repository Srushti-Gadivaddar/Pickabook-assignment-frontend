## 🎨 Pickabook – AI Personalised Children’s Illustration

Pickabook is an AI-powered personalisation prototype that transforms a child’s photo into a cohesive illustrated character for children’s books.
Instead of simple face pasting, the system focuses on visual realism and identity consistency, producing illustrations that feel natural and story-ready.
This project demonstrates AI personalisation, full-stack engineering, and pragmatic decision-making in a real-world product scenario.

#🚀 What This Solves

Most face-insertion approaches look unnatural—like a sticker placed on a fixed body.
Pickabook avoids this by generating a unified stylised illustration, considering facial structure, head pose, and hair to improve realism and user experience.

#✨ Key Features

📤 Upload a child’s photo via web UI

🧠 Face detection using face-api.js
🎨 Stylised illustration generation using Pollinations model
🖼️ Image processing & blending with Canvas
☁️ Cloud-based image handling via Cloudinary
📥 Download-ready personalised illustration
⚙️ REST API–based backend architecture
🧠 Why This Approach?

Cost-effective: Avoids paid AI models while remaining reproducible
Product-driven: Prioritises realism over basic technical compliance
Scalable: Clear separation of frontend, backend, and AI pipeline
Extensible: Can easily swap in paid identity-preserving models in future

#🛠️ Tech Stack:

🌐 Frontend
  React 
  HTML, CSS, JavaScript

⚙️ Backend
  Node.js
  Express.js

#🧠 AI & Image Processing

face-api.js – face detection
Canvas – image processing & compositing
Pollinations model – stylised image generation

#☁️ Cloud & Dev Tools
Cloudinary
Git & GitHub
VS Code
Hoppscotch

#🏗️ Architecture Overview

User uploads image from browser
Frontend sends image (FormData) to backend
Backend performs:
Face detection
Image preprocessing
Stylised illustration generation
Personalised illustration is returned to UI

User previews and downloads the result

(Hand-drawn architecture diagram included in the repository.)

🚀 Getting Started
# Install dependencies
npm install

# Run backend server
node index.js


Environment variables required for Cloudinary configuration.

# 📉 Current Limitations

  Free models offer less identity consistency than paid alternatives
  Output quality depends on input image lighting and clarity
  Limited control over fine-grained illustration styles.And 
  image not exactly the same.

#🔮 What I’d Build in V2
Identity-preserving paid models (Instant-ID / ControlNet)
Advanced face-body blending and lighting matching
Multiple illustration styles for user selection
Faster inference and better scalability
User accounts & saved illustrations

👩‍💻 Author

Srushti Gadivaddar
CSE Undergraduate | Aspiring Software Engineer
AI • Full-Stack • Product-Driven Engineering

🔗 GitHub: https://github.com/Srushti-Gadivaddar



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
