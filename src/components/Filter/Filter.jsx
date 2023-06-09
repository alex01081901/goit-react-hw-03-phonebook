import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor="search">
      Find contacts by name
      <Input type="text" id="search" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};