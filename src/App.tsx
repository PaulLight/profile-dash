import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Section from './components/Section'
//import ErrorBoundary from './components/ErrorBoundary'
import DarkModeSwitcher from './components/DarkModeSwitcher'
import ContactForm from './components/ContactForm'
/* import Counter from './components/Counter' */
import ThemeContextProvider from './context/ContextProvider'
import { ErrorBoundary } from 'react-error-boundary';

const Users = lazy(() => import('./components/Users'))
const Todo = lazy(() => import('./components/Todo'));

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
              onError={(error, info) => console.error('Caught:', error, info)}>
              <Suspense fallback={<p>Now Loading users...</p>}>
                <Users />
              </Suspense>
            </ErrorBoundary>
          </Section>
        <section id="spacer"></section>
          <ErrorBoundary fallback={<p>Failed to load this section.</p>}>
            <Section title="Todo List">
              <Suspense fallback={<p>Loading...</p>}>
                <Todo />
              </Suspense>
            </Section>
          </ErrorBoundary>
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

{/*       <Section title="Counter section">
        <ErrorBoundary
          fallback={<p>Problems with email form</p>}
          onError={(error, info) => console.error('Caught:', error, info)}
        >
            <Counter />
        </ErrorBoundary>
      </Section> */}
    </>
  )
}

export default App
