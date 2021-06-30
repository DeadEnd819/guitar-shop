import React from 'react';

const Paginate = ({activePage, pageCount, onChangePage}) => {
  const isFirstActive = activePage === 0;
  const isLastActive = activePage + 1 === pageCount;
  const near = isFirstActive ? (activePage + 2)
    : isLastActive ? (pageCount - 1) : activePage + 1;

  const onClick = (evt) => {
    evt.preventDefault();
    onChangePage(+evt.target.id);
  }

  const paginateItems = [
    {
      id: `back`,
      className: ` paginate__link--back${isFirstActive ? ` visually-hidden` : ``}`,
      title: `Назад`,
      onClick(evt) {
        evt.preventDefault();
        if (!isFirstActive) {
          onChangePage(activePage - 1);
        }
      },
    },
    {
      id: 0,
      className: `${activePage === 0 ? ` paginate__link--active` : ``}`,
      title: `1`,
      onClick,
    },
    {
      id: (near - 1),
      className: `${activePage === (near - 1) ? ` paginate__link--active` : ``}`,
      title: near,
      onClick,
    },
    {
      id: (pageCount - 1),
      className: `${activePage === (pageCount - 1) ? ` paginate__link--active` : ``}`,
      title: pageCount,
      onClick,
    },
    {
      id: `onward`,
      className: ` paginate__link--onward${isLastActive ? ` paginate__link--disabled` : ``}`,
      title: `Далее`,
      onClick(evt) {
        evt.preventDefault();
        if (!isLastActive) {
          onChangePage(activePage + 1);
        }
      },
    },
  ];

  return (
    <ul className="paginate">
      {
        paginateItems.map(({id, className, title, onClick}) =>
          <li className="paginate__item" key={title}>
            {/*eslint-disable-next-line*/}
            <a
              className={`paginate__link${className}`}
              href="#"
              id={id}
              onClick={onClick}>
              {title}
            </a>
          </li>
        )
      }
    </ul>
  );
};

export default Paginate;

// return (
//   <ul className="paginate">
//     <li className="paginate__item">
//       {/*eslint-disable-next-line*/}
//       <a className={`paginate__link paginate__link--back${isFirstActive ? ` visually-hidden` : ``}`} href="#" onClick={paginateItems[0].onClick}>Назад</a>
//     </li>
//     <li className="paginate__item">
//       {/*eslint-disable-next-line*/}
//       <a className={`paginate__link${activePage === 0 ? ` paginate__link--active` : ``}`} href="#" id="0" onClick={onClick}>1</a>
//     </li>
//     <li className="paginate__item">
//       {/*eslint-disable-next-line*/}
//       <a className={`paginate__link${activePage === (near - 1) ? ` paginate__link--active` : ``}`} href="#" id={near - 1} onClick={onClick}>{near}</a>
//     </li>
//     <li className="paginate__item">
//       <input
//         className="paginate__link paginate__link--more"
//         type="number"
//         name="more"
//         placeholder="..."
//       />
//     </li>
//     <li className="paginate__item">
//       {/*eslint-disable-next-line*/}
//       <a className={`paginate__link${activePage === (pageCount - 1) ? ` paginate__link--active` : ``}`} href="#" id={pageCount - 1} onClick={onClick}>{pageCount}</a>
//     </li>
//     <li className="paginate__item">
//       {/*eslint-disable-next-line*/}
//       <a className={`paginate__link paginate__link--onward${isLastActive ? ` paginate__link--disabled` : ``}`} href="#"  onClick={paginateItems[4].onClick}>Далее</a>
//     </li>
//   </ul>
// );
