import { recordSaga } from '../../tests/record-saga';
import { coinsLoad } from './coins.sagas';
import * as ActionTypes from '../actions/action-types';
import * as Actions from '../actions/coins.actions';

describe('coins.sagas', () => {

  it('should set coins loading', async () => {
    let dispatched = await recordSaga(coinsLoad, { type: ActionTypes.COINS_LOAD });
    expect(dispatched).toContainEqual(Actions.coinsSetLoading());
  });

});
