export default function NavItem({ href, isActive = false, children }) {
    return (
      <li className = "mr-3">
        <a
          href={href}
          className={`inline-block py-2 px-4 text-white no-underline ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}
        >
          {children}
        </a>
      </li>
    )
  }
  