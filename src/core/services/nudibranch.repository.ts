import { Nudibranch } from '../../features/models/nudibranch';
import { ApiRepository } from './api.repository';

type ApiResponse = {
  items: Nudibranch[];
};
export class NudibranchRepository extends ApiRepository<Nudibranch> {
  constructor(public url: string, public token: string) {
    super(url, token);
  }

  async getAll(): Promise<Nudibranch[]> {
    const response = await fetch(`${this.url}nudibranch`);
    console.log(this.url);
    console.log(response);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }
  async getNudibranch(_id: Nudibranch['id']): Promise<Nudibranch> {
    const response = await fetch(`${this.url}id`);
    if (!response.ok) {
      const message = `Error ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = (await response.json()) as Nudibranch;
    return data;
  }

  async createNudibranch(item: FormData): Promise<Nudibranch> {
    const response = await fetch(`${this.url}nudibranch`, {
      method: 'POST',
      body: item,
      headers: { Authorization: 'Bearer ' + this.token },
    });
    return response.json() as Promise<Nudibranch>;
  }

  async deleteNudibranchById(id: Nudibranch['id']): Promise<Nudibranch> {
    ///_id o id?
    const response = await fetch(`${this.url}nudibranch/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    console.log(response);
    console.log('delete');
    if (!response.ok) {
      throw new Error(
        'Error Http: ' + response.status + '. ' + response.statusText
      );
    }
    return response.json();
  }
    async updateNudibranch(data: Partial<Nudibranch>): Promise<Nudibranch> {
      const response = await fetch(this.url + 'update/' + data.id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });

      return response.json() as Promise<Nudibranch>;
    }
    async filter(filter: string): Promise<ApiResponse> {
      const response = await fetch(this.url + filter);
      if (!response.ok) {
        const message = `Error: ${response.status}. ${response.statusText}`;
        throw new Error(message);
      }

      const data = response.json() as Promise<ApiResponse>;
      return data;
    }
  }

//   async updateNudibranch(data: Partial<Nudibranch>): Promise<Nudibranch> {
//     const response = await fetch(this.url + 'update/' + data.id, {
//       method: 'PATCH',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${this.token}`,
//       },
//     });

//     return response.json() as Promise<Nudibranch>;
//   }
//   async filter(filter: string): Promise<ApiResponse> {
//     const response = await fetch(this.url + filter);
//     if (!response.ok) {
//       const message = `Error: ${response.status}. ${response.statusText}`;
//       throw new Error(message);
//     }

//     const data = response.json() as Promise<ApiResponse>;
//     return data;
//   }
// }

//   async deleteNudibranchById(item: FormData): Promise<Nudibranch> {
//     const response = await fetch(`${this.url}nudibranch`, {
//       method: 'DELETE',
//       body: item,
//       headers: { Authorization: 'Bearer ' + this.token },
//     });
//     return response.json() as Promise<Nudibranch>;
//   }
// }
