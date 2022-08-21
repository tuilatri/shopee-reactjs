import "./Directory.css";
import { useDataSourceContext } from "hooks";

function Directory() {
  const { directoryMainItemListInfo } = useDataSourceContext();

  const renderDirectoryMainList = (datas) =>
    datas.map((data, index) => {
      const { href: href1, itemImage: image1, itemTitle: title1 } = data[0];
      const { href: href2, itemImage: image2, itemTitle: title2 } = data[1];

      return (
        <li key={index} className="directory__main__item">
          <a href={href1} className="directory__main__item__link">
            <img src={image1} className="directory__main__item__img" alt="" />
            <span className="directory__main__item__title">{title1}</span>
          </a>
          
          <a href={href2} className="directory__main__item__link">
            <img src={image2} className="directory__main__item__img" alt="" />
            <span className="directory__main__item__title">{title2}</span>
          </a>
        </li>
      );
    });

  return (
    <div className="directory">
      <div className="directory__heading">DANH MỤC</div>

      <div className="directory__main">
        <div className="directory__main__part">
          <ul className="directory__main__list">
            {directoryMainItemListInfo &&
              renderDirectoryMainList(directoryMainItemListInfo)}
          </ul>
        </div>

        <button className="navigation-btn navigation-btn__previous directory__main__previous-btn">
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button className="navigation-btn navigation-btn__next directory__main__next-btn">
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Directory;
