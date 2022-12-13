import { AiFillGithub } from "react-icons/ai"

const Layout = ({ children }) => {
  return (
    <main className="text-slate-700 bg-gray-200 min-h-screen grid">
      <nav className="flex items-center justify-end mx-auto w-[90%] max-w-[726px] py-12">
        <a href="https://github.com/loydcose/pokemon-app">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </nav>
      {children}
    </main>
  )
}

export default Layout
