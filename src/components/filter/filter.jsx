import React from 'react';

const Filter = () => {
  return (
    <section className="filter">
      <h2 className="filter__title">Фильтр</h2>
      <form className="filter__form" action="#">
        <fieldset className="filter__fieldset" title="Фильтр по цене">
          <legend className="filter__legend">Цена, <span>&#8381;</span></legend>
          <div className="filter__input-wrapper">
            <input className="filter__input" type="number" id="min" name="min" placeholder="1 000" />
            <label className="visually-hidden" htmlFor="min">Минимальная цена</label>
            <input className="filter__input" type="number" id="max" name="max" placeholder="30 000" />
            <label className="visually-hidden" htmlFor="max">Максимальная цена</label>
          </div>
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по типу">
          <legend className="filter__legend">Тип гитар</legend>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
          <label className="filter__label" htmlFor="acoustic">Акустические гитары</label>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="electric" name="electric" />
          <label className="filter__label" htmlFor="electric">Электрогитары</label>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="ukulele" name="ukulele" />
          <label className="filter__label" htmlFor="ukulele">Укулеле</label>
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по количеству струн">
          <legend className="filter__legend">Количество струн</legend>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="four" name="four" />
          <label className="filter__label" htmlFor="four">4</label>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="six" name="six" />
          <label className="filter__label" htmlFor="six">6</label>
          <input className="filter__checkbox visually-hidden" type="checkbox" id="seven" name="seven" />
          <label className="filter__label" htmlFor="seven">7</label>
          <input disabled={true} className="filter__checkbox visually-hidden" type="checkbox" id="twelve" name="twelve" />
          <label className="filter__label" htmlFor="twelve">12</label>
        </fieldset>
      </form>
    </section>
  );
};

export default Filter;
