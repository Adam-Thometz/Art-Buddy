import Icon from '../Icon';

import add from './add.png';

const AddIcon = ({ text, size, id, onClick }) => (
  <Icon icon={add} text={text} size={size} id={id} onClick={onClick} />
);

export default AddIcon;