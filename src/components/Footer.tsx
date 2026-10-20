const sourceUrl = 'github.com/isingh6022/resume-builder';

function Footer() {
  return (
    <footer>
      <p>
        This resume is built with React. Source:{' '}
        <a href={`https://${sourceUrl}`}>{sourceUrl}</a>
      </p>
    </footer>
  );
}

export default Footer;
