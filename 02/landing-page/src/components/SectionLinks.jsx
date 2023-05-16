import { links } from '../data/data'
export const SectionLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={`#${link.link}`} className="nav-link">
              {link.link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
