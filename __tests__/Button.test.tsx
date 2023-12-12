//@ts-ignore
import React = require('react');
import renderer from 'react-test-renderer';
import {Button} from '../src/Components/Button';
import {Colors} from '../src/constants';
describe('Snapshot', () => {
  it('to match snapshot', () => {
    const component = renderer.create(
      <Button title={'Button'} cb={() => {}} color={Colors.SIMON_BLUE} />,
    );

    const match = component.toJSON();
    expect(match).toMatchSnapshot();
  });
});
