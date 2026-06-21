import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './components/Todo'
import Users from './components/Users'
import Section from './components/Section'
//import ErrorBoundary from './components/ErrorBoundary'
import DarkModeSwitcher from './components/DarkModeSwitcher'
import ContactForm from './components/ContactForm'
import ThemeContextProvider from './context/ContextProvider'
import { ErrorBoundary } from 'react-error-boundary';


function App() {
  return (
    <>
      <Section>
        <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
      </Section>

      <ThemeContextProvider>
        <DarkModeSwitcher />
        <section id="spacer"></section>
          <Section title="Users Dashboard">
            <ErrorBoundary
              fallback={<p>Users couldn't load. Try refreshing.</p>}
              onError={(error, info) => console.error('Caught:', error, info)}
            >
                <Users />
            </ErrorBoundary>
          </Section>
        <section id="spacer"></section>
          <Section title="Todo List">
            <Todo />
          </Section>
        <section id="spacer"></section>
      </ThemeContextProvider>
 
      <Section title="Contact form">
        <ErrorBoundary
          fallback={<p>Problems with email form</p>}
          onError={(error, info) => console.error('Caught:', error, info)}
        >
            <ContactForm />
        </ErrorBoundary>
      </Section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
