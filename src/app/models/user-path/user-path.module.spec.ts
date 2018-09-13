import { UserPathModule } from './user-path.module';

describe('UserPathModule', () => {
  let userPathModule: UserPathModule;

  beforeEach(() => {
    userPathModule = new UserPathModule();
  });

  it('should create an instance', () => {
    expect(userPathModule).toBeTruthy();
  });
});
