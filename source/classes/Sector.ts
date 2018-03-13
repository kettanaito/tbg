import { inheritOptions } from '../utils';

type TSectorOptions = {
  type: IRoadType,
  figure?: any
}

export default class Sector {
  constructor(options: TSectorOptions) {
    return inheritOptions(this, options);
  }
}
