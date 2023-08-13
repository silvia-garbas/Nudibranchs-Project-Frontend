import { UserRepository } from './user.repository';


describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository('https://nudibranchs.sampleurl.com/');
  });

  describe('When calling the register method', () => {
    test('Then it should fetch data from the API and return the response', async () => {
      const user = {
        email: 'a@a.com',
        password: '1234567S',
      };

      const expectedUrl = 'https://nudibranchs.sampleurl.com/user/register';
      const mockResponse = {
        id: '1',

        email: 'a@a.com',
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const registeredUser = await userRepository.register(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      });
      expect(registeredUser).toEqual(mockResponse);
    });
  });

  describe('When calling the login method', () => {
    test('Then it should fetch data from the API and return the response', async () => {
      const user = {
        email: 'a@a.com',
        password: 'password123',
      };

      const expectedUrl = 'https://nudibranchs.sampleurl.com/user/login';
      const mockResponse = {
        id: '1',

        email: 'a@a.com',
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const loggedInUser = await userRepository.login(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      });
      expect(loggedInUser).toEqual(mockResponse);
    });
  });
});

