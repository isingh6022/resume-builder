import data from '../data';
import SplitView from './SplitView';

interface ContactItem {
  title?: string;
  text: string;
  href: string;
}

function Header() {
  const { name, designation, email, phoneNo, links } = data.personalInfo;

  const contactItems: ContactItem[] = [
    { text: email, href: `mailto:${email}` },
    { text: phoneNo, href: `tel:${phoneNo.replace(/\s/g, '')}` },
    ...links.map((link) => ({
      title: link.title,
      text: link.url,
      href: `https://${link.url}`,
    })),
  ];

  return (
    <header>
      <SplitView ratio={[1, 1]}>
        <>
          <h1>{name}</h1>
          <p>{designation}</p>
        </>
        <div>
          {contactItems.map((item) => (
            <p key={item.href}>
              <span>{item.title && `${item.title}:`}</span>
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </SplitView>
    </header>
  );
}

export default Header;
