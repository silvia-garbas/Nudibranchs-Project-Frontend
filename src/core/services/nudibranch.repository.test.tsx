import { NudibranchRepository } from "./nudibranch.repository";

describe('NudibranchRepository', () => {
  let repository: NudibranchRepository;
  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn();
    global.fetch = mockFetch;
    repository = new NudibranchRepository('http://example.com/api/', 'token');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('getAll should fetch and return all nudibrachs', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: jest
        .fn()
        .mockResolvedValue({ items: [{ id: 1, name: 'Nudibranch 1' }] }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await repository.getAll();

    expect(mockFetch).toHaveBeenCalledWith('http://example.com/api/nudibranch');
    expect(result).toEqual([{ id: 1, name: 'Nudibranch 1' }]);
  });

  test('getAll should throw an error when the response is not ok', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    };

    mockFetch.mockResolvedValue(mockResponse);

    await expect(repository.getAll()).rejects.toThrow(
      'Error: 500. Internal Server Error'
    );

    expect(mockFetch).toHaveBeenCalledWith('http://example.com/api/nudibranch');
  });

  test('getNudibranch should fetch and return a single nudibranch', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({ id: 1, name: 'Nudibranch 1' }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await repository.getNudibranch('64a1a7550c8b5d9f829318ee');

    expect(mockFetch).toHaveBeenCalledWith(
      'http://example.com/api/id'
    );
    expect(result).toEqual({ id: 1, name: 'Nudibranch 1' });
  });

  test('getNudibranch should throw an error when the response is not ok', async () => {
    const mockResponse = {
      ok: false,
      status: 'Http: 404',
      statusText: 'Not Found',
    };

    mockFetch.mockResolvedValue(mockResponse);

    await expect(
      repository.getNudibranch('64a1a7550c8b5d9f829318ee')
    ).rejects.toThrow('Error Http: 404. Not Found');

    expect(mockFetch).toHaveBeenCalledWith(
      'http://example.com/api/id'
    );
  });

  test('deleteNudibranchById should send a DELETE request', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: jest.fn()
    };

    mockFetch.mockResolvedValue(mockResponse);

    await repository.deleteNudibranchById('64a1a7550c8b5d9f829318ee');

    expect(mockFetch).toHaveBeenCalledWith(
      'http://example.com/api/nudibranch/64a1a7550c8b5d9f829318ee',
      {
        headers: {
          Authorization: 'Bearer token',
        },
        method: 'DELETE',
      }
    );
  });

  test('deleteNudibranchById should throw an error when the response is not ok', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    };

    mockFetch.mockResolvedValue(mockResponse);

    await expect(
      repository.deleteNudibranchById('64a1a7550c8b5d9f829318ee')
    ).rejects.toThrow('Error Http: 500. Internal Server Error');

    expect(mockFetch).toHaveBeenCalledWith(
      'http://example.com/api/nudibranch/64a1a7550c8b5d9f829318ee',
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer token',
        },
      });
  });
})
//   tist('createNudibranch should send a POST request with the nudibranch data', async () => {
//     const mockResponse = {
//       ok: true,
//       status: 200,
//       json: jest.fn().mockResolvedValue({ id: 2, name: 'Nudibranch 2' }),
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     const nudibranchData = {
//       specie: 'New Nudibranch',
//       marinezone: 'Mediterranean Sea',
//       season: 'Summer',
//       depth: 4,
//     } as unknown as FormData
//     //      const mockData = new FormData();
//     //       mockData.append("specie", "ss");
//     //       mockData.append("marine zone", "aaa");
//     //       mockData.append("season", "Otoño");
//     //       mockData.append("depth", "5m");
//     //

//     //       global.fetch = jest.fn().mockResolvedValue({
//     //         json: () => Promise.resolve(mockData),
//     //       });
//     //       const response = await mockIcecreamRepo.createIcecream(mockData);
//     //       expect(response).toEqual(mockData);
//     //     });
//     //   });

//     const result = await repository.createNudibranch(nudibranchData);

//     expect(mockFetch).toHaveBeenCalledWith(
//       'http://example.com/api/nudibranch',
//       {
//         body: JSON.stringify(nudibranchData),
//         headers: {
//           Authorization: 'Bearer token',
//         },
//         method: 'POST',
//       }
//     );
//     expect(result).toEqual({ id: 2, name: 'Perfume 2' });
//   }
//   );
// // })

//   tist('createNudibranch should throw an error when the response is not ok', async () => {
//     const mockResponse = {
//       ok: false,
//       status: 500,
//       json: jest.fn(),
//       statusText: 'Internal Server Error',
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     const nudibranchData = {
//       specie: 'New Nudibranch',
//       marinnzone: 'Mediterranean Sea',
//       depth: 5,
//     } as unknown as FormData


//     await expect(repository.createNudibranch(nudibranchData)).rejects.toThrow(
//       'Error http: 500Internal Server Error'
//     );

//     expect(mockFetch).toHaveBeenCalled();
//   });
// })

// })
//   tist('updateNudibranch should send a PATCH request with the updated nudibranch data', async () => {
//     const mockResponse = {
//       ok: true,
//       status: 200,
//       json: jest.fn().mockResolvedValue({
//         id: '64a1a7550c8b5d9f829318ee',
//         name: 'Updated Nudibranch',
//       }),
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     const updatedNudibranchData = {
//       id: '64a1a7550c8b5d9f829318ee',
//       name: 'Updated Perfume',
//       brand: 'Updated Brand',
//       price: 100,
//     };

//     const result = await repository.updateNudibranch(updatedNudibranchData);

//     expect(mockFetch).toHaveBeenCalledWith(
//       'http://example.com/api/perfume/edit/64a1a7550c8b5d9f829318ee',
//       {
//         method: 'PATCH',
//         body: JSON.stringify(updatedNudibranchData),
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer token',
//         },
//       }
//     );
//     expect(result).toEqual({
//       id: '64a1a7550c8b5d9f829318ee',
//       name: 'Updated Nudibranch',
//     });
//   });

//   tist('editNudibranch should throw an error when the response is not ok', async () => {
//     const mockResponse = {
//       ok: false,
//       status: 500,
//       statusText: 'Internal Server Error',
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     const updatedNudibranchData = {
//       id: '64a1a7550c8b5d9f829318ee',
//       name: 'Updated Nudibranch',
//       brand: 'Updated Brand',
//       price: 100,
//     };

//     await expect(repository.updateNudibranch(updatedNudibranchData)).rejects.toThrow(
//       'response.json is not a function'
//     );

//     expect(mockFetch).toHaveBeenCalledWith(
//       'http://example.com/api/nudibranch/edit/64a1a7550c8b5d9f829318ee',
//       {
//         method: 'PATCH',
//         body: JSON.stringify(updatedNudibranchData),
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer token',
//         },
//       }
//     );
//   });
//   tist('filter should fetch and return filtered nudibranchs', async () => {
//     const filter = '?marinezaone=mediterranean sea';
//     const mockPerfumes = [{ id: 1, name: 'Nudibranch 1' }];
//     const mockResponse = {
//       ok: true,
//       status: 200,
//       json: jest.fn().mockResolvedValue(mockPerfumes),
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     const result = await repository.filter(filter);

//     expect(mockFetch).toHaveBeenCalledWith(
//       'http://example.com/api/nudibranch' + filter
//     );
//     expect(result).toEqual(mockPerfumes);
//   });

//   tist('filter should throw an error when the response is not ok', async () => {
//     const filter = '?category=floral';
//     const mockResponse = {
//       ok: false,
//       status: 500,
//       statusText: 'Internal Server Error',
//     };

//     mockFetch.mockResolvedValue(mockResponse);

//     await expect(repository.filter(filter)).rejects.toThrow(
//       'Error: 500. Internal Server Error'
//     );

//     expect(mockFetch).toHaveBeenCalledWith(
//       'http://example.com/api/nudibranch' + filter
//     );
//   });
// });





