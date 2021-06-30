import React, {useState} from 'react';
import CardsItem from '../cards-item/cards-item';
import Paginate from '../paginate/paginate';
import Sort from '../sort/sort';
import {CARDS_PER_PAGE} from '../../const';
import {dataMocks} from '../../mocks';

const Cards = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * CARDS_PER_PAGE;
  const pageCount = Math.ceil(dataMocks.length / CARDS_PER_PAGE);

  const filter = (array = [], filters = {}) => {
    const keys = Object.keys(filters).filter(key => filters.hasOwnProperty(key));
    return array.filter(elem => {
      const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
      return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
    });
  };

  const filters = { type: [`укулеле`, `акустическая гитара`], strings: [4, 7] };

  console.log(filter(dataMocks, filters));

  return (
    <section className="cards">
      <Sort />
      <ul className="cards__list">
        {
          dataMocks
            .slice(pagesVisited, pagesVisited + CARDS_PER_PAGE)
            .map(({id, name, comments, price, img}, index) =>
            <CardsItem
              key={id + index}
              id={id}
              name={name}
              comments={comments}
              price={price}
              img={img}
            />
          )
        }
      </ul>
      <Paginate activePage={pageNumber} pageCount={pageCount} onChangePage={setPageNumber} />
    </section>
  );
};

export default Cards;
