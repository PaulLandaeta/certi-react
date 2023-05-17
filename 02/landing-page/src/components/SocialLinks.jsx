export const SocialLinks = (props) => {
  const { social, itemClass } = props;
  console.log(itemClass);
  return (
    <li>
      <a
        href={`https://www.${social}.com`}
        target="_blank"
        className={itemClass}
      >
        <i className={`fab fa-${social}`}></i>
      </a>
    </li>
  );
};
