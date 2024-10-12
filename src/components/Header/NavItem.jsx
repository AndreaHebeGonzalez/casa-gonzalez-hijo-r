

export const NavItem = ({ label, link }) => {
  return (
    <li className="nav__item">
      <a href={ link } className="nav__link">{ label }</a>
    </li>
  )
}
