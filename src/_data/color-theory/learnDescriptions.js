const color = color => (
  <span className={`LearnColor-color ${color}`}>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
);

const descriptions = {
  primary: <>
    <p>Primary colors are the three colors that cannot be made from any other colors.</p>
    <p>All other colors are made from these 3 hues!</p>
  </>,
  secondary: <>
    <p>Secondary colors are made by mixing the primary colors!</p>
    <p className="LearnColor-add-color">{color('red')} + {color('yellow')} = {color('orange')}</p>
    <p className="LearnColor-add-color">{color('blue')} + {color('red')} = {color('violet')}</p>
    <p className="LearnColor-add-color">{color('yellow')} + {color('blue')} = {color('green')}</p>
  </>,
  tertiary: <>
    <p>Tertiary colors are made by mixing a primary and a secondary color!</p>
    <p className="LearnColor-add-color">{color('yellow')} + {color('orange')} = {color('dandelion')}</p>
    <p className="LearnColor-add-color">{color('orange')} + {color('red')} = {color('tangelo')}</p>
    <p className="LearnColor-add-color">{color('red')} + {color('violet')} = {color('plum')}</p>
    <p className="LearnColor-add-color">{color('violet')} + {color('blue')} = {color('blueberry')}</p>
    <p className="LearnColor-add-color">{color('blue')} + {color('green')} = {color('emerald')}</p>
    <p className="LearnColor-add-color">{color('green')} + {color('yellow')} = {color('pear')}</p>
  </>
};

export default descriptions;