export default function Nav({ children }) {
    return (
      <nav className = "bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className = "container mx-auto flex flex-wrap items-center">   
            <div className = "flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className = "text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span className = "text-2xl pl-2"><i className = "em em-grinning"></i>Moba Codex</span>
                </a>
            </div>
            <div className = "flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className = "list-reset flex justify-between flex-1 md:flex-none items-center">
                    { children }
                </ul>
            </div>
        </div>
    </nav>

  )
  }
  