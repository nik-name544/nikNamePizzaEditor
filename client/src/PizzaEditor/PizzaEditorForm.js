import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toppingsName } from "./store/ToppingsName";
import { useDispatch, useSelector } from "react-redux";
import { finalTotal } from "./store/PizzaStoreRedux";
import * as Style from "./PizzaEditorStyle";

const PizzaEditorForm = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "small",
      sauce: "tomatoSauce",
      dough: "thin",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });
  const dispatch = useDispatch();
  let PizzaServData = useSelector((state) => state.pizzaServData[0]);
  const PizzaName = useSelector((state) => state.toppings);
  const ServAnswer = useSelector((state) => state.servAnswer);
  const values = watch();
  const price = finalTotal(values, PizzaServData);
  const onSubmit = (data) => {
    finalTotal(values, PizzaServData);
    dispatch({ type: "pizza/finalTotal", payload: price });
    toppingsName({ values, PizzaServData, PizzaName, dispatch });
  };
  const names = [
    values.size,
    values.dough,
    values.sauce,
    ...values.cheese,
    ...values.vegetables,
    ...values.meat,
  ];
  let valueName = names.map((item, i) => {
    return (
      <p key={i} className="order-list__ing">
        {item}
      </p>
    );
  });
  if (ServAnswer.isError) {
    return <>Error: {JSON.stringify(ServAnswer.error)}</>;
  }

  if (ServAnswer.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {/* <div className="payment-form__pizza-text">
                {valueName}
            </div> */}
      <Style.MainApp onSubmit={handleSubmit(onSubmit)}>
        <Style.SizeDoughInner>
          <Style.SizeDough>
            <Style.ToppingTitle>Выберите тесто:</Style.ToppingTitle>
            <Style.SizeDoughWrapper>
              <Style.RadioLabel>
                <Style.RadioBox
                  ref={register}
                  type="radio"
                  value="thin"
                  name="dough"
                />
                <Style.SizeDoughText id="dough-thin__text">
                  {PizzaServData.dough.fluffy.name}
                </Style.SizeDoughText>
              </Style.RadioLabel>
              <Style.RadioLabel>
                <Style.RadioBox
                  ref={register}
                  type="radio"
                  value="fluffy"
                  name="dough"
                />
                <Style.SizeDoughText id="dough-fluffy__text">
                  {PizzaServData.dough.thin.name}
                </Style.SizeDoughText>
              </Style.RadioLabel>
            </Style.SizeDoughWrapper>
          </Style.SizeDough>
          <Style.SizeDough>
            <Style.ToppingTitle>Выберите размер:</Style.ToppingTitle>
            <Style.SizeDoughWrapper>
              <Style.RadioLabel>
                <Style.RadioBox
                  ref={register}
                  type="radio"
                  value="small"
                  name="size"
                />
                <Style.SizeDoughText id="size-small__text">
                  {PizzaServData.size.small.name}
                </Style.SizeDoughText>
              </Style.RadioLabel>
              <Style.RadioLabel>
                <Style.RadioBox
                  ref={register}
                  type="radio"
                  value="big"
                  name="size"
                />
                <Style.SizeDoughText id="size-big__text">
                  {PizzaServData.size.big.name}
                </Style.SizeDoughText>
              </Style.RadioLabel>
            </Style.SizeDoughWrapper>
          </Style.SizeDough>
        </Style.SizeDoughInner>

        <fieldset className="sauce">
          <Style.ToppingTitle>Выберите соус:</Style.ToppingTitle>
          <Style.SauceInner>
            <Style.RadioLabel>
              <Style.RadioBox
                ref={register}
                type="radio"
                value="tomatoSauce"
                name="sauce"
              />
              <Style.RadioText id="tomato-sauce__text">
                {PizzaServData.sauce.tomatoSauce.name}
              </Style.RadioText>
            </Style.RadioLabel>
            <Style.RadioLabel>
              <Style.RadioBox
                ref={register}
                type="radio"
                value="whiteSauce"
                name="sauce"
              />
              <Style.RadioText id="white-sauce__text">
                {PizzaServData.sauce.whiteSauce.name}
              </Style.RadioText>
            </Style.RadioLabel>
            <Style.RadioLabel>
              <Style.RadioBox
                ref={register}
                type="radio"
                value="spicySauce"
                name="sauce"
              />
              <Style.RadioText id="spicy-sauce__text">
                {PizzaServData.sauce.spicySauce.name}
              </Style.RadioText>
            </Style.RadioLabel>
          </Style.SauceInner>
        </fieldset>

        <fieldset className="cheese">
          <Style.ToppingTitle>Добавте сыр:</Style.ToppingTitle>
          <Style.CheckboxGroup>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="mozzarella__title">
                {PizzaServData.cheese.mozzarella.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.cheese.mozzarella.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="mozzarella"
                  name="cheese"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="cheddar__title">
                {PizzaServData.cheese.cheddar.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.cheese.cheddar.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="cheddar"
                  name="cheese"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="dor-blue__title">
                {PizzaServData.cheese.dorBlue.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.cheese.dorBlue.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="dorBlue"
                  name="cheese"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
          </Style.CheckboxGroup>
        </fieldset>

        <fieldset className="vegetables">
          <Style.ToppingTitle>Добавте овощи:</Style.ToppingTitle>
          <Style.CheckboxGroup>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="tomato__title">
                {PizzaServData.vegetables.tomato.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.vegetables.tomato.price} ₽
                </Style.CheckboxText>

                <input
                  ref={register}
                  type="checkbox"
                  value="tomato"
                  name="vegetables"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="mushrooms__title">
                {PizzaServData.vegetables.mushrooms.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.vegetables.mushrooms.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="mushrooms"
                  name="vegetables"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="pepper__title">
                {PizzaServData.vegetables.pepper.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.vegetables.pepper.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="pepper"
                  name="vegetables"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
          </Style.CheckboxGroup>
        </fieldset>
        <fieldset className="meat">
          <Style.ToppingTitle>Добавте мясо:</Style.ToppingTitle>
          <Style.CheckboxGroup>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="bacon__title">
                {PizzaServData.meat.bacon.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.meat.bacon.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="bacon"
                  name="meat"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="pepperoni__title">
                {PizzaServData.meat.pepperoni.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.meat.pepperoni.price} ₽
                </Style.CheckboxText>
                <input
                  ref={register}
                  type="checkbox"
                  value="pepperoni"
                  name="meat"
                />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
            <Style.CheckboxInner>
              <Style.CheckboxTitle className="ham__title">
                {PizzaServData.meat.ham.name}
              </Style.CheckboxTitle>
              <Style.CheckboxWrapper>
                <Style.CheckboxText>
                  {PizzaServData.meat.ham.price} ₽
                </Style.CheckboxText>
                <input ref={register} type="checkbox" value="ham" name="meat" />
              </Style.CheckboxWrapper>
            </Style.CheckboxInner>
          </Style.CheckboxGroup>
        </fieldset>
        <Link
          to="/payment-form"
          onClick={onSubmit}
          className="submit__btn-wrapper"
        >
          <button className="submit__btn-inner active">
            <span className="submit__btn active">Заказать за {price}</span>
          </button>
        </Link>
      </Style.MainApp>
    </>
  );
};

export default PizzaEditorForm;
