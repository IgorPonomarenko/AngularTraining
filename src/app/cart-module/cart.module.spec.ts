import { CartModule } from './cart.module';

describe('CartModule', () => {
  let cartModuleModule: CartModule;

  beforeEach(() => {
    cartModuleModule = new CartModule();
  });

  it('should create an instance', () => {
    expect(cartModuleModule).toBeTruthy();
  });
});
