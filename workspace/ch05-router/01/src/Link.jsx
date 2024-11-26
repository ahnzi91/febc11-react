import PropTypes from "prop-types";

function Link({ to, children }) {
  Link.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
  };

  const handleClick = (e) => {
    // 브라우저의 기본 동작을 제거(a 태그 동작)
    e.preventDefault();

    // (state, title, url)
    window.history.pushState(null, "", e.target.pathname);
  };
  return (
    <>
      <a href={to} onClick={handleClick}>
        {children}
      </a>
    </>
  );
}

export default Link;
